import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatCell, MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';

import { Activity } from '../../dashboard/model/dashboard.entity';
import { ActivityDetailsService } from '../../activity-details/services/activity-details.service';
import { RegisteredVolunteersService } from '../services/registered-volunteers.service';
import { Certificate } from '../model/registered-volunteers.entity';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { CertificatesService } from '../../volunteers/services/certificats.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsService } from '../../notifications/services/notifications.service';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators'; // Import operators
import { LoginService } from '../../login/services/login.service';
// NUEVOS IMPORTS:
import { ParticipationService, InscriptionResponse } from '../services/participation.service'; // Asegúrate de la ruta correcta
// Si necesitas los detalles completos del voluntario para algo más que el ID,
// y tu `RegisteredVolunteersService` no los devuelve con la inscripción,
// necesitarías un servicio de voluntarios general para obtenerlos por ID.
// import { VolunteersService } from '../../volunteers/services/volunteers.service';


@Component({
  selector: 'app-registered-volunteers',
  templateUrl: './registered-volunteers.component.html',
  standalone: true,
  styleUrls: ['./registered-volunteers.component.css'],
  imports: [
    RouterLink, MatIconModule, FormsModule, MatInput, MatSuffix,
    MatFormField, TitleCasePipe, DatePipe,
    MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow,
    MatPaginator, MatHeaderRowDef, MatRowDef, MatTable,
    MatHeaderCellDef, MatCellDef, MatIconButton, MatButton,
    MatCardContent, MatCard, MatCardHeader, NgIf, MatTooltipModule,
    MatFormFieldModule, MatCardModule, MatCheckbox, TranslatePipe
  ],
  providers: [DatePipe]
})
export class RegisteredVolunteersComponent implements OnInit, AfterViewInit {
  activityId!: number;
  activity!: Activity;
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  isAttendanceMode = false;
  //attendanceMarked: { [id: string]: boolean } = {};
  private volunteerParticipations: { [volunteerId: string]: number } = {};
  private certificatesIssued: Set<number> = new Set<number>();

  allColumns = ['fullName', 'age', 'profession', 'registrationDate', 'registrationStatus', 'registrationAttendance'];
  attendanceColumns = ['fullName', 'attendanceCheckbox'];
  displayedColumns = this.allColumns;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService,
    private regVolunteersService: RegisteredVolunteersService,
    private certificatesService: CertificatesService,
    private snackBar: MatSnackBar,
    private notificationsService: NotificationsService,
    private translate: TranslateService,
    private datePipe: DatePipe,
  private loginService: LoginService,
  // NUEVA INYECCIÓN:
  private participationService: ParticipationService // Inyecta el servicio de participación
  // Si necesitas VolunteersService para obtener detalles de voluntarios, inyecta aquí:
  // private volunteersService: VolunteersService,
) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const activityId = idParam ? parseInt(idParam, 10) : null;

    if (activityId !== null && !isNaN(activityId)) {
      this.activityId = activityId;
      this.activityService.getActivityById(activityId).subscribe({
        next: activity => {
          this.activity = activity;
          this.loadExistingParticipations(activityId);
        },
        error: err => {
          const recipientId = this.activity?.organizacion_id || -1;
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
          this.notificationsService.createTypedNotification(
            'error',
            recipientId,
            recipientType,
            this.translate.instant('volunteers.activityLoadError')
          ).subscribe(() => {

          });
        }
      });
    }

    this.dataSource.filterPredicate = (data: any, filter: string) =>
      data.fullName.toLowerCase().includes(filter);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private notify(type: string, key: string, openPanel: boolean = false, customMessage?: string) {
    const recipientId = this.loginService.getOrganizationId();
    if (recipientId !== null) {
      this.notificationsService.createTypedNotification(
        type, recipientId, 'ORGANIZATION', customMessage || this.translate.instant(key)
      ).subscribe(() => {
        if (openPanel) {
          window.dispatchEvent(new Event('openNotifications'));
        }
      });
    } else {
      console.warn(`No se pudo crear la notificación de tipo '${type}': Organization ID no disponible.`);
      this.snackBar.open('No se pudo enviar la notificación: ID de organización no disponible.', 'Cerrar', { duration: 3000 });
    }
  }

  loadExistingParticipations(activityId: number): void {
    this.regVolunteersService.getParticipationsByActivityId(activityId).subscribe({
      next: (participations: any[]) => {
        this.volunteerParticipations = {};
        participations.forEach(p => {
          this.volunteerParticipations[String(p.volunteerId)] = p.id;
        });
        this.loadRegisteredVolunteers(activityId);
      },
      error: err => {
        console.error("Error loading existing participations:", err);
        const recipientId = this.activity.organizacion_id;
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          'error', // type
          recipientId, // recipientId: ID de la organización
          recipientType, // recipientType: 'ORGANIZATION'
          this.translate.instant('volunteers.participationsLoadError') // customMessage
        ).subscribe(() => {
        });
        this.loadRegisteredVolunteers(activityId);
      }
    });
  }

  loadRegisteredVolunteers(activityId: number) {
    this.regVolunteersService.getRegisteredVolunteersByActivityId(activityId).subscribe({
      next: volunteers => {
        volunteers.forEach(v => {
          v.age = this.calculateAge(v.dateOfBirth) ?? 0;
          v.hasParticipation = !!this.volunteerParticipations[String(v.id)];
          v.participationId = this.volunteerParticipations[String(v.id)] || null;
        });
        console.log('Voluntarios con datos:', volunteers);

        this.dataSource = new MatTableDataSource(volunteers);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
          this.paginator.pageSize = 7;
        }
      },
      error: err => {
        console.log("error cargando participantes", err)
        const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          'error', // type
          recipientId, // recipientId: ID de la organización
          recipientType, // recipientType: 'ORGANIZATION'
          this.translate.instant('volunteers.registeredVolunteersLoadError') // customMessage
        ).subscribe(() => {
        });
      }
    });
  }

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  calculateAge(dateOfBirth: string): number | null {
    if (!dateOfBirth) return null;
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  toggleAttendanceMode() {
    this.isAttendanceMode = !this.isAttendanceMode;
    this.displayedColumns = this.isAttendanceMode ? this.attendanceColumns : this.allColumns;

  }

  onAttendanceChange(volunteer: any, checked: boolean) {
    const volunteerId = volunteer.id;
    const activityId = this.activityId;

    if (checked) {
      this.regVolunteersService.createParticipationByAttendance(volunteerId, activityId).subscribe({ // ¡Usa regVolunteersService!
        next: (response) => {
          console.log(`Participación creada para voluntario ${volunteerId}:`, response);
          const recipientId = volunteerId; // volunteerId is available in the onAttendanceChange method
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'VOLUNTEER';
          this.notificationsService.createTypedNotification(
            'success', // type
            recipientId, // recipientId: ID del voluntario
            recipientType, // recipientType: 'VOLUNTEER'
            this.translate.instant('volunteers.participationCreated') // customMessage
          ).subscribe(() => {
          });
          this.volunteerParticipations[String(volunteerId)] = response.id;
          volunteer.hasParticipation = true;
          volunteer.participationId = response.id;
        },
        error: (err) => {
          console.error(`Error al crear participación para voluntario ${volunteerId}:`, err);
          const recipientId = volunteerId; // `volunteerId` is available in the `onAttendanceChange` method scope
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'VOLUNTEER';
          this.notificationsService.createTypedNotification(
            'error', // type
            recipientId, // recipientId: ID del voluntario
            recipientType, // recipientType: 'VOLUNTEER'
            this.translate.instant('volunteers.participationCreateError') // customMessage
          ).subscribe(() => {
          });
          volunteer.hasParticipation = false;
        }
      });
    } else {
      const participationIdToDelete = this.volunteerParticipations[String(volunteerId)];

      if (participationIdToDelete) {
        this.regVolunteersService.deleteParticipation(participationIdToDelete).subscribe({ // ¡Usa regVolunteersService!
          next: () => {
            console.log(`Participación ${participationIdToDelete} eliminada para voluntario ${volunteerId}`);
            const recipientId = volunteerId; // volunteerId is available in the onAttendanceChange method
            const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'VOLUNTEER';
            this.notificationsService.createTypedNotification(
              'error', // type
              recipientId, // recipientId: ID del voluntario
              recipientType, // recipientType: 'VOLUNTEER'
              this.translate.instant('volunteers.participationCreateError') // customMessage
            ).subscribe(() => {
            });
            delete this.volunteerParticipations[String(volunteerId)];
            volunteer.hasParticipation = false;
            volunteer.participationId = null;
          },
          error: (err) => {
            console.error(`Error al eliminar participación ${participationIdToDelete}:`, err);
            const recipientId = volunteerId; // `volunteerId` is available in the `onAttendanceChange` method scope
            const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'VOLUNTEER';
            this.notificationsService.createTypedNotification(
              'error', // type
              recipientId, // recipientId: ID del voluntario
              recipientType, // recipientType: 'VOLUNTEER'
              this.translate.instant('volunteers.participationDeleteError') // customMessage
            ).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
            volunteer.hasParticipation = true;
          }
        });
      } else {
        console.warn(`No se encontró participationId para eliminar para el voluntario ${volunteerId}.`);
        const recipientId = volunteerId; // volunteerId is available in the onAttendanceChange method
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'VOLUNTEER';
        this.notificationsService.createTypedNotification(
          'error', // type
          recipientId, // recipientId: ID del voluntario
          recipientType, // recipientType: 'VOLUNTEER'
          this.translate.instant('volunteers.participationDeleteError') // customMessage
        ).subscribe(() => {
        });
        volunteer.hasParticipation = false;
      }
    }
  }

  generateCertificates() {
    if (!this.activity) return;

    // Get unique volunteer IDs that have participation
    const volunteerIdsWithParticipation = new Set<number>();
    this.dataSource.data
      .filter(v => v.hasParticipation && v.participationId !== null)
      .forEach(v => volunteerIdsWithParticipation.add(v.id));

    if (volunteerIdsWithParticipation.size === 0) {
      const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
      this.notificationsService.createTypedNotification(
        'error', // type
        recipientId, // recipientId: ID de la organización
        recipientType, // recipientType: 'ORGANIZATION'
        this.translate.instant('volunteers.noVolunteersAttendedForCertificates') // customMessage
      ).subscribe(() => {
      });
      return;
    }

    // Fetch existing certificates for these volunteers to avoid duplicates
    const fetchCertificatesObservables = Array.from(volunteerIdsWithParticipation).map(volunteerId =>
      this.certificatesService.getCertificatesByVolunteer(volunteerId).pipe(
        catchError(err => {
          console.error(`Error fetching certificates for volunteer ${volunteerId}:`, err);
          return of([]); // Return an empty array on error to allow other requests to complete
        })
      )
    );

    forkJoin(fetchCertificatesObservables).pipe(
      map((allCertificatesArrays: any[][]) => {
        this.certificatesIssued.clear(); // Clear previous state
        allCertificatesArrays.forEach(certs => {
          certs.forEach(cert => {
            if (cert.participationId) {
              this.certificatesIssued.add(cert.participationId);
            }
          });
        });

        // Filter volunteers who have participation and no existing certificate
        return this.dataSource.data.filter(v =>
          v.hasParticipation &&
          v.participationId !== null &&
          !this.certificatesIssued.has(v.participationId)
        );
      }),
      switchMap(volunteersToCertify => {
        if (volunteersToCertify.length === 0) {
          const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
          this.notificationsService.createTypedNotification(
            'info', // type
            recipientId, // recipientId: ID de la organización
            recipientType, // recipientType: 'ORGANIZATION'
            this.translate.instant('volunteers.allCertificatesAlreadyGenerated') // customMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
          return of(0); // Explicitly return a number (0) when no certificates are generated
        }

        const certificatesToPost = volunteersToCertify.map(v => {
          const description = this.translate.instant('volunteers.certificateText', {
            fullName: `${v.firstName} ${v.lastName}`,
            activityTitle: this.activity.titulo,
            activityDate: this.datePipe.transform(this.activity.fecha, 'mediumDate')
          });
          return new Certificate(v.participationId, description);
        });

        // ForkJoin for posting, then map to just return the count of certificates posted
        return forkJoin(certificatesToPost.map(cert => this.certificatesService.postCertificate(cert))).pipe(
          map(() => certificatesToPost.length), // Emit the number of certificates posted
          catchError(err => {
            console.error("Error posting certificates:", err);
            const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
            const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
            this.notificationsService.createTypedNotification(
              'error', // type
              recipientId, // recipientId: ID de la organización
              recipientType, // recipientType: 'ORGANIZATION'
              this.translate.instant('volunteers.certificateGenerationError') // customMessage
            ).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
            return of(0); // Return 0 on error
          })
        );
      })
      // Add a catchError to the outer pipe as well, to catch errors from any stage before the final subscribe
    ).subscribe({
      next: (count: number) => { // Explicitly type 'count' here
        if (count > 0) {
          const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

          this.notificationsService.createTypedNotification(
            'certificate', // type
            recipientId, // recipientId: ID de la organización
            recipientType, // recipientType: 'ORGANIZATION'
            this.translate.instant('volunteers.certificatesGeneratedAndSent', { count: count }) // customMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
          this.dataSource.data
            .filter(v => v.hasParticipation && v.participationId !== null && !this.certificatesIssued.has(v.participationId))
            .forEach(v => this.certificatesIssued.add(v.participationId));
        }
      },
      error: err => { // This error handler will catch errors from the outer pipe
        console.error("Unhandled error during certificate generation process:", err);
        const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          'error', // type
          recipientId, // recipientId: ID de la organización
          recipientType, // recipientType: 'ORGANIZATION'
          this.translate.instant('volunteers.certificateGenerationError') // customMessage
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  // --- MÉTODO toNotify() MODIFICADO ---
  toNotify(): void {
    if (this.activityId === null) {
      this.snackBar.open('Error: ID de actividad no disponible para enviar notificaciones.', 'Cerrar', { duration: 3000 });
      return;
    }

    const organizationId = this.loginService.getOrganizationId();
    if (organizationId === null) {
      this.snackBar.open('Error: No se pudo obtener el ID de la organización. Por favor, inicie sesión de nuevo.', 'Cerrar', { duration: 5000 });
      return;
    }

    console.log('Iniciando envío de recordatorios para la actividad ID:', this.activityId);
    console.log('ID de organización logueada para resumen:', organizationId);

    this.snackBar.open('Obteniendo voluntarios registrados...', 'Cerrar', { duration: 2000 });

    this.participationService.getInscriptionsByActivityId(this.activityId).subscribe({
      next: (inscriptions: InscriptionResponse[]) => {
        console.log('Inscripciones obtenidas:', inscriptions);

        if (inscriptions && inscriptions.length > 0) {
          let successfulSends = 0;
          let failedSends = 0;
          const totalVolunteers = inscriptions.length;
          this.snackBar.open(`Enviando recordatorios a ${totalVolunteers} voluntarios...`, 'Cerrar', { duration: 3000 });

          inscriptions.forEach(inscription => {
            if (inscription.voluntarioId !== undefined && inscription.voluntarioId !== null) {
              // *** CONSOLE.LOG DEL PAYLOAD REAL ANTES DE ENVIARLO ***
              // createTypedNotification construirá este objeto internamente
              // pero aquí lo estamos simulando para el log
              const notificationPayload = {
                type: 'REMINDER',
                recipientId: inscription.voluntarioId,
                recipientType: 'VOLUNTEER',
                // customTitle y customMessage no se envían si el backend usa valores por defecto para REMINDER
                // Solo si el type es GENERIC y se pasaran explícitamente en la llamada a createTypedNotification
              };
              console.log(`PREPARANDO PAYLOAD para voluntario ${inscription.voluntarioId}:`, notificationPayload);
              // ******************************************************

              this.notificationsService.createTypedNotification2(
                'REMINDER',
                inscription.voluntarioId,
                'VOLUNTEER'
              ).subscribe({
                next: (response) => {
                  successfulSends++;
                  console.log(`Notificación enviada exitosamente al voluntario ID ${inscription.voluntarioId}. Respuesta del backend:`, response);
                  this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId);
                },
                error: (err) => {
                  failedSends++;
                  console.error(`ERROR al enviar recordatorio al voluntario ${inscription.voluntarioId}:`, err);
                  this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId, err);
                }
              });
            } else {
              failedSends++;
              console.warn('Inscripción sin ID de voluntario válido, no se pudo enviar notificación:', inscription);
              this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId);
            }
          });
        } else {
          console.log('No hay voluntarios registrados en esta actividad. No se enviarán recordatorios.');
          this.snackBar.open('No hay voluntarios registrados en esta actividad para enviar recordatorios.', 'Cerrar', { duration: 4000 });
          this.notify('info', 'volunteers.noVolunteersRegisteredForReminders', true, 'No hay voluntarios registrados en esta actividad para enviar recordatorios.');
        }
      },
      error: (err) => {
        console.error('Error al obtener la lista de inscripciones para enviar recordatorios:', err);
        this.snackBar.open('Error al cargar la lista de voluntarios para enviar recordatorios.', 'Cerrar', { duration: 5000 });
        this.notify('error', 'volunteers.errorLoadingVolunteersForReminders', true, 'Error al obtener la lista de voluntarios para enviar recordatorios.');
      }
    });
  }


  // --- MÉTODO checkCompletionAndNotifySummary AÑADIDO ---
  private checkCompletionAndNotifySummary(successful: number, failed: number, total: number, organizationId: number, errorDetail?: any): void {
    if (successful + failed === total) {
      let message: string;
      if (successful === total) {
        message = `Recordatorios enviados exitosamente a los ${successful} voluntarios de la actividad.`;
      } else if (successful > 0) {
        message = `Se enviaron ${successful} recordatorios. ${failed} fallaron.`;
        if (errorDetail && errorDetail.status === 403) {
          message += ' (Algunos fallaron por falta de permisos o el voluntario no existe.)';
        } else if (errorDetail) {
          message += ` (Errores: ${errorDetail.message || 'Desconocido'})`;
        }
      } else {
        message = `Fallo el envío de recordatorios a todos los ${total} voluntarios.`;
        if (errorDetail && errorDetail.status === 403) {
          message += ' (Posiblemente por falta de permisos o el voluntario no existe.)';
        } else if (errorDetail) {
          message += ` (Errores: ${errorDetail.message || 'Desconocido'})`;
        }
      }

      this.notificationsService.createTypedNotification(
        'GENERIC',
        organizationId,
        'ORGANIZATION',
        message
      ).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      this.snackBar.open(message, 'Cerrar', { duration: 5000 });
    }
  }
  toggleRegistrationStatus(): void {
    if (!this.activity) return;

    const newStatus = this.activity.estado === 'Abierta' ? 'Cerrada' : 'Abierta';
    const originalStatus = this.activity.estado;

    this.activity.estado = newStatus;

    this.activityService.updateActivity(this.activity.actividad_id!, {
      fecha: this.activity.fecha,
      horaInicio: this.activity.horaInicio,
      horaFin: this.activity.horaFin,
      titulo: this.activity.titulo,
      descripcion: this.activity.descripcion,
      instrucciones: this.activity.instrucciones,
      proposito: this.activity.proposito,
      cupos: this.activity.cupos,
      ubicacion: this.activity.ubicacion,
      estado: newStatus,
      organizacionId: this.activity.organizacion_id,
      imagenes: this.activity.imagenes
    }).subscribe({
      next: () => {
        const msgKey = newStatus === 'Abierta' ? 'volunteers.registrationsOpened' : 'volunteers.registrationsClosed';
        const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          'success', // type
          recipientId, // recipientId: ID de la organización
          recipientType, // recipientType: 'ORGANIZATION'
          this.translate.instant(msgKey) // customMessage
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });

        this.activityService.getActivityById(this.activityId).subscribe({
          next: updated => this.activity = updated
        });
      },
      error: err => {
        this.activity.estado = originalStatus;
        const recipientId = this.activity.organizacion_id; // Use the organization ID from the loaded activity
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          'error', // type
          recipientId, // recipientId: ID de la organización
          recipientType, // recipientType: 'ORGANIZATION'
          this.translate.instant('volunteers.registrationStatusUpdateError') // customMessage
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }
}
