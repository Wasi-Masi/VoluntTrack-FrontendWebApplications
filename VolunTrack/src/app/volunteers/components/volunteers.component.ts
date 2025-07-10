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
import {MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {VolunteersService} from '../services/volunteers.service';
import {Volunteer, VolunteerFilterPayload} from '../model/volunteers.entity';
import {CertificatesDialogComponent} from './certificates-dialog/certificates-dialog.component';
import {CreateVolunteerDialogComponent} from './create-volunteer-dialog/create-volunteer-dialog.component';
import {VolunteerFilterDialogComponent} from './volunteer-filter-dialog/volunteer-filter-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

import {TranslatePipe} from '@ngx-translate/core';
import {NotificationsService} from '../../notifications/services/notifications.service';
import { LoginService } from '../../login/services/login.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivityListDialogComponent } from './activity-list-dialog/activity-list-dialog.component';


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
    TranslatePipe
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
    minAge: null,
    maxAge: null,
    profession: null,
    organizationId: null
  };

  selectedVolunteer: Volunteer | null = null;
  selectedRow: any = null;

  sendEmail = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private volunteersService: VolunteersService,
    private dialog: MatDialog,
    private notificationsService: NotificationsService, // Servicio de notificaciones
    private loginService: LoginService, // Para obtener el ID de la organización
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
  }

  selectVolunteer(volunteer: Volunteer) {
    this.selectedVolunteer = volunteer;
    this.selectedRow = volunteer;
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
      this.loadVolunteers(this.currentFilterCriteria);
    } else {
      console.error('No se pudo obtener la Organization ID del usuario logueado. No se cargarán voluntarios.');
      // LLAMADA 1: Notificación de error si no se puede obtener el Organization ID
      const recipientId = this.loginService.getOrganizationId(); // Puede ser null aquí
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) { // Solo si hay un ID válido
        this.notificationsService.createTypedNotification(
          'GENERIC', // Asumiendo 'GENERIC' para errores que no son de un tipo específico de backend
          recipientId,
          recipientType,
          'No se pudo cargar voluntarios. Inicie sesión nuevamente.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    }
  }

  loadVolunteers(filters?: VolunteerFilterPayload): void {
    const effectiveFilters = filters || this.currentFilterCriteria;

    this.volunteersService.getVolunteers(effectiveFilters).subscribe({
      next: (data) => {
        this.volunteers = data;
        this.dataSource.data = data;

        this.applyLocalFilters();
        this.calculateMetrics();
        if (this.paginator) {
          this.paginator.firstPage();
          this.dataSource.paginator = this.paginator;
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        console.error('Error al cargar voluntarios:', error);
        // LLAMADA 2: Notificación de error al cargar voluntarios
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Asumiendo 'GENERIC' para errores
            recipientId,
            recipientType,
            'Error al cargar voluntarios.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
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
        this.loadVolunteers(this.currentFilterCriteria);
        // LLAMADA 3: Notificación de éxito al crear voluntario
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'SIGNUP', // Usar 'SIGNUP' si el backend usa este tipo para "voluntario creado"
            recipientId,
            recipientType,
            'Voluntario creado exitosamente.' // Mensaje personalizado, si no quieres el por defecto del backend
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }

  onAddToActivity(): void {
    if (!this.selectedVolunteer) {
      // LLAMADA 4: Notificación informativa si no hay voluntario seleccionado
      const recipientId = this.loginService.getOrganizationId();
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Asumiendo 'GENERIC' para mensajes informativos o de advertencia
          recipientId,
          recipientType,
          'Por favor, seleccione un voluntario primero.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    const dialogRef = this.dialog.open(ActivityListDialogComponent, {
      width: '800px',
      data: {
        volunteerId: this.selectedVolunteer.id,
        volunteerName: `${this.selectedVolunteer.firstName} ${this.selectedVolunteer.lastName}`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.enrolled) {
        // LLAMADA 5: Notificación de éxito al inscribir voluntario en actividad
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'JOINED_ACTIVITY', // Usar 'JOINED_ACTIVITY' si el backend tiene este tipo para inscripciones
            recipientId,
            recipientType,
            'Voluntario inscrito en la actividad exitosamente.' // Mensaje personalizado
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      } else if (result && result.error) {
        console.error('Error al inscribir voluntario en actividad:', result.error);
        // LLAMADA 6: Notificación de error al inscribir voluntario en actividad
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Asumiendo 'GENERIC' para errores
            recipientId,
            recipientType,
            'Error al inscribir voluntario en la actividad.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }

  applyLocalFilters(): void {


    let filteredData = this.volunteers.filter(v => {
      const volunteerFullName = `${v.firstName} ${v.lastName}`;
      const matchesSearchText = this.searchText === '' || volunteerFullName.toLowerCase().includes(this.searchText.toLowerCase());

      const volunteerAge = this.calculateAge(v.dateOfBirth);
      const matchesMinAge = this.currentFilterCriteria.minAge === null || this.currentFilterCriteria.minAge === undefined ||
        (volunteerAge !== null && volunteerAge >= this.currentFilterCriteria.minAge);

      const matchesMaxAge = this.currentFilterCriteria.maxAge === null || this.currentFilterCriteria.maxAge === undefined ||
        (volunteerAge !== null && volunteerAge <= this.currentFilterCriteria.maxAge);

      const matchesProfession = this.currentFilterCriteria.profession === null || this.currentFilterCriteria.profession === undefined || this.currentFilterCriteria.profession === '' ||
        (v.profession && v.profession.toLowerCase() === this.currentFilterCriteria.profession.toLowerCase());

      return matchesSearchText && matchesMinAge && matchesMaxAge && matchesProfession;
    });

    this.dataSource.data = filteredData;
    this.dataSource.paginator = this.paginator;
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  openFilterDialog(): void {
    const uniqueProfessions = Array.from(new Set(this.volunteers
      .map(v => v.profession)
      .filter(p => p !== null && p !== undefined && p !== ''))).sort();

    const dialogRef = this.dialog.open(VolunteerFilterDialogComponent, {
      width: '600px',
      data: {
        filterCriteria: {
          minAge: this.currentFilterCriteria.minAge,
          maxAge: this.currentFilterCriteria.maxAge,
          profession: this.currentFilterCriteria.profession
        },
        professions: uniqueProfessions
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currentFilterCriteria.minAge = result.minAge;
        this.currentFilterCriteria.maxAge = result.maxAge;
        this.currentFilterCriteria.profession = result.profession;

        this.applyLocalFilters();
      }
    });
  }

  fireNotification() {
    // LLAMADA 7: Notificación de envío de correo (asumiendo que se envía a la organización logueada)
    const recipientId = this.loginService.getOrganizationId();
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

    if (recipientId !== null) {
      this.notificationsService.createTypedNotification(
        'GENERIC', // Asumiendo 'GENERIC' para eventos como envío de correo, o crea un tipo 'MAIL_SENT' en backend
        recipientId,
        recipientType,
        'Correo enviado al voluntario seleccionado.'
      ).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
    }
  }

  aproveSendEmail() {
    this.sendEmail = !this.sendEmail;
  }

  // --- ¡NUEVO MÉTODO PARA ELIMINAR VOLUNTARIO! ---
  onDeleteVolunteer(): void {
    if (!this.selectedVolunteer) {
      // LLAMADA 8: Notificación informativa si no hay voluntario seleccionado para eliminar
      const recipientId = this.loginService.getOrganizationId();
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Asumiendo 'GENERIC' para mensajes informativos
          recipientId,
          recipientType,
          'Por favor, seleccione un voluntario para eliminar.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'volunteers.confirmDeleteTitle',
      message: 'volunteers.confirmDeleteMessage',
      confirmText: 'common.delete',
      cancelText: 'common.cancel'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.selectedVolunteer?.id) {
          this.volunteersService.deleteVolunteer(this.selectedVolunteer.id).subscribe({
            next: () => {
              // LLAMADA 9: Notificación de éxito al eliminar voluntario
              const recipientId = this.loginService.getOrganizationId();
              const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

              if (recipientId !== null) {
                this.notificationsService.createTypedNotification(
                  'GENERIC', // Asumiendo 'GENERIC' para "Voluntario eliminado". Si tu backend tiene 'VOLUNTEER_DELETED', úsalo.
                  recipientId,
                  recipientType,
                  'Voluntario eliminado exitosamente.'
                ).subscribe(() => {
                  window.dispatchEvent(new Event('openNotifications'));
                });
              }
              this.selectedVolunteer = null;
              this.selectedRow = null;
              this.loadVolunteers(this.currentFilterCriteria);
            },
            error: (error) => {
              // LLAMADA 10: Notificación de error al eliminar voluntario
              console.error('Error al eliminar voluntario:', error);
              const recipientId = this.loginService.getOrganizationId();
              const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

              if (recipientId !== null) {
                this.notificationsService.createTypedNotification(
                  'GENERIC', // Asumiendo 'GENERIC' para errores
                  recipientId,
                  recipientType,
                  'Error al eliminar voluntario.'
                ).subscribe(() => {
                  window.dispatchEvent(new Event('openNotifications'));
                });
              }
            }
          });
        }
      } else {
      }
    });
  }
  // --- FIN NUEVO MÉTODO ---


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
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = enero, 11 = diciembre
    const currentYear = now.getFullYear();

    this.newThisMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
    }).length;

    let prevMonth = currentMonth - 1;
    let prevYear = currentYear;
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
      return d.getFullYear() < currentYear || (d.getFullYear() === currentYear && d.getMonth() < currentMonth);
    }).length;

    const inactiveLastMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return (
        (d.getFullYear() < currentYear || (d.getFullYear() === currentYear && d.getMonth() < currentMonth))
        && !v.active
      );
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
