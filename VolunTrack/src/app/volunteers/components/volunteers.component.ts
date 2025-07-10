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
import {Volunteer, VolunteerFilterPayload} from '../model/volunteers.entity'; // Volunteer now correctly has firstName/lastName
import {CertificatesDialogComponent} from './certificates-dialog/certificates-dialog.component';
import {CreateVolunteerDialogComponent} from './create-volunteer-dialog/create-volunteer-dialog.component';
import {VolunteerFilterDialogComponent} from './volunteer-filter-dialog/volunteer-filter-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

import {TranslatePipe} from '@ngx-translate/core';
import {NotificationsService} from '../../notifications/services/notifications.service';
import { LoginService } from '../../login/services/login.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivityListDialogComponent } from './activity-list-dialog/activity-list-dialog.component';

// --- NUEVA IMPORTACIÓN ---
import { EmailService, EmailRequest } from '../services/email.service';
import { ApiResponse } from '../../shared/models/api-response.interface'; // Assuming this path for ApiResponse
import { NotificationType } from '../../notifications/model/notification-type.enum'; // Assuming this path for NotificationType

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
  // dataSource is now typed as 'any' to allow adding fullName dynamically
  dataSource = new MatTableDataSource<any>([]); // Changed to any to allow dynamic fullName
  volunteers: Volunteer[] = []; // Still store original Volunteer type

  emailSubject: string = '';
  emailBody: string = '';

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
  displayedColumns: string[] = ['fullName', 'age', 'profession'];

  constructor(
    private volunteersService: VolunteersService,
    private dialog: MatDialog,
    private notificationsService: NotificationsService,
    private loginService: LoginService,
    private cdr: ChangeDetectorRef,
    private emailService: EmailService
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
      console.error('Could not get logged-in Organization ID. Volunteers will not be loaded.');
      const recipientId = this.loginService.getOrganizationId();
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          recipientId,
          recipientType,
          'Could not load volunteers. Please log in again.'
        ).subscribe(() => {
        });
      }
    }
  }

  loadVolunteers(filters?: VolunteerFilterPayload): void {
    const effectiveFilters = filters || this.currentFilterCriteria;

    this.volunteersService.getVolunteers(effectiveFilters).subscribe({
      next: (response: ApiResponse<Volunteer[]>) => { // Expect ApiResponse<Volunteer[]>
        if (response.data && Array.isArray(response.data)) {
          const processedVolunteers = response.data.map(v => {
            const volunteerWithFullName: Volunteer & { fullName?: string } = { ...v };
            volunteerWithFullName.fullName = `${v.firstName || ''} ${v.lastName || ''}`.trim();
            return volunteerWithFullName;
          });

          this.volunteers = processedVolunteers; // Store the processed volunteers
          this.dataSource.data = processedVolunteers; // Assign to dataSource

          this.applyLocalFilters()
          this.calculateMetrics();
          if (this.paginator) {
            this.paginator.firstPage();
            this.dataSource.paginator = this.paginator;
            this.cdr.detectChanges();
          }
          console.log('Volunteers loaded with data:', this.volunteers);
        } else {
          console.warn('No volunteer data found in the response or unexpected format:', response);
          this.volunteers = [];
          this.dataSource.data = [];
          const recipientId = this.loginService.getOrganizationId();
          if (recipientId !== null) {
            this.notificationsService.createTypedNotification(
              NotificationType.INFO,
              recipientId,
              'ORGANIZATION',
              'No volunteers found with the current filters.'
            ).subscribe(() => {
              window.dispatchEvent(new Event('openNotifications'));
            });
          }
        }
      },
      error: (error) => {
        console.error('Error loading volunteers:', error);
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            NotificationType.ERROR,
            recipientId,
            recipientType,
            'Error loading volunteers.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
        this.volunteers = [];
        this.dataSource.data = [];
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
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            NotificationType.SIGNUP,
            recipientId,
            recipientType,
            'Volunteer created successfully.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }

  onAddToActivity(): void {
    if (!this.selectedVolunteer) {
      const recipientId = this.loginService.getOrganizationId();
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          recipientId,
          recipientType,
          'Please select a volunteer first.'
        ).subscribe(() => {
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
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            NotificationType.JOINED_ACTIVITY,
            recipientId,
            recipientType,
            'Volunteer successfully enrolled in the activity.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      } else if (result && result.error) {
        console.error('Error enrolling volunteer in activity:', result.error);
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            NotificationType.GENERIC,
            recipientId,
            recipientType,
            'Error enrolling volunteer in the activity.'
          ).subscribe(() => {
          });
        }
      }
    });
  }

  applyLocalFilters(): void {
    let filteredData = this.volunteers.filter(v => {
      // --- CAMBIO CLAVE AQUÍ: Usar firstName y lastName para construir fullName ---
      // v is now Volunteer & { fullName?: string } from loadVolunteers
      const volunteerFullName = `${v.firstName || ''} ${v.lastName || ''}`.trim();

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

  aproveSendEmail() {
    this.sendEmail = !this.sendEmail;
  }

  onDeleteVolunteer(): void {
    if (!this.selectedVolunteer) {
      const recipientId = this.loginService.getOrganizationId();
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          recipientId,
          recipientType,
          'Please select a volunteer to delete.'
        ).subscribe(() => {
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
            next: (response: ApiResponse<void>) => {
              console.log('Volunteer deleted successfully:', response.message);
              const recipientId = this.loginService.getOrganizationId();
              const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

              if (recipientId !== null) {
                this.notificationsService.createTypedNotification(
                  NotificationType.GENERIC,
                  recipientId,
                  recipientType,
                  'Volunteer deleted successfully.'
                ).subscribe(() => {
                  window.dispatchEvent(new Event('openNotifications'));
                });
              }
              this.selectedVolunteer = null;
              this.selectedRow = null;
              this.loadVolunteers(this.currentFilterCriteria);
            },
            error: (error) => {
              console.error('Error deleting volunteer:', error);
              const recipientId = this.loginService.getOrganizationId();
              const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

              if (recipientId !== null) {
                this.notificationsService.createTypedNotification(
                  NotificationType.GENERIC,
                  recipientId,
                  recipientType,
                  'Error deleting volunteer.'
                ).subscribe(() => {
                  window.dispatchEvent(new Event('openNotifications'));
                });
              }
            }
          });
        }
      }
    });
  }

  onSendEmailFromForm(): void {
    if (!this.selectedVolunteer || !this.selectedVolunteer.email) {
      this.notificationsService.createTypedNotification(
        NotificationType.GENERIC,
        this.loginService.getOrganizationId()!,
        'ORGANIZATION',
        'Could not send email. Please select a volunteer with an email address.'
      ).subscribe(() => {
      });
      return;
    }

    if (!this.emailSubject.trim() || !this.emailBody.trim()) {
      this.notificationsService.createTypedNotification(
        NotificationType.GENERIC,
        this.loginService.getOrganizationId()!,
        'ORGANIZATION',
        'Email subject and body cannot be empty.'
      ).subscribe(() => {
      });
      return;
    }

    const emailRequest: EmailRequest = {
      to: this.selectedVolunteer.email,
      subject: this.emailSubject,
      body: this.emailBody
    };

    this.emailService.sendEmail(emailRequest).subscribe({
      next: (message: string) => { // Correctly expects a string message
        console.log('Email sent successfully:', message);
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          this.loginService.getOrganizationId()!,
          'ORGANIZATION',
          'Email sent successfully.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        this.emailSubject = '';
        this.emailBody = '';
        this.sendEmail = false;
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          this.loginService.getOrganizationId()!,
          'ORGANIZATION',
          'Error sending email.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  openSendEmailDialog(): void {
    if (!this.selectedVolunteer) {
      this.notificationsService.createTypedNotification(
        NotificationType.GENERIC,
        this.loginService.getOrganizationId()!,
        'ORGANIZATION',
        'Please select a volunteer to send an email.'
      ).subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Send Email',
      message: `Are you sure you want to send an email to ${this.selectedVolunteer.firstName} ${this.selectedVolunteer.lastName}?`,
      confirmText: 'Send',
      cancelText: 'Cancel'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSendEmail();
      }
    });
  }

  onSendEmail(): void {
    if (!this.selectedVolunteer || !this.selectedVolunteer.email) {
      this.notificationsService.createTypedNotification(
        NotificationType.GENERIC,
        this.loginService.getOrganizationId()!,
        'ORGANIZATION',
        'Could not send email. The volunteer does not have an email address.'
      ).subscribe(() => {
      });
      return;
    }

    const emailRequest: EmailRequest = {
      to: this.selectedVolunteer.email,
      subject: 'Participation Certificate - VolunTrack',
      body: `Hello ${this.selectedVolunteer.firstName},\n\nThank you for your participation in our activities. We are attaching a certificate of recognition.`
    };

    this.emailService.sendEmail(emailRequest).subscribe({
      next: (message: string) => { // Correctly expects a string message
        console.log('Email sent successfully:', message);
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          this.loginService.getOrganizationId()!,
          'ORGANIZATION',
          'Email sent successfully.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.notificationsService.createTypedNotification(
          NotificationType.GENERIC,
          this.loginService.getOrganizationId()!,
          'ORGANIZATION',
          'Error sending email.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
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
    const now = new Date();
    const currentMonth = now.getMonth();
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
      return (d.getFullYear() === prevYear && d.getMonth() === prevMonth);
    }).length;

    const totalLastMonth = this.volunteers.filter(v => {
      const d = new Date(v.dateOfBirth);
      return (d.getFullYear() < currentYear || (d.getFullYear() === currentYear && d.getMonth() < currentMonth));
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
