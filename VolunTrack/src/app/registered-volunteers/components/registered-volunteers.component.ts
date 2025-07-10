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
import { forkJoin } from 'rxjs';

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
    private datePipe: DatePipe
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
          this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.activityLoadError')).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
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
        this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.participationsLoadError')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
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
        this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.registeredVolunteersLoadError')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
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
          this.notificationsService.createTypedNotification('success', this.translate.instant('volunteers.participationCreated')).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
          this.volunteerParticipations[String(volunteerId)] = response.id;
          volunteer.hasParticipation = true;
          volunteer.participationId = response.id;
        },
        error: (err) => {
          console.error(`Error al crear participación para voluntario ${volunteerId}:`, err);
          this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.participationCreateError')).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
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
            this.notificationsService.createTypedNotification('success', this.translate.instant('volunteers.participationDeleted')).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
            delete this.volunteerParticipations[String(volunteerId)];
            volunteer.hasParticipation = false;
            volunteer.participationId = null;
          },
          error: (err) => {
            console.error(`Error al eliminar participación ${participationIdToDelete}:`, err);
            this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.participationDeleteError')).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
            volunteer.hasParticipation = true;
          }
        });
      } else {
        console.warn(`No se encontró participationId para eliminar para el voluntario ${volunteerId}.`);
        this.notificationsService.createTypedNotification('info', this.translate.instant('volunteers.noParticipationToDelete')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        volunteer.hasParticipation = false;
      }
    }
  }


  generateCertificates() {
    if (!this.activity) return;

    const certificados: Certificate[] = this.dataSource.data
      .filter(v => v.attendance)
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
      this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.noVolunteersAttendedForCertificates')).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }

    forkJoin(certificados.map(cert => this.certificatesService.postCertificate(cert))).subscribe({
      next: () => {
        this.notificationsService.createTypedNotification('certificate', this.translate.instant('volunteers.certificatesGeneratedAndSent')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      },
      error: err => {
        this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.certificateGenerationError')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  toNotify() {
    this.notificationsService.createTypedNotification('info', this.translate.instant('volunteers.sendNotificationFeatureNotImplemented')).subscribe(() => {
      window.dispatchEvent(new Event('openNotifications'));
    });
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
        this.notificationsService.createTypedNotification('success', this.translate.instant(msgKey)).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });

        this.activityService.getActivityById(this.activityId).subscribe({
          next: updated => this.activity = updated
        });
      },
      error: err => {
        this.activity.estado = originalStatus;
        this.notificationsService.createTypedNotification('error', this.translate.instant('volunteers.registrationStatusUpdateError')).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }
}
