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
import { RegisteredVolunteersEntity } from '../model/registered-volunteers.entity';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatSuffix} from '@angular/material/input';
import {DatePipe, NgIf, TitleCasePipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-registered-volunteers',
  templateUrl: './registered-volunteers.component.html',
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
    MatCardActions,
    MatCardSubtitle,
    MatCardHeader,
    NgIf,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule

  ],
  styleUrls: ['./registered-volunteers.component.css']
})
export class RegisteredVolunteersComponent implements OnInit {
  activity!: Activity;
  displayedColumns: string[] = ['fullName', 'age', 'profession', 'registrationDate'];
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';
  selectedVolunteer: any = null;

  selectVolunteer(volunteer: any) {
    this.selectedVolunteer = volunteer;
  }

  toggleRegistrationStatus() {
    if (!this.selectedVolunteer) return;

    // Ejemplo: toggle entre 'registered' y 'cancelled'
    const currentStatus = this.selectedVolunteer.registration.status;
    this.selectedVolunteer.registration.status = currentStatus === 'aceptado' ? 'rechazado' : 'aceptado';

    console.log('Estado de inscripción cambiado a', this.selectedVolunteer.registration.status);
  }

  toggleAttendance() {
    if (!this.selectedVolunteer) return;
    // Aquí implementa el toggle de asistencia
    this.selectedVolunteer.registration.attendance = !this.selectedVolunteer.registration.attendance;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  registrations: RegisteredVolunteersEntity[] = [];

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService,
    private regVolunteersService: RegisteredVolunteersService,
    private volunteerService: VolunteersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.activityService.getActivityById(id).subscribe({
      next: activity => {
        this.activity = activity;
        this.loadRegistrations(id);
      },
      error: err => {
        console.error('Error fetching activity:', err);
      }
    });

    this.dataSource.filterPredicate = (data: any, filter: string) =>
      data.fullName.toLowerCase().includes(filter);
  }

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  loadRegistrations(activityId: string) {
    this.regVolunteersService.getRegistrationsByActivity(activityId).subscribe({
      next: regs => {
        this.registrations = regs;

        // Creamos un arreglo de observables para obtener los voluntarios
        const volunteersRequests = regs.map(reg =>
          this.volunteerService.getVolunteerById(reg.volunteerId)
        );

        forkJoin(volunteersRequests).subscribe(vols => {
          // Aquí combinamos info de registro + voluntario
          const combinedData = vols.map((vol, i) => ({
            volunteerId: vol.id.toString(),   // id como string
            fullName: vol.fullName,
            age: vol.age,
            profession: vol.profession,
            registrationDate: this.registrations[i].registrationDate,
            photoUrl: vol.profilePicture,
            registration: {
              status: this.registrations[i].status,
              attendance: Boolean(this.registrations[i].attendance)
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
}
