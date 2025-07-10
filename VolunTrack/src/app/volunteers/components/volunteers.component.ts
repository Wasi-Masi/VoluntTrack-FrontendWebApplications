// Description: This component manages the volunteers view, including filtering, metrics calculation, and displaying volunteer details and certificates.
// Author: Cassius Martel, Ainhoa Castillo (Actualizado)

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, DatePipe, NgClass, NgIf} from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {VolunteersService} from '../services/volunteers.service';
import {Volunteer, VolunteerFilterPayload} from '../model/volunteers.entity';
import {CertificatesDialogComponent} from './certificates-dialog/certificates-dialog.component';
import {CreateVolunteerDialogComponent} from './create-volunteer-dialog/create-volunteer-dialog.component';
import {VolunteerFilterDialogComponent} from './volunteer-filter-dialog/volunteer-filter-dialog.component';

import {TranslatePipe} from '@ngx-translate/core';
import {NotificationsService} from '../../notifications/services/notifications.service';
import { LoginService } from '../../login/services/login.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivityListDialogComponent } from './activity-list-dialog/activity-list-dialog.component'; // <--- NEW IMPORT


@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [
    CommonModule,
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
    NgClass,
    TranslatePipe,
  ],
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})

export class VolunteersComponent implements OnInit, AfterViewInit {
  volunteers: Volunteer[] = [];
  displayedColumns: string[] = ['fullName', 'age', 'profession'];
  dataSource = new MatTableDataSource<Volunteer>([]);

  searchText: string = '';
  currentFilterCriteria: VolunteerFilterPayload = {
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    phoneNumber: '',
    profession: '',
    organizationId: null
  };

  selectedVolunteer: Volunteer | null = null;
  selectedRow: any = null;

  sendEmail = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private volunteersService: VolunteersService,
    private dialog: MatDialog,
    private notificationsService: NotificationsService,
    private loginService: LoginService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
  }

  selectVolunteer(volunteer: Volunteer) {
    this.selectedVolunteer = volunteer;
    this.selectedRow = volunteer;
    console.log('Selected Volunteer:', volunteer);
    this.cdr.detectChanges();
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

  ngOnInit(): void {
    const loggedInOrganizationId = this.loginService.getOrganizationId();
    if (loggedInOrganizationId !== null) {
      this.currentFilterCriteria.organizationId = loggedInOrganizationId;
      console.log('ngOnInit: Cargando voluntarios para organizationId:', this.currentFilterCriteria.organizationId);
      this.loadVolunteers(this.currentFilterCriteria);
    } else {
      console.error('No se pudo obtener la Organization ID del usuario logueado. No se cargarán voluntarios.');
      this.notificationsService.createTypedNotification('error', 'No se pudo cargar voluntarios. Inicie sesión nuevamente.').subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
    }
  }

  loadVolunteers(filters?: VolunteerFilterPayload): void {
    const effectiveFilters = filters || this.currentFilterCriteria;
    console.log('loadVolunteers: Llamando al servicio con filtros:', effectiveFilters);

    this.volunteersService.getVolunteers(effectiveFilters).subscribe({ // Usar patrón de observador completo
      next: (data) => {
        console.log('loadVolunteers: Datos recibidos del backend:', data);
        this.volunteers = data;
        this.dataSource.data = data; // Asigna los datos directamente a dataSource.data

        this.applyLocalFilters(); // Aplica filtros locales (como searchText)
        this.calculateMetrics();
        // Forzar un refresh de la paginación si es necesario
        if (this.paginator) {
          this.paginator.firstPage(); // Vuelve a la primera página
          this.dataSource.paginator = this.paginator; // Reasigna el paginator para forzar refresh
        }
      },
      error: (error) => { // Manejo de error para el subscribe
        console.error('Error al cargar voluntarios:', error);
        this.notificationsService.createTypedNotification('error', 'Error al cargar voluntarios.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  openCertificatesDialog() {
    if (!this.selectedVolunteer) return;

    this.dialog.open(CertificatesDialogComponent, {
      width: '600px',
      data: { volunteerId: this.selectedVolunteer.id }
    });
  }

  onCreateVolunteer(): void {
    const dialogRef = this.dialog.open(CreateVolunteerDialogComponent, {
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Diálogo de creación cerrado. Recargando voluntarios...');
        // Recargar la lista de voluntarios para mostrar el nuevo
        // Asegurarse de recargar con los filtros actuales (incluyendo organizationId)
        this.loadVolunteers(this.currentFilterCriteria);
        this.notificationsService.createTypedNotification('success', 'Voluntario creado exitosamente.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  // --- NEW METHOD FOR ADDING TO ACTIVITY ---
  onAddToActivity(): void {
    if (!this.selectedVolunteer) {
      this.notificationsService.createTypedNotification('info', 'Por favor, seleccione un voluntario primero.').subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }

    const dialogRef = this.dialog.open(ActivityListDialogComponent, {
      width: '800px', // Adjust width as needed
      data: {
        volunteerId: this.selectedVolunteer.id,
        volunteerName: `${this.selectedVolunteer.firstName} ${this.selectedVolunteer.lastName}`
        // You might want to pass more volunteer details if needed by the dialog
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.enrolled) {
        console.log('Actividad asignada exitosamente al voluntario:', this.selectedVolunteer?.firstName);
        this.notificationsService.createTypedNotification('success', 'Voluntario inscrito en la actividad exitosamente.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        // Optionally, reload volunteer data or specific sections if participation data is displayed here
        // For example, if you had an "activity history" section for the selected volunteer, you might refresh it.
      } else if (result && result.error) {
        console.error('Error al inscribir voluntario en actividad:', result.error);
        this.notificationsService.createTypedNotification('error', 'Error al inscribir voluntario en la actividad.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }
  // --- END NEW METHOD ---


  applyLocalFilters(): void {
    // Depuración: Logear los datos antes y después del filtro
    console.log('applyLocalFilters: Datos iniciales (this.volunteers):', this.volunteers);
    console.log('applyLocalFilters: searchText:', this.searchText);
    console.log('applyLocalFilters: currentFilterCriteria:', this.currentFilterCriteria);

    // --- NUEVOS LOGS DE DEPURACIÓN ---
    console.log('DEBUG: currentFilterCriteria.organizationId:', this.currentFilterCriteria.organizationId, 'Type:', typeof this.currentFilterCriteria.organizationId);


    const filteredData = this.volunteers.filter(v => {
      const volunteerFullName = `${v.firstName} ${v.lastName}`;
      const matchesSearchText = this.searchText === '' || volunteerFullName.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesFirstName = !this.currentFilterCriteria.firstName || v.firstName.toLowerCase().includes(this.currentFilterCriteria.firstName.toLowerCase());
      const matchesLastName = !this.currentFilterCriteria.lastName || v.lastName.toLowerCase().includes(this.currentFilterCriteria.lastName.toLowerCase());
      const matchesDni = !this.currentFilterCriteria.dni || v.dni.toLowerCase().includes(this.currentFilterCriteria.dni.toLowerCase());
      const matchesEmail = !this.currentFilterCriteria.email || v.email.toLowerCase().includes(this.currentFilterCriteria.email.toLowerCase());
      const matchesPhoneNumber = !this.currentFilterCriteria.phoneNumber || v.phoneNumber.toLowerCase().includes(this.currentFilterCriteria.phoneNumber.toLowerCase());
      const matchesProfession = !this.currentFilterCriteria.profession || v.profession.toLowerCase().includes(this.currentFilterCriteria.profession.toLowerCase());

      // Este filtro de organizationId debería ser redundante si el backend ya lo filtra,
      // pero lo mantenemos por seguridad.
      // --- MODIFICACIÓN DEPURACIÓN: Asegurar que ambos son números para la comparación ---
      const matchesOrganization = (this.currentFilterCriteria.organizationId === null || this.currentFilterCriteria.organizationId === undefined) ||
        (Number(v.organizationId) === Number(this.currentFilterCriteria.organizationId));


      const result = matchesSearchText && matchesFirstName && matchesLastName && matchesDni &&
        matchesEmail && matchesPhoneNumber && matchesProfession && matchesOrganization;



      return result;
    });

    this.dataSource.data = filteredData;
    // Depuración: Logear los datos después del filtro
    this.dataSource.paginator = this.paginator; // Reasigna el paginator para forzar refresh
    if (this.paginator) {
      this.paginator.firstPage(); // Vuelve a la primera página después de aplicar filtros
    }
  }


  openFilterDialog(): void {
    const dialogRef = this.dialog.open(VolunteerFilterDialogComponent, {
      width: '600px',
      data: { ...this.currentFilterCriteria }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Asegurarse de que la organizationId del usuario logueado persista
        // incluso si el diálogo de filtro no la devuelve o la resetea.
        result.organizationId = this.loginService.getOrganizationId(); // Forzar la organizationId
        this.currentFilterCriteria = result;
        this.loadVolunteers(this.currentFilterCriteria);
      }
    });
  }

  fireNotification() {
    this.notificationsService.createTypedNotification('mail', 'Correo enviado al voluntario seleccionado.').subscribe(() => {
      window.dispatchEvent(new Event('openNotifications'));
    });
  }

  aproveSendEmail() {
    this.sendEmail = !this.sendEmail;
  }

  protected readonly history = history;


  totalVolunteers: number = 0;
  newThisMonth: number = 0;
  inactiveVolunteers: number = 0;
  totalCertificates: number = 0;
  volunteersByProfession: Record<string, number> = {};

  totalVolunteersChange: number = 0;
  newThisMonthChange: number = 0;
  inactiveVolunteersChange: number = 0;
  getProfessionKeys(): string[] {
    return Object.keys(this.volunteersByProfession);
  }

  calculateMetrics(): void {
    this.totalVolunteers = this.volunteers.length;
    this.inactiveVolunteers = this.volunteers.filter(v => !v.active).length;

    let maxYear = 0;
    let maxMonth = -1;
    this.volunteers.forEach(v => {
      const d = new Date(v.dateOfBirth);
      const y = d.getFullYear();
      const m = d.getMonth();
      if (y > maxYear || (y === maxYear && m > maxMonth)) {
        maxYear = y;
        maxMonth = m;
      }
    });

    this.newThisMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return d.getFullYear() === maxYear && d.getMonth() === maxMonth;
    }).length;

    let prevMonth = maxMonth - 1;
    let prevYear = maxYear;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }

    const newLastMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return d.getFullYear() === prevYear && d.getMonth() === prevMonth;
    }).length;

    const totalLastMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return (d.getFullYear() < maxYear) || (d.getFullYear() === maxYear && d.getMonth() < maxMonth);
    }).length;

    const inactiveLastMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return ((d.getFullYear() < maxYear) || (d.getFullYear() === maxYear && d.getMonth() < maxMonth))
        && !v.active;
    }).length;

    this.totalVolunteersChange = this.calculatePercentageChange(totalLastMonth, this.totalVolunteers);
    this.newThisMonthChange = this.calculatePercentageChange(newLastMonth, this.newThisMonth);
    this.inactiveVolunteersChange = this.calculatePercentageChange(inactiveLastMonth, this.inactiveVolunteers);

    this.volunteersByProfession = this.volunteers.reduce((acc, v) => {
      if (v.profession) {
        acc[v.profession] = (acc[v.profession] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  }

  calculatePercentageChange(oldValue: number, newValue: number): number {
    if (oldValue === 0) return newValue > 0 ? 100 : 0;
    return ((newValue - oldValue) / oldValue) * 100;
  }

}
