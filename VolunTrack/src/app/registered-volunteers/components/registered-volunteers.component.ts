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
import { LoginService } from '../../login/services/login.service'; // ← IMPORTANTE

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
    private loginService: LoginService // ← AÑADIDO
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

  private notify(type: string, key: string, openPanel: boolean = false) {
    const recipientId = this.loginService.getOrganizationId();
    if (recipientId !== null) {
      this.notificationsService.createTypedNotification(
        type, recipientId, 'ORGANIZATION', this.translate.instant(key)
      ).subscribe(() => {
        if (openPanel) {
          window.dispatchEvent(new Event('openNotifications'));
        }
      });
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
    if (!this.activity) return;

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

  toNotify() {
    this.notify('info', 'volunteers.sendNotificationFeatureNotImplemented');
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
      organizacionId: this.activity.organizacion_id, // <- CORRECTO
      imagenes: this.activity.imagenes
    }).subscribe({
      next: () => {
        const msgKey = newStatus === 'Abierta'
          ? 'volunteers.registrationsOpened'
          : 'volunteers.registrationsClosed';
        this.notify('success', msgKey);
        this.activityService.getActivityById(this.activityId).subscribe({
          next: updated => this.activity = updated
        });
      },
      error: () => {
        this.activity.estado = originalStatus;
        this.notify('error', 'volunteers.registrationStatusUpdateError');
      }
    });

  }
}
