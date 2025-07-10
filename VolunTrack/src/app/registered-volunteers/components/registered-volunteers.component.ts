import { Component, OnInit, ViewChild } from '@angular/core';
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
import { LoginService } from '../../login/services/login.service'; // ¡NUEVO! Importar LoginService

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
export class RegisteredVolunteersComponent implements OnInit {
  activityId!: number;
  activity!: Activity;
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  isAttendanceMode = false;
  attendanceMarked: { [id: string]: boolean } = {};

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
    private loginService: LoginService // ¡NUEVO! Inyectar LoginService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const activityId = idParam ? parseInt(idParam, 10) : null;

    if (activityId !== null && !isNaN(activityId)) {
      this.activityId = activityId;
      this.activityService.getActivityById(activityId).subscribe({
        next: activity => {
          this.activity = activity;
          this.loadRegisteredVolunteers(activityId);
        },
        error: err => {
          // LLAMADA 1: Notificación de error al cargar la actividad
          const recipientId = this.loginService.getOrganizationId();
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

          if (recipientId !== null) {
            this.notificationsService.createTypedNotification(
              'GENERIC', // Tipo genérico para errores
              recipientId,
              recipientType,
              this.translate.instant('volunteers.activityLoadError')
            ).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
          }
        }
      });
    }

    this.dataSource.filterPredicate = (data: any, filter: string) =>
      data.fullName.toLowerCase().includes(filter);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadRegisteredVolunteers(activityId: number) {
    this.regVolunteersService.getRegisteredVolunteersByActivityId(activityId).subscribe({
      next: volunteers => {
        volunteers.forEach(v => {
          v.age = this.calculateAge(v.dateOfBirth) ?? 0;
          this.attendanceMarked[String(v.id)] = v.attendance;
        });
        console.log('Voluntarios con datos:', volunteers);

        this.dataSource = new MatTableDataSource(volunteers);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
          this.paginator.pageSize = 7;
        }
      },
      error: err => {
        // LLAMADA 2: Notificación de error al cargar voluntarios registrados
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores
            recipientId,
            recipientType,
            this.translate.instant('volunteers.registeredVolunteersLoadError')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
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

    if (!this.isAttendanceMode) {
      this.saveAttendance();
    }
  }

  onAttendanceChange(volunteerId: string, checked: boolean) {
    this.attendanceMarked[volunteerId] = checked;
  }

  saveAttendance() {
    const updateCalls = [];

    for (const [idString, attended] of Object.entries(this.attendanceMarked)) {
      const row = this.dataSource.data.find(v => String(v.id) === idString);
      if (row && row.attendance !== attended) {
        updateCalls.push(
          this.regVolunteersService.updateAttendance(Number(row.id), attended)
        );
      }
    }

    const recipientId = this.loginService.getOrganizationId();
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

    if (updateCalls.length === 0) {
      // LLAMADA 3: Notificación informativa si no hay cambios de asistencia
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Tipo genérico para info
          recipientId,
          recipientType,
          this.translate.instant('volunteers.noAttendanceChanges')
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    forkJoin(updateCalls).subscribe({
      next: () => {
        this.loadRegisteredVolunteers(this.activityId);
        // LLAMADA 4: Notificación de éxito al guardar asistencia
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para éxito. Si tienes 'ATTENDANCE_SAVED', úsalo.
            recipientId,
            recipientType,
            this.translate.instant('volunteers.attendanceSaved')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      },
      error: err => {
        // LLAMADA 5: Notificación de error al guardar asistencia
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores
            recipientId,
            recipientType,
            this.translate.instant('volunteers.attendanceSaveError')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
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

    const recipientId = this.loginService.getOrganizationId();
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

    if (certificados.length === 0) {
      // LLAMADA 6: Notificación de error si no hay voluntarios con asistencia para certificados
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Tipo genérico para errores de validación
          recipientId,
          recipientType,
          this.translate.instant('volunteers.noVolunteersAttendedForCertificates')
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    forkJoin(certificados.map(cert => this.certificatesService.postCertificate(cert))).subscribe({
      next: () => {
        // LLAMADA 7: Notificación de éxito al generar y enviar certificados
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'CERTIFICATE_READY', // Usar 'CERTIFICATE_READY' si el backend tiene este tipo
            recipientId,
            recipientType,
            this.translate.instant('volunteers.certificatesGeneratedAndSent')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      },
      error: err => {
        // LLAMADA 8: Notificación de error al generar certificados
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores
            recipientId,
            recipientType,
            this.translate.instant('volunteers.certificateGenerationError')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }

  toNotify() {
    // LLAMADA 9: Notificación de funcionalidad no implementada
    const recipientId = this.loginService.getOrganizationId();
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

    if (recipientId !== null) {
      this.notificationsService.createTypedNotification(
        'GENERIC', // Tipo genérico para info
        recipientId,
        recipientType,
        this.translate.instant('volunteers.sendNotificationFeatureNotImplemented')
      ).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
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
        // LLAMADA 10: Notificación de éxito al cambiar estado de inscripción
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'OPEN_INSCRIPTIONS', // Usar 'OPEN_INSCRIPTIONS' si el backend tiene este tipo para abrir/cerrar
            recipientId,
            recipientType,
            this.translate.instant(msgKey)
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }

        this.activityService.getActivityById(this.activityId).subscribe({
          next: updated => this.activity = updated
        });
      },
      error: err => {
        this.activity.estado = originalStatus;
        // LLAMADA 11: Notificación de error al cambiar estado de inscripción
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores
            recipientId,
            recipientType,
            this.translate.instant('volunteers.registrationStatusUpdateError')
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }
}
