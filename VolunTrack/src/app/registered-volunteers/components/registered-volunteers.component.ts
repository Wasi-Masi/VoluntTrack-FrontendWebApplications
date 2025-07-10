import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { forkJoin } from 'rxjs';
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
    MatCell, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
    MatRow, MatRowDef, MatTable,
    MatHeaderCellDef, MatCellDef, MatIconButton, MatButton,
    MatCardContent, MatCard, MatCardHeader, NgIf, MatTooltipModule,
    MatFormFieldModule, MatCardModule, MatCheckbox, TranslatePipe, MatPaginator
  ],
  providers: [DatePipe]
})
export class RegisteredVolunteersComponent implements OnInit, AfterViewInit {
  activityId!: number;
  activity!: Activity;
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  isAttendanceMode = false;
  private volunteerParticipations: { [volunteerId: string]: number } = {};

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
        error: () => this.notify('error', 'volunteers.activityLoadError')
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
      error: () => {
        this.notify('error', 'volunteers.participationsLoadError');
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

        this.dataSource = new MatTableDataSource(volunteers);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
          this.paginator.pageSize = 7;
        }
      },
      error: () => this.notify('error', 'volunteers.registeredVolunteersLoadError')
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
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
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
    const participationId = this.volunteerParticipations[String(volunteerId)];

    if (checked) {
      this.regVolunteersService.createParticipationByAttendance(volunteerId, this.activityId).subscribe({
        next: response => {
          this.notify('success', 'volunteers.participationCreated');
          this.volunteerParticipations[String(volunteerId)] = response.id;
          volunteer.hasParticipation = true;
          volunteer.participationId = response.id;
        },
        error: () => {
          this.notify('error', 'volunteers.participationCreateError');
          volunteer.hasParticipation = false;
        }
      });
    } else if (participationId) {
      this.regVolunteersService.deleteParticipation(participationId).subscribe({
        next: () => {
          this.notify('success', 'volunteers.participationDeleted');
          delete this.volunteerParticipations[String(volunteerId)];
          volunteer.hasParticipation = false;
          volunteer.participationId = null;
        },
        error: () => {
          this.notify('error', 'volunteers.participationDeleteError');
          volunteer.hasParticipation = true;
        }
      });
    } else {
      this.notify('info', 'volunteers.noParticipationToDelete');
      volunteer.hasParticipation = false;
    }
  }

  generateCertificates() {
    if (!this.activity) {
      this.snackBar.open('Error: Detalles de la actividad no cargados.', 'Cerrar', { duration: 3000 });
      return;
    }

    const certificados: Certificate[] = this.dataSource.data
      .filter(v => v.hasParticipation)
      .map(v => new Certificate(
        crypto.randomUUID(),
        v.volunteerId,
        this.activity.titulo,
        this.translate.instant('volunteers.certificateText', {
          fullName: v.fullName,
          activityTitle: this.activity.titulo,
          activityDate: this.datePipe.transform(this.activity.fecha, 'mediumDate')
        })
      ));

    if (certificados.length === 0) {
      this.notify('error', 'volunteers.noVolunteersAttendedForCertificates');
      return;
    }

    forkJoin(certificados.map(cert => this.certificatesService.postCertificate(cert))).subscribe({
      next: () => this.notify('certificate', 'volunteers.certificatesGeneratedAndSent'),
      error: () => this.notify('error', 'volunteers.certificateGenerationError')
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
    if (!this.activity || this.activityId === null) {
      this.snackBar.open('Error: No se pudo cambiar el estado de la actividad (actividad no cargada).', 'Cerrar', { duration: 3000 });
      return;
    }

    const newState = this.activity.estado === 'Abierta' ? 'Cerrada' : 'Abierta';
    const originalState = this.activity.estado;

    this.snackBar.open(`Cambiando estado de la actividad a ${newState}...`, 'Cerrar', { duration: 2000 });

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
      estado: newState,
      organizacionId: this.activity.organizacion_id,
      imagenes: this.activity.imagenes
    }).subscribe({
      next: () => {
        const msgKey = newState === 'Abierta'
          ? 'volunteers.registrationsOpened'
          : 'volunteers.registrationsClosed';
        this.notify('success', msgKey);
        this.activityService.getActivityById(this.activityId).subscribe({
          next: updated => this.activity = updated
        });
      },
      error: () => {
        this.activity.estado = originalState;
        this.notify('error', 'volunteers.registrationStatusUpdateError');
      }
    });
  }
}
