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
  activity: Activity = new Activity(
    0, '', '', '', '', '', '', '', 0, '', '', 0, []
  );
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  selectedVolunteer: any = null;
  isAttendanceMode = false;
  attendanceMarked: { [id: string]: boolean } = {};

  allColumns = ['fullName', 'age', 'profession', 'registrationDate', 'registrationStatus', 'registrationAttendance'];
  attendanceColumns = ['fullName', 'attendanceCheckbox'];
  displayedColumns = this.allColumns;

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
    const idParam = this.route.snapshot.paramMap.get('id');
    const activityId = idParam ? parseInt(idParam, 10) : null;

    if (activityId !== null && !isNaN(activityId)) {
      this.activityService.getActivityById(activityId).subscribe({
        next: activity => {
          this.activity = activity;
          this.loadRegistrations(activityId);
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

  toggleAttendanceMode() {
    this.isAttendanceMode = !this.isAttendanceMode;

    if (this.isAttendanceMode) {
      this.displayedColumns = this.attendanceColumns;

      this.attendanceMarked = {};
      this.dataSource.data.forEach(volunteer => {
        this.attendanceMarked[volunteer.registrationId] = String(volunteer.attendance).toLowerCase() === 'asistio';
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
        volunteer.attendance = attendanceValue;

        updateCalls.push(
          this.regVolunteersService.updateAttendance(String(registrationId), attendanceValue)
        );
      }
    }

    forkJoin(updateCalls).subscribe({
      next: () => {
        this.dataSource._updateChangeSubscription();
        this.loadRegistrations(this.activity.actividad_id);
      },
      error: err => {
        console.error('Error updating attendance:', err);
      }
    });
  }

  onAttendanceChange(registrationId: string, checked: boolean) {
    this.attendanceMarked[registrationId] = checked;
  }

  fireNoti() {
    this.notificationsService.createTypedNotification('open-inscriptions').subscribe({
      next: () => {
        window.dispatchEvent(new Event('openNotifications'));
      },
      error: err => console.error('Error sending notification:', err)
    });
  }

  toNotify() {
    this.notificationsService.createTypedNotification('reminder').subscribe({
      next: () => {
        window.dispatchEvent(new Event('openNotifications'));
      },
      error: err => console.error('Error sending notification:', err)
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
          const combinedData = vols.map((vol, i) => {
            const reg = this.registrations[i];
            return {
              volunteerId: vol.id,
              registrationId: reg.id,
              fullName: vol.fullName,
              age: vol.age,
              profession: vol.profession,
              registrationDate: reg.registrationDate,
              status: reg.status,
              attendance: reg.attendance,
              photoUrl: vol.profilePicture
            };
          });

          this.dataSource = new MatTableDataSource(combinedData);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
            this.paginator.pageSize = 7;
          }
        }, error => console.error('Error fetching volunteers for registrations:', error));
      },
      error: err => console.error('Error loading registrations:', err)
    });
  }

  generateCertificates() {
    if (!this.activity) {
      this.snackBar.open('No activity selected to generate certificates.', 'Cerrar', { duration: 3000 });
      return;
    }

    const certificates: Certificate[] = this.dataSource.data
      .filter(v => String(v.attendance).toLowerCase() === 'asistio')
      .map(v => new Certificate(
        crypto.randomUUID(),
        v.volunteerId,
        this.activity.titulo,
        `Mediante este certificado, se acredita que el voluntario ${v.fullName} participó satisfactoriamente en la actividad "${this.activity.titulo}" el ${new Date(this.activity.fecha).toLocaleDateString()}.`
      ));

    if (certificates.length === 0) {
      this.snackBar.open('No volunteers with attendance marked to generate certificates.', 'Cerrar', { duration: 3000 });
      return;
    }

    const certificateCalls = certificates.map(cert => this.certificatesService.postCertificate(cert));

    forkJoin(certificateCalls).subscribe({
      next: () => {
        this.snackBar.open('Certificates generated successfully!', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
      },
      error: err => {
        console.error('Error generating one or more certificates:', err);
        this.snackBar.open('Error generating certificates.', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snack-bar-error']
        });
      }
    });
  }
}
