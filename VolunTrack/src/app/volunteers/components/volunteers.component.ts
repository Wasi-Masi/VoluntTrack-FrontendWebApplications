import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatFormField, MatInput, MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOption} from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions
} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from '@angular/material/button';

import { VolunteersService } from '../services/volunteers.service';
import { Volunteer } from '../model/volunteers.entity';
import {DatePipe, NgClass, NgIf} from '@angular/common';


@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    NgIf,
    DatePipe,
    NgClass
  ],
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit, AfterViewInit {
  volunteers: Volunteer[] = [];
  displayedColumns: string[] = ['fullName', 'age', 'profession'];
  dataSource = new MatTableDataSource<Volunteer>([]);

  searchText: string = '';
  minAge: number | null = null;
  maxAge: number | null = null;
  statusFilter: string = '';
  registrationDateFilter: Date | null = null;
  selectedVolunteer: Volunteer | null = null;
  selectedRow: any = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
  }

  constructor(
    private volunteersService: VolunteersService,
    private dialog: MatDialog
  ) {}


  selectVolunteer(volunteer: any) {
    this.selectedVolunteer = volunteer;
    this.selectedRow = volunteer;
  }

  ngOnInit(): void {
    this.volunteersService.getVolunteers().subscribe(data => {
      this.volunteers = data;
      this.dataSource.data = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.dataSource.data = this.volunteers.filter(v => {
      const matchesName = this.searchText === '' || v.fullName.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesMinAge = this.minAge === null || v.age >= this.minAge;
      const matchesMaxAge = this.maxAge === null || v.age <= this.maxAge;
      const matchesStatus = this.statusFilter === '' || v.status === this.statusFilter;
      const matchesDate = !this.registrationDateFilter || new Date(v.registrationDate) >= this.registrationDateFilter;
      return matchesName && matchesMinAge && matchesMaxAge && matchesStatus && matchesDate;
    });
    this.dataSource.paginator = this.paginator;
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(VolunteerFilterDialogComponent, {
      width: '500px',
      height:'450px',
      data: {
        minAge: this.minAge,
        maxAge: this.maxAge,
        statusFilter: this.statusFilter,
        registrationDateFilter: this.registrationDateFilter
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.minAge = result.minAge;
        this.maxAge = result.maxAge;
        this.statusFilter = result.statusFilter;
        this.registrationDateFilter = result.registrationDateFilter;
        this.applyFilters();
      }
    });
  }
}

@Component({
  selector: 'app-volunteer-filter-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatDatepicker,
    MatDialogActions,
    MatDatepickerInput,
    FormsModule,
    MatButton
  ],
  template: `
    <h2 mat-dialog-title>Filtros</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" style="width: 100%;" class="secorta" >
        <mat-label>Edad mínima</mat-label>
        <input matInput type="number" [(ngModel)]="data.minAge"/>
      </mat-form-field>

      <mat-form-field appearance="outline" style="width: 100%;">
        <mat-label>Edad máxima</mat-label>
        <input matInput type="number" [(ngModel)]="data.maxAge"/>
      </mat-form-field>

      <mat-form-field appearance="outline" style="width: 100%;">
        <mat-label>Estado</mat-label>
        <mat-select [(ngModel)]="data.statusFilter">
          <mat-option value="">Todos</mat-option>
          <mat-option value="activo">Activo</mat-option>
          <mat-option value="inactivo">Inactivo</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" style="width: 100%;">
        <mat-label>Registrado desde</mat-label>
        <input matInput [matDatepicker]="picker" [(ngModel)]="data.registrationDateFilter"/>
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onClose()">Cancelar</button>
      <button mat-raised-button color="primary" (click)="onApply()">Aplicar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      margin-top: 15px;
    }
    .secorta {
      margin-top: 10px;
    }
  `]

})
export class VolunteerFilterDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VolunteerFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onApply(): void {
    this.dialogRef.close(this.data);
  }
}



