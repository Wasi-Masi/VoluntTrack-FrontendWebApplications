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
// Import RegisteredVolunteer if your service returns it directly in the array
import { Certificate, RegisteredVolunteer } from '../model/registered-volunteers.entity';
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
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginService } from '../../login/services/login.service';
import { ParticipationService, InscriptionResponse } from '../services/participation.service';
// NEW IMPORTS FOR TYPE SAFETY
import { ApiResponse } from '../../shared/models/api-response.interface'; // Assuming this path
import { NotificationType } from '../../notifications/model/notification-type.enum'; // Assuming this path


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
  private volunteerParticipations: { [id: string]: number } = {}; // Changed key to string
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
    private participationService: ParticipationService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const activityId = idParam ? parseInt(idParam, 10) : null;

    if (activityId !== null && !isNaN(activityId)) {
      this.activityId = activityId;
      this.activityService.getActivityById(activityId).subscribe({
        next: (response: ApiResponse<Activity>) => { // Expect ApiResponse<Activity>
          if (response.data) {
            this.activity = response.data;
            this.loadExistingParticipations(activityId);
          } else {
            console.error("No activity data found in the response for ID:", activityId);
            this.notifyErrorActivityLoad();
          }
        },
        error: err => {
          console.error("Error loading activity:", err);
          this.notifyErrorActivityLoad();
        }
      });
    }

    this.dataSource.filterPredicate = (data: any, filter: string) =>
      data.fullName?.toLowerCase().includes(filter) || false; // Added null check for fullName
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private notifyErrorActivityLoad() {
    const recipientId = this.activity?.organizacion_id || -1;
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
    this.notificationsService.createTypedNotification(
      NotificationType.ERROR, // Using enum
      recipientId,
      recipientType,
      this.translate.instant('volunteers.activityLoadError')
    ).subscribe(() => {});
  }

  private notify(type: NotificationType, key: string, openPanel: boolean = false, customMessage?: string) {
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
      console.warn(`Could not create notification of type '${type}': Organization ID not available.`);
      this.snackBar.open('Could not send notification: Organization ID not available.', 'Close', { duration: 3000 });
    }
  }

  loadExistingParticipations(activityId: number): void {
    this.regVolunteersService.getParticipationsByActivityId(activityId).subscribe({
      next: (response: ApiResponse<any[]>) => { // Expect ApiResponse<any[]>
        this.volunteerParticipations = {};
        if (response.data) {
          response.data.forEach(p => {
            this.volunteerParticipations[String(p.volunteerId)] = p.id;
          });
        }
        this.loadRegisteredVolunteers(activityId);
      },
      error: err => {
        console.error("Error loading existing participations:", err);
        const recipientId = this.activity?.organizacion_id || -1;
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          NotificationType.ERROR, // Using enum
          recipientId,
          recipientType,
          this.translate.instant('volunteers.participationsLoadError')
        ).subscribe(() => {});
        this.loadRegisteredVolunteers(activityId);
      }
    });
  }

  loadRegisteredVolunteers(activityId: number) {
    this.regVolunteersService.getRegisteredVolunteersByActivityId(activityId).subscribe({
      // Expect the response to be ApiResponse<RegisteredVolunteer[]>
      next: (response: ApiResponse<RegisteredVolunteer[]>) => {
        // Check if the 'data' property exists and contains an array
        if (response.data && Array.isArray(response.data)) {
          const volunteers = response.data; // Access the array from the 'data' property

          volunteers.forEach(v => {
            v.age = this.calculateAge(v.dateOfBirth) ?? 0;
            v.hasParticipation = !!this.volunteerParticipations[String(v.id)];
            v.participationId = this.volunteerParticipations[String(v.id)] || null;

            // IMPORTANT: If 'v.fullName' is expected directly from the API,
            // no further construction from firstName/lastName is needed here.
            // Your current RegisteredVolunteer class already has 'fullName'.
            // So, the problematic line 'if (!v.fullName && v.firstName && v.lastName)'
            // and the subsequent casting are not needed if the API sends fullName.
            // If the API sends firstName/lastName but not fullName, you will still have issues
            // unless the API is changed or a new interface is introduced.
          });
          console.log('Voluntarios con datos:', volunteers);

          this.dataSource = new MatTableDataSource(volunteers);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
            this.paginator.pageSize = 7;
          }
        } else {
          // Handle cases where response.data is null, undefined, or not an array
          console.warn("No registered volunteers data or invalid data format found in the response.", response);
          this.dataSource = new MatTableDataSource<any>([]); // Clear data source
          // Optionally notify the user about an issue with data format
          const recipientId = this.activity?.organizacion_id || -1;
          this.notificationsService.createTypedNotification(
            NotificationType.INFO,
            recipientId,
            'ORGANIZATION',
            this.translate.instant('volunteers.noDataFound') // Assuming you have a translation key for "No data found"
          ).subscribe(() => {});
        }
      },
      error: err => {
        console.error("Error cargando participantes:", err);
        const recipientId = this.activity?.organizacion_id || -1; // Use nullish coalescing for safety
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';
        this.notificationsService.createTypedNotification(
          NotificationType.ERROR, // Using enum for 'error'
          recipientId,
          recipientType,
          this.translate.instant('volunteers.registeredVolunteersLoadError')
        ).subscribe(() => {
          // Optionally, dispatch an event to open notifications panel if desired
        });
        this.dataSource = new MatTableDataSource<any>([]); // Ensure dataSource is cleared on error
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
      this.regVolunteersService.createParticipationByAttendance(volunteerId, activityId).subscribe({
        next: (response: ApiResponse<any>) => { // Expect ApiResponse
          console.log(`Participation created for volunteer ${volunteerId}:`, response);
          this.notificationsService.createTypedNotification(
            NotificationType.SUCCESS, // Using enum
            volunteerId,
            'VOLUNTEER',
            this.translate.instant('volunteers.participationCreated')
          ).subscribe(() => {});
          if (response.data?.id) { // Check if response.data and response.data.id exist
            this.volunteerParticipations[String(volunteerId)] = response.data.id;
            volunteer.hasParticipation = true;
            volunteer.participationId = response.data.id;
          } else {
            console.error("Participation ID not found in response data.");
            // Revert UI state if backend response is unexpected
            volunteer.hasParticipation = false;
            volunteer.participationId = null;
            this.notificationsService.createTypedNotification(
              NotificationType.ERROR, // Using enum
              volunteerId,
              'VOLUNTEER',
              this.translate.instant('volunteers.participationCreateError') + ' (ID missing)'
            ).subscribe(() => {});
          }
        },
        error: (err) => {
          console.error(`Error creating participation for volunteer ${volunteerId}:`, err);
          this.notificationsService.createTypedNotification(
            NotificationType.ERROR, // Using enum
            volunteerId,
            'VOLUNTEER',
            this.translate.instant('volunteers.participationCreateError')
          ).subscribe(() => {});
          volunteer.hasParticipation = false; // Ensure UI reflects failure
        }
      });
    } else {
      const participationIdToDelete = this.volunteerParticipations[String(volunteerId)];

      if (participationIdToDelete) {
        this.regVolunteersService.deleteParticipation(participationIdToDelete).subscribe({
          next: (response: ApiResponse<any>) => { // Expect ApiResponse
            console.log(`Participation ${participationIdToDelete} deleted for volunteer ${volunteerId}:`, response.message);
            this.notificationsService.createTypedNotification(
              NotificationType.INFO, // Using enum
              volunteerId,
              'VOLUNTEER',
              this.translate.instant('volunteers.participationDeleted')
            ).subscribe(() => {});
            delete this.volunteerParticipations[String(volunteerId)];
            volunteer.hasParticipation = false;
            volunteer.participationId = null;
          },
          error: (err) => {
            console.error(`Error deleting participation ${participationIdToDelete}:`, err);
            this.notificationsService.createTypedNotification(
              NotificationType.ERROR, // Using enum
              volunteerId,
              'VOLUNTEER',
              this.translate.instant('volunteers.participationDeleteError')
            ).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
            volunteer.hasParticipation = true; // Ensure UI reflects failure
          }
        });
      } else {
        console.warn(`No participationId found to delete for volunteer ${volunteerId}.`);
        this.notificationsService.createTypedNotification(
          NotificationType.ERROR, // Using enum
          volunteerId,
          'VOLUNTEER',
          this.translate.instant('volunteers.participationDeleteError') + ' (ID not found)'
        ).subscribe(() => {});
        volunteer.hasParticipation = false; // Ensure UI reflects not having participation
      }
    }
  }

  generateCertificates() {
    if (!this.activity) return;

    const volunteerIdsWithParticipation = new Set<number>();
    this.dataSource.data
      .filter((v: any) => v.hasParticipation && v.participationId !== null)
      .forEach((v: any) => volunteerIdsWithParticipation.add(v.id));

    if (volunteerIdsWithParticipation.size === 0) {
      this.notificationsService.createTypedNotification(
        NotificationType.ERROR, // Using enum
        this.activity.organizacion_id,
        'ORGANIZATION',
        this.translate.instant('volunteers.noVolunteersAttendedForCertificates')
      ).subscribe(() => {});
      return;
    }

    const fetchCertificatesObservables = Array.from(volunteerIdsWithParticipation).map(volunteerId =>
      this.certificatesService.getCertificatesByVolunteer(volunteerId).pipe(
        map((response: ApiResponse<any[]>) => response.data || []), // Assume ApiResponse for certificates
        catchError(err => {
          console.error(`Error fetching certificates for volunteer ${volunteerId}:`, err);
          return of([]);
        })
      )
    );

    forkJoin(fetchCertificatesObservables).pipe(
      map((allCertificatesArrays: any[][]) => {
        this.certificatesIssued.clear();
        allCertificatesArrays.forEach(certs => {
          certs.forEach(cert => {
            if (cert.participationId) {
              this.certificatesIssued.add(cert.participationId);
            }
          });
        });

        return this.dataSource.data.filter((v: any) =>
          v.hasParticipation &&
          v.participationId !== null &&
          !this.certificatesIssued.has(v.participationId)
        );
      }),
      switchMap(volunteersToCertify => {
        if (volunteersToCertify.length === 0) {
          this.notificationsService.createTypedNotification(
            NotificationType.INFO, // Using enum
            this.activity.organizacion_id,
            'ORGANIZATION',
            this.translate.instant('volunteers.allCertificatesAlreadyGenerated')
          ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
          return of(0);
        }

        const certificatesToPost = volunteersToCertify.map((v: any) => {
          const description = this.translate.instant('volunteers.certificateText', {
            fullName: `${v.firstName || ''} ${v.lastName || ''}`,
            activityTitle: this.activity.titulo,
            activityDate: this.datePipe.transform(this.activity.fecha, 'mediumDate')
          });
          return new Certificate(v.participationId, description);
        });

        return forkJoin(certificatesToPost.map(cert =>
          this.certificatesService.postCertificate(cert).pipe(
            map((response: ApiResponse<any>) => response.data), // Assume ApiResponse for postCertificate
            catchError(err => {
              console.error("Error posting certificate:", err);
              throw err;
            })
          )
        )).pipe(
          map(() => certificatesToPost.length),
          catchError(err => {
            console.error("Error posting certificates (batch):", err);
            this.notificationsService.createTypedNotification(
              NotificationType.ERROR, // Using enum
              this.activity.organizacion_id,
              'ORGANIZATION',
              this.translate.instant('volunteers.certificateGenerationError')
            ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
            return of(0);
          })
        );
      })
    ).subscribe({
      next: (count: number) => {
        if (count > 0) {
          this.notificationsService.createTypedNotification(
            NotificationType.CERTIFICATE_READY, // Using enum
            this.activity.organizacion_id,
            'ORGANIZATION',
            this.translate.instant('volunteers.certificatesGeneratedAndSent', { count: count })
          ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
          this.dataSource.data
            .filter((v: any) => v.hasParticipation && v.participationId !== null && !this.certificatesIssued.has(v.participationId))
            .forEach((v: any) => this.certificatesIssued.add(v.participationId));
        }
      },
      error: err => {
        console.error("Unhandled error during certificate generation process:", err);
        this.notificationsService.createTypedNotification(
          NotificationType.ERROR, // Using enum
          this.activity.organizacion_id,
          'ORGANIZATION',
          this.translate.instant('volunteers.certificateGenerationError')
        ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
      }
    });
  }

  toNotify(): void {
    if (this.activityId === null) {
      this.snackBar.open('Error: Activity ID not available to send notifications.', 'Close', { duration: 3000 });
      return;
    }

    const organizationId = this.loginService.getOrganizationId();
    if (organizationId === null) {
      this.snackBar.open('Error: Could not get organization ID. Please log in again.', 'Close', { duration: 5000 });
      return;
    }

    console.log('Initiating reminder sending for activity ID:', this.activityId);
    console.log('Logged-in organization ID for summary:', organizationId);

    this.snackBar.open('Getting registered volunteers...', 'Close', { duration: 2000 });

    this.participationService.getInscriptionsByActivityId(this.activityId).subscribe({
      next: (response: ApiResponse<InscriptionResponse[]>) => { // Expect ApiResponse
        const inscriptions = response.data; // Access data via .data
        console.log('Inscriptions obtained:', inscriptions);

        if (inscriptions && inscriptions.length > 0) {
          let successfulSends = 0;
          let failedSends = 0;
          const totalVolunteers = inscriptions.length;
          this.snackBar.open(`Sending reminders to ${totalVolunteers} volunteers...`, 'Close', { duration: 3000 });

          inscriptions.forEach(inscription => {
            if (inscription.voluntarioId !== undefined && inscription.voluntarioId !== null) {
              const notificationPayload = {
                type: NotificationType.REMINDER, // Using enum
                recipientId: inscription.voluntarioId,
                recipientType: 'VOLUNTEER',
              };
              console.log(`PREPARING PAYLOAD for volunteer ${inscription.voluntarioId}:`, notificationPayload);

              this.notificationsService.createTypedNotification2(
                NotificationType.REMINDER, // Using enum
                inscription.voluntarioId,
                'VOLUNTEER'
              ).subscribe({
                next: (res: ApiResponse<any>) => { // Expect ApiResponse
                  successfulSends++;
                  console.log(`Notification sent successfully to volunteer ID ${inscription.voluntarioId}. Backend response:`, res.message);
                  this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId);
                },
                error: (err) => {
                  failedSends++;
                  console.error(`ERROR sending reminder to volunteer ${inscription.voluntarioId}:`, err);
                  this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId, err);
                }
              });
            } else {
              failedSends++;
              console.warn('Inscription without valid volunteer ID, could not send notification:', inscription);
              this.checkCompletionAndNotifySummary(successfulSends, failedSends, totalVolunteers, organizationId);
            }
          });
        } else {
          console.log('No registered volunteers for this activity. No reminders will be sent.');
          this.snackBar.open('No registered volunteers for this activity to send reminders.', 'Close', { duration: 4000 });
          this.notify(NotificationType.INFO, 'volunteers.noVolunteersRegisteredForReminders', true, 'No registered volunteers for this activity to send reminders.'); // Using enum
        }
      },
      error: (err) => {
        console.error('Error getting the list of inscriptions to send reminders:', err);
        this.snackBar.open('Error loading the list of volunteers to send reminders.', 'Close', { duration: 5000 });
        this.notify(NotificationType.ERROR, 'volunteers.errorLoadingVolunteersForReminders', true, 'Error loading the list of volunteers to send reminders.'); // Using enum
      }
    });
  }

  private checkCompletionAndNotifySummary(successful: number, failed: number, total: number, organizationId: number, errorDetail?: any): void {
    if (successful + failed === total) {
      let message: string;
      if (successful === total) {
        message = `Reminders successfully sent to all ${successful} volunteers for the activity.`;
      } else if (successful > 0) {
        message = `${successful} reminders were sent. ${failed} failed.`;
        if (errorDetail && errorDetail.status === 403) {
          message += ' (Some failed due to missing permissions or volunteer not existing.)';
        } else if (errorDetail) {
          message += ` (Errors: ${errorDetail.message || 'Unknown'})`;
        }
      } else {
        message = `Failed to send reminders to all ${total} volunteers.`;
        if (errorDetail && errorDetail.status === 403) {
          message += ' (Possibly due to missing permissions or volunteer not existing.)';
        } else if (errorDetail) {
          message += ` (Errors: ${errorDetail.message || 'Unknown'})`;
        }
      }

      this.notificationsService.createTypedNotification(
        NotificationType.GENERIC, // Using enum
        organizationId,
        'ORGANIZATION',
        message
      ).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      this.snackBar.open(message, 'Close', { duration: 5000 });
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
      next: (response: ApiResponse<Activity>) => { // Expect ApiResponse<Activity>
        if (response.data) {
          const msgKey = newStatus === 'Abierta' ? 'volunteers.registrationsOpened' : 'volunteers.registrationsClosed';
          this.notificationsService.createTypedNotification(
            NotificationType.SUCCESS, // Using enum
            this.activity.organizacion_id,
            'ORGANIZATION',
            this.translate.instant(msgKey)
          ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });

          this.activity = response.data; // Update with data from response
        } else {
          console.error("No updated activity data received in the response.");
          this.activity.estado = originalStatus; // Revert status on data missing
          this.notificationsService.createTypedNotification(
            NotificationType.ERROR, // Using enum
            this.activity.organizacion_id,
            'ORGANIZATION',
            this.translate.instant('volunteers.registrationStatusUpdateError') + ' (data missing)'
          ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
        }
      },
      error: err => {
        this.activity.estado = originalStatus; // Revert status on error
        this.notificationsService.createTypedNotification(
          NotificationType.ERROR, // Using enum
          this.activity.organizacion_id,
          'ORGANIZATION',
          this.translate.instant('volunteers.registrationStatusUpdateError')
        ).subscribe(() => { window.dispatchEvent(new Event('openNotifications')); });
      }
    });
  }
}
