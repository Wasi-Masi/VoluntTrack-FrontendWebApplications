/*
Description:
This Angular standalone component provides a form to create a new activity,
handling input binding, form submission, and interaction with backend services
to save the activity and trigger notifications.

Author: Ainhoa Castillo
*/

import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { Activity } from '../../dashboard/model/dashboard.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateActivityService } from '../services/create-activity.service';
import { NotificationsService } from '../../notifications/services/notifications.service';
import { LoginService } from '../../login/services/login.service';
import { ApiResponse } from '../../shared/models/api-response.interface'; // Importar ApiResponse

@Component({
  selector: 'app-create-activity',
  standalone: true,
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ]
})
export class CreateActivityComponent implements OnInit {
  @ViewChild('activityForm') activityForm!: NgForm;

  activity: Activity = new Activity(
    0, // actividad_id
    '', // fecha
    '', // horaInicio
    '', // horaFin
    '', // titulo
    '', // descripcion
    '', // instrucciones
    '', // proposito
    0,  // cupos
    '', // ubicacion
    'Activa', // estado (valor por defecto)
    1, // organizacion_id (valor por defecto)
    [], // imagenes
    0   // availableSlots
  );

  picturesInput: string = '';
  validationErrors: { [key: string]: string } = {};
  generalErrors: string[] = [];

  public today: string = '';
  isSubmitting = false;

  constructor(
    private createService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {
    this.activity.estado = 'Activa';
  }

  ngOnInit(): void {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
    const loggedInOrgId = this.loginService.getOrganizationId();
    if (loggedInOrgId !== null) {
      this.activity.organizacion_id = loggedInOrgId;
    } else {
      console.error('No se pudo obtener el ID de la organización logueada. La actividad puede no crearse correctamente.');
    }
  }

  onSubmit() {
    if (this.isSubmitting) {
      console.warn('[DEBUG] Ya se está enviando el formulario. Ignorando envío duplicado.');
      return;
    }
    this.isSubmitting = true;
    console.log('[DEBUG] onSubmit ejecutado');
    this.validationErrors = {};
    this.generalErrors = [];

    if (!this.activityForm || this.activityForm.invalid) {
      this.populateValidationErrors();
      this.generalErrors.push('Por favor, completa todos los campos requeridos y corrige los errores.');
      console.warn('Frontend validation failed:', this.validationErrors, this.generalErrors);
      this.isSubmitting = false;
      return;
    }

    this.activity.cupos = Number(this.activity.cupos);
    if (isNaN(this.activity.cupos) || this.activity.cupos <= 0) {
      this.validationErrors['cupos'] = 'Los cupos deben ser un número positivo mayor que cero.';
      this.generalErrors.push('Por favor, corrige los errores de cupos.');
      this.isSubmitting = false;
      return;
    }

    const fechaControl = this.activityForm.controls['date'];
    if (fechaControl && fechaControl.value) {
      const selectedDate = new Date(fechaControl.value);
      const todayDateOnly = new Date(this.today);
      if (selectedDate < todayDateOnly) {
        this.validationErrors['fecha'] = 'La fecha de la actividad debe ser hoy o en el futuro.';
        this.generalErrors.push('Por favor, corrige la fecha de la actividad.');
        this.isSubmitting = false;
        return;
      }
    }

    const startTimeControl = this.activityForm.controls['startTime'];
    const endTimeControl = this.activityForm.controls['endTime'];
    if (startTimeControl && endTimeControl && startTimeControl.value && endTimeControl.value) {
      const startTime = startTimeControl.value;
      const endTime = endTimeControl.value;
      if (endTime <= startTime) {
        this.validationErrors['horaFin'] = 'La hora de fin debe ser posterior a la hora de inicio.';
        this.generalErrors.push('Por favor, corrige el horario de la actividad.');
        this.isSubmitting = false;
        return;
      }
    }

    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    this.activity.availableSlots = this.activity.cupos;
    this.activity.imagenes = parsedPictures;

    if (!this.activity.descripcion || this.activity.descripcion.length < 10) {
      this.validationErrors['descripcion'] = 'La descripción debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige la descripción.');
      this.isSubmitting = false;
      return;
    }
    if (!this.activity.instrucciones || this.activity.instrucciones.length < 10) {
      this.validationErrors['instrucciones'] = 'Las instrucciones deben tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige las instrucciones.');
      this.isSubmitting = false;
      return;
    }
    if (!this.activity.proposito || this.activity.proposito.length < 10) {
      this.validationErrors['proposito'] = 'El propósito debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige el propósito.');
      this.isSubmitting = false;
      return;
    }
    if (!this.activity.ubicacion || this.activity.ubicacion.length < 5) {
      this.validationErrors['ubicacion'] = 'La ubicación debe tener al menos 5 caracteres.';
      this.generalErrors.push('Por favor, corrige la ubicación.');
      this.isSubmitting = false;
      return;
    }

    this.createService.createActivity(this.activity).subscribe({
      next: (apiResponse: ApiResponse<Activity>) => { // Especificamos el tipo de la respuesta
        if (apiResponse.data) { // Si hay datos en la respuesta (actividad creada)
          console.log('[DEBUG] Actividad creada exitosamente:', apiResponse.message, apiResponse.data);
          const recipientId = this.loginService.getOrganizationId();
          const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

          if (recipientId !== null) {
            // Activa la notificación de éxito solo si realmente se creó la actividad.
            this.notificationsService.createTypedNotification(
              'NEW_ACTIVITY',
              recipientId,
              recipientType
            ).subscribe({
              next: () => {
                console.log('Notificación de éxito enviada.');
                window.dispatchEvent(new Event('openNotifications'));
              },
              error: (notifErr) => console.error('Error al enviar notificación de éxito:', notifErr)
            });
          } else {
            console.warn('No se pudo crear la notificación de éxito: Organization ID no disponible.');
          }
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Error de negocio al crear actividad:', apiResponse.message);
          this.generalErrors.push(apiResponse.message || 'Error de negocio al crear la actividad.');
        }
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Error al crear actividad (HTTP/Service Error):', err);
        let errorMessage = 'Error al crear la actividad.';

        if (err && err.message) {
          errorMessage = err.message;
        } else if (err && err.error && err.error.message) {
          errorMessage = err.error.message;
        }

        if (err.error && err.error.errors && Array.isArray(err.error.errors)) {
          const backendValidationErrors = err.error.errors.map((e: any) => e.defaultMessage || e.message);
          this.generalErrors.push(...backendValidationErrors);
          this.populateValidationErrors(err.error.errors); // Intenta mapear errores a campos específicos
          errorMessage = 'Errores de validación: ' + backendValidationErrors.join('; ');
        } else if (err.error && typeof err.error === 'string') {
          // Si el backend devuelve un string de error simple
          this.generalErrors.push(err.error);
        } else {
          // Otro tipo de error o mensaje general del HTTPErrorResponse
          this.generalErrors.push(errorMessage);
        }

        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC',
            recipientId,
            recipientType,
            errorMessage
          ).subscribe({
            next: () => {
              console.log('Notificación de error enviada.');
            },
            error: (notifErr) => console.error('Error al enviar notificación de error:', notifErr)
          });
        } else {
          console.warn('No se pudo crear la notificación de error: Organization ID no disponible.');
        }
        this.isSubmitting = false;
      }
    });
  }

  populateValidationErrors(backendErrors?: any[]) {
    Object.keys(this.activityForm.controls).forEach(key => {
      const control = this.activityForm.controls[key];
      if (control.invalid && (control.dirty || control.touched)) {
        if (control.errors?.['required']) {
          this.validationErrors[key] = `Este campo es requerido.`;
        } else if (control.errors?.['minlength']) {
          this.validationErrors[key] = `Mínimo ${control.errors['minlength'].requiredLength} caracteres.`;
        } else if (control.errors?.['maxlength']) {
          this.validationErrors[key] = `Máximo ${control.errors['maxlength'].requiredLength} caracteres.`;
        } else if (control.errors?.['min']) {
          this.validationErrors[key] = `Debe ser al menos ${control.errors['min'].min}.`;
        }
      }
    });

    if (backendErrors && backendErrors.length > 0) {
      backendErrors.forEach(err => {
        if (err.field) {
          const mappedField = this.mapBackendFieldToFrontend(err.field);
          this.validationErrors[mappedField] = err.defaultMessage || err.message || 'Error de validación.';
        } else {
          this.generalErrors.push(err.defaultMessage || err.message || 'Error de validación general.');
        }
      });
    }
  }

  private mapBackendFieldToFrontend(backendField: string): string {
    switch (backendField) {
      case 'titulo': return 'title';
      case 'fecha': return 'date';
      case 'horaInicio': return 'startTime';
      case 'horaFin': return 'endTime';
      case 'ubicacion': return 'address';
      case 'cupos': return 'slots';
      case 'descripcion': return 'description';
      case 'instrucciones': return 'instructions';
      case 'proposito': return 'purpose';
      default: return backendField;
    }
  }

  hasError(controlName: string, errorType: string): boolean {
    const control = this.activityForm?.controls[controlName];
    return (control?.dirty || control?.touched) && control?.errors?.[errorType];
  }

  getErrorMessage(controlName: string): string {
    return this.validationErrors[controlName] || '';
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
