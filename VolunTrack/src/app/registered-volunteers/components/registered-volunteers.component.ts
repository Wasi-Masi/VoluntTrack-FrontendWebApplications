/**
 * Component to manage and display the list of volunteers registered for a specific activity.
 * Includes functionality to search volunteers, mark attendance, and generate certificates.
 *
 * Author: Cassius Martel
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { forkJoin } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';

import { Activity } from '../../dashboard/model/dashboard.entity';
import { ActivityDetailsService } from '../../activity-details/services/activity-details.service';
import { RegisteredVolunteersService } from '../services/registered-volunteers.service';
import { VolunteersService } from '../../volunteers/services/volunteers.service';
import {Certificate, RegisteredVolunteersEntity} from '../model/registered-volunteers.entity';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatSuffix} from '@angular/material/input';
import {DatePipe, NgIf, TitleCasePipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatCheckbox} from '@angular/material/checkbox';
import {CertificatesService} from '../../volunteers/services/certificats.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationsService} from '../../notifications/services/notifications.service';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-registered-volunteers',
  templateUrl: './registered-volunteers.component.html',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    FormsModule,
    MatInput,
    MatSuffix,
    MatFormField,
    TitleCasePipe,
    DatePipe,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatIconButton,
    MatButton,
    MatCardContent,
    MatCard,
    MatCardHeader,
    NgIf,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckbox,
    TranslatePipe

  ],
  styleUrls: ['./registered-volunteers.component.css']
})
export class RegisteredVolunteersComponent implements OnInit {
  activity!: Activity;
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  selectedVolunteer: any = null;
  isAttendanceMode = false;
  attendanceMarked: { [id: string]: boolean } = {};

  allColumns = ['fullName', 'age', 'profession', 'registrationDate', 'registrationStatus', 'registrationAttendance'];
  attendanceColumns = ['fullName', 'attendanceCheckbox'];
  displayedColumns = this.allColumns;

  toggleAttendanceMode() {
    this.isAttendanceMode = !this.isAttendanceMode;

    if (this.isAttendanceMode) {
      this.displayedColumns = this.attendanceColumns;

      this.attendanceMarked = {};
      this.dataSource.data.forEach(volunteer => {
        this.attendanceMarked[volunteer.registrationId] = volunteer.registration?.attendance ?? false;
      });
    } else {
      this.displayedColumns = this.allColumns;
      this.saveAttendance();
    }
  }

  saveAttendance() {
    const updateCalls = [];

    for (const [registrationId, attended] of Object.entries(this.attendanceMarked)) {
      const volunteer = this.dataSource.data.find(v => String(v.registrationId) === registrationId);
      if (volunteer) {
        const attendanceValue = attended ? 'asistio' : 'no asistio';
        volunteer.registration.attendance = attendanceValue;

        updateCalls.push(
          this.regVolunteersService.updateAttendance(registrationId, attendanceValue)
        );
      }
    }

    forkJoin(updateCalls).subscribe({
      next: () => {
        this.dataSource._updateChangeSubscription();
        if (this.selectedVolunteer) {
          const updatedVolunteer = this.dataSource.data.find(v => v.registrationId === this.selectedVolunteer.registrationId);
          if (updatedVolunteer) {
            this.selectedVolunteer.registration.attendance = updatedVolunteer.registration.attendance;
          }
        }
        this.loadRegistrations(this.activity.actividad_id);
      },
      error: err => {
        console.error('Error actualizando asistencias:', err);
      }
    });
  }
  onAttendanceChange(registrationId: string, checked: boolean) {
    this.attendanceMarked[registrationId] = checked;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  registrations: RegisteredVolunteersEntity[] = [];

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService,
    private regVolunteersService: RegisteredVolunteersService,
    private volunteerService: VolunteersService,
    private certificatesService: CertificatesService,
    private snackBar: MatSnackBar,
    private notificationsService: NotificationsService

  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Get as string
    const activityId = idParam ? parseInt(idParam, 10) : null; // Parse to number

    if (activityId !== null && !isNaN(activityId)) {
      this.activityService.getActivityById(activityId).subscribe({ // Use the number ID here
        next: activity => {
          this.activity = activity;
          this.loadRegistrations(activityId); // Use the number ID here
        },
        error: err => {
          console.error('Error fetching activity:', err);
        }
      });
    } else {
      console.error('Invalid activity ID provided in route.');
    }

    this.dataSource.filterPredicate = (data: any, filter: string) =>
      data.fullName.toLowerCase().includes(filter);
  }

  fireNoti() {
    this.notificationsService.createTypedNotification('open-inscriptions').subscribe(() => {
      window.dispatchEvent(new Event('openNotifications'));
    });
  }

  toNotify() {
    this.notificationsService.createTypedNotification('reminder').subscribe(() => {
      window.dispatchEvent(new Event('openNotifications'));
    });
  }

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  loadRegistrations(activityId: number) {
    this.regVolunteersService.getRegistrationsByActivity(activityId).subscribe({
      next: regs => {
        this.registrations = regs;

        const volunteersRequests = regs.map(reg =>
          this.volunteerService.getVolunteerById(reg.volunteerId)
        );

        forkJoin(volunteersRequests).subscribe(vols => {
          const combinedData = vols.map((vol, i) => ({
            volunteerId: vol.id.toString(),
            registrationId: this.registrations[i].id,
            fullName: `${vol.firstName} ${vol.lastName}`,
            profession: vol.profession,
            registrationDate: this.registrations[i].registrationDate,
            status: this.registrations[i].status,
            attendance: this.registrations[i].attendance,
            registration: {
              status: this.registrations[i].status,
              attendance: String(this.registrations[i].attendance).toLowerCase() === 'asistio'
            }
          }));

          this.dataSource = new MatTableDataSource(combinedData);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
            this.paginator.pageSize = 7;
          }
        });
      },
      error: err => console.error('Error loading registrations:', err)
    });
  }
  generateCertificates() {
    if (!this.activity) return;

    const certificados: Certificate[] = this.dataSource.data
      .filter(v => v.registration?.attendance)
      .map(v => new Certificate(
        crypto.randomUUID(),
        v.volunteerId,
        this.activity.titulo,
        `Mediante este certificado, se acredita que el voluntario ${v.fullName} participó satisfactoriamente en la actividad "${this.activity.titulo}" el ${new Date(this.activity.fecha).toLocaleDateString()}.`
      ));

    certificados.forEach(cert => {
      this.certificatesService.postCertificate(cert).subscribe({
        next: () => {
        },
        error: err => {
          console.error('Error enviando certificado:', err);
        }
      });
    });

    this.snackBar.open('Certificados generados correctamente', 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-success']
    });
  }
}
