// src/app/volunteers/components/create-volunteer-dialog/create-volunteer-dialog.component.ts

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

import { VolunteersService } from '../../services/volunteers.service'; // ¡VERIFICA ESTA RUTA!
import { CreateVolunteerPayload } from '../../model/volunteers.entity'; // ¡VERIFICA ESTA RUTA!

import { NotificationsService } from '../../../notifications/services/notifications.service';
import { LoginService } from '../../../login/services/login.service';
import { ApiResponse } from '../../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!
import { NotificationType } from '../../../notifications/model/notification-type.enum'; // ¡IMPORTAR NotificationType enum!


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
      // LLAMADA 1: Notificación si no se puede obtener el Organization ID
      const recipientId = this.loginService.getOrganizationId(); // Puede ser null aquí
      const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

      if (recipientId !== null) { // Solo si hay un ID válido para enviar la notificación
        this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
          NotificationType.GENERIC, // Usar el enum NotificationType
          recipientId,
          recipientType,
          'No se pudo obtener el ID de la organización. No se creará el voluntario.'
        ).subscribe({
          next: (response) => console.log('Notificación enviada:', response.message),
          error: (err) => console.error('Error al enviar notificación:', err)
        });
      }
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

    // MODIFICADO: Espera ApiResponse<Volunteer>
    this.volunteersService.createVolunteer(this.newVolunteer).subscribe({
      next: (apiResponse: ApiResponse<any>) => { // Recibe ApiResponse<Volunteer> o ApiResponse<any>
        console.log('Voluntario creado con éxito:', apiResponse.message, apiResponse.data);
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
            NotificationType.SIGNUP, // Usar el enum NotificationType
            recipientId,
            recipientType,
            apiResponse.message || 'Voluntario creado exitosamente.' // Usa el mensaje del backend
          ).subscribe({
            next: (response) => console.log('Notificación de éxito enviada:', response.message),
            error: (err) => console.error('Error al enviar notificación:', err)
          });
        }
        this.dialogRef.close(true); // Cerrar diálogo con éxito
      },
      error: (err: any) => { // 'err' ya es un objeto Error
        console.error('Error al crear voluntario:', err);
        let errorMessage = 'Error al crear voluntario.';

        // Ajustar el manejo de errores para el formato de 'err' propagado desde el servicio
        if (err && err.message) {
          errorMessage = err.message; // El mensaje ya viene formateado desde handleHttpError
        } else if (err.error && err.error.message) { // Fallback si HttpErrorResponse llega directo
          errorMessage = err.error.message;
        } else if (err.status === 409) { // Si el status code es accesible (no siempre si es un Error)
          errorMessage = 'Error: DNI o Email ya registrados.';
        } else if (err.error && err.error.errors && Array.isArray(err.error.errors)) {
          errorMessage = err.error.errors.map((e: any) => e.defaultMessage).join(', ');
          if (errorMessage === '') errorMessage = 'Datos de entrada inválidos.';
        }

        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
            NotificationType.GENERIC, // Usar el enum NotificationType
            recipientId,
            recipientType,
            errorMessage
          ).subscribe({
            next: (response) => console.log('Notificación de error enviada:', response.message),
            error: (notificationErr) => console.error('Error al enviar notificación:', notificationErr)
          });
        }
      }
    });
  }
}
