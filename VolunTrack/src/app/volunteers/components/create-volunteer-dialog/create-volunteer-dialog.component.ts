// Description: Dialog component for creating a new volunteer.
// Author: Cassius Martel, Ainhoa Castillo

import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslatePipe } from '@ngx-translate/core';
import { VolunteersService } from '../../services/volunteers.service';
import { CreateVolunteerPayload } from '../../model/volunteers.entity';

import { NotificationsService } from '../../../notifications/services/notifications.service';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-create-volunteer-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslatePipe
  ],
  templateUrl: './create-volunteer-dialog.component.html',
  styleUrls: ['./create-volunteer-dialog.component.css']
})
export class CreateVolunteerDialogComponent implements OnInit {
  newVolunteer: CreateVolunteerPayload = {
    firstName: '',
    lastName: '',
    dni: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    organizationId: null as any,
    profession: ''
  };

  @ViewChild('volunteerForm') newVolunteerForm!: NgForm;

  constructor(
    public dialogRef: MatDialogRef<CreateVolunteerDialogComponent>,
    private volunteersService: VolunteersService,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const loggedInOrganizationId = this.loginService.getOrganizationId();
    if (loggedInOrganizationId !== null) {
      this.newVolunteer.organizationId = loggedInOrganizationId;
    } else {
      console.warn('No se pudo obtener la Organization ID del usuario logueado. Asegúrate de que el usuario haya iniciado sesión y que el backend la devuelva.');
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onCreate(): void {
    if (this.newVolunteerForm.invalid) {
      Object.keys(this.newVolunteerForm.controls).forEach(key => {
        this.newVolunteerForm.controls[key].markAsTouched();
      });
      return;
    }

    if (this.newVolunteer.dateOfBirth && typeof this.newVolunteer.dateOfBirth !== 'string') {
      const date = new Date(this.newVolunteer.dateOfBirth);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      this.newVolunteer.dateOfBirth = `${year}-${month}-${day}`;
    }
    console.log('Payload a enviar:', this.newVolunteer);
    this.volunteersService.createVolunteer(this.newVolunteer).subscribe({
      next: (response) => {
        console.log('Voluntario creado con éxito:', response);
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'SIGNUP', // Usar 'SIGNUP' si este es el tipo de notificación para "voluntario creado" en tu backend
            recipientId,
            recipientType,
            'Voluntario creado exitosamente.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
        this.dialogRef.close(true);
      },
      error: (error) => {

        console.error('Error al crear voluntario:', error);
        let errorMessage = 'Error al crear voluntario.';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status === 409) {
          errorMessage = 'Error: DNI o Email ya registrados.';
        } else if (error.status === 400 && error.error && error.error.errors) {
          errorMessage = error.error.errors.map((err: any) => err.defaultMessage).join(', ');
          if (errorMessage === '') errorMessage = 'Datos de entrada inválidos.';
        }

        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Usar 'GENERIC' para errores, o 'ERROR' si tienes ese tipo en tu backend enum
            recipientId,
            recipientType,
            errorMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
      }
    });
  }
}
