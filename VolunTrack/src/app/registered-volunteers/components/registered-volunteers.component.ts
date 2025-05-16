import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {forkJoin} from 'rxjs';

import {Activity} from '../../dashboard/model/dashboard.entity';
import {ActivityDetailsService} from '../../activity-details/services/activity-details.service';
import {RegisteredVolunteersService} from '../services/registered-volunteers.service';
import {VolunteersService} from '../../volunteers/services/volunteers.service';
import {RegisteredVolunteersEntity} from '../model/registered-volunteers.entity';
import {DatePipe, NgIf} from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registered-volunteers',
  standalone: true,
  imports: [
    DatePipe,
    MatTable,
    MatColumnDef,
    RouterLink,
    MatIconModule,
    MatButton,
    MatIconButton,
    MatTooltipModule,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    NgIf,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatPaginatorModule,
    MatCardContent,
    MatLabel,
    FormsModule,
    MatFormField,
    MatCard,
    MatCardHeader,
    MatInput,
    // tus imports...
  ],
  templateUrl: './registered-volunteers.component.html',
  styleUrls: ['./registered-volunteers.component.css']
})
export class RegisteredVolunteersComponent implements OnInit {
  activity!: Activity;
  displayedColumns: string[] = ['fullName', 'age', 'profession', 'registrationDate'];
  dataSource = new MatTableDataSource<any>([]);
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  // Aquí guardamos los registros (con volunteerId y registrationDate)
  registrations: RegisteredVolunteersEntity[] = [];

  // Aquí combinamos la info de voluntario + registro para mostrar en tabla
  volunteersData: Array<{ fullName: string; age: number; profession: string; registrationDate: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService,
    private regVolunteersService: RegisteredVolunteersService,
    private volunteerService: VolunteersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.activityService.getActivityById(+id).subscribe({
      next: activity => {
        this.activity = activity;
        this.loadRegistrations(id);
      },

      error: err => {
        console.error('Error fetching activity:', err);
      }
    });
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.fullName.toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
  }

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  loadRegistrations(activityId: string) {
    this.regVolunteersService.getRegistrationsByActivity(activityId).subscribe({
      next: regs => {
        this.registrations = regs;

        const volunteersRequests = regs.map(reg =>
          this.volunteerService.getVolunteerById(reg.volunteerId)
        );

        forkJoin(volunteersRequests).subscribe(vols => {
          this.volunteersData = vols.map((vol, i) => ({
            fullName: vol.fullName,
            age: vol.age,
            profession: vol.profession,
            registrationDate: this.registrations[i].registrationDate
          }));

          // 🔥 Aquí sí ya está lista la data → actualizamos el datasource:
          this.dataSource = new MatTableDataSource(this.volunteersData);
          this.dataSource.paginator = this.paginator; // ✅ Asegura que se conecte con datos ya listos

        });
      },
      error: err => console.error('Error loading registrations:', err)
    });
  }
}
