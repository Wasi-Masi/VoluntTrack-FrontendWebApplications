import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


import {VolunteersService} from '../services/volunteers.service';
import {Volunteer} from '../model/volunteers.entity';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

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
    MatButton,
    NgIf
  ],
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit, AfterViewInit {
  volunteers: Volunteer[] = [];
  displayedColumns: string[] = ['fullName', 'age', 'profession'];

  // Usa MatTableDataSource para facilitar paginación y filtrado
  dataSource = new MatTableDataSource<Volunteer>([]);

  searchText: string = '';
  minAge: number | null = null;
  maxAge: number | null = null;
  statusFilter: string = '';
  registrationDateFilter: Date | null = null;
  showFilters: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private volunteersService: VolunteersService) {}

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
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
