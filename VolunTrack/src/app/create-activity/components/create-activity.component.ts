/*
Description:
This Angular standalone component provides a form to create a new activity,
handling input binding, form submission, and interaction with backend services
to save the activity and trigger notifications.

Author: Ainhoa Castillo
*/

import { Component, ViewChild, OnInit } from '@angular/core'; // Import ViewChild, OnInit
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Import NgForm
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { Activity } from '../../dashboard/model/dashboard.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateActivityService } from '../services/create-activity.service';
import { NotificationsService } from '../../notifications/services/notifications.service';
import {LoginService} from '../../login/services/login.service';

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
export class CreateActivityComponent implements OnInit { // Implement OnInit
  @ViewChild('activityForm') activityForm!: NgForm; // Reference to the form

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
  validationErrors: { [key: string]: string } = {}; // Object to store field-specific errors
  generalErrors: string[] = []; // Array for general (non-field-specific) errors

  public today: string = ''; // Property to hold today's date for date input min attribute
  isSubmitting = false;

  constructor(
    private createService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
    private loginService: LoginService // ¡NUEVO! Inyectar LoginService si no está ya
  ) {
    this.activity.estado = 'Activa';
  }

  ngOnInit(): void {
    // Initialize 'today' date to ensure the min attribute for date input is set correctly
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const loggedInOrgId = this.loginService.getOrganizationId();
    if (loggedInOrgId !== null) {
      this.activity.organizacion_id = loggedInOrgId;
    } else {
      // Manejar el caso de que no haya ID de organización logueado
      console.error('No se pudo obtener el ID de la organización logueada. La actividad puede no crearse correctamente.');
      // Podrías redirigir al login o mostrar un mensaje al usuario
    }
  }

  onSubmit() {
    if (this.isSubmitting) {
      console.warn('[DEBUG] Ya se está enviando el formulario. Ignorando envío duplicado.');
      return;
    }
    this.isSubmitting = true;
    console.log('[DEBUG] onSubmit ejecutado');
    this.validationErrors = {}; // Clear previous field-specific errors
    this.generalErrors = []; // Clear previous general errors

    // Ensure form reference is available and form is valid
    if (!this.activityForm || this.activityForm.invalid) {
      this.populateValidationErrors(); // Populate errors for display
      this.generalErrors.push('Por favor, completa todos los campos requeridos y corrige los errores.');
      console.warn('Frontend validation failed:', this.validationErrors, this.generalErrors);
      return; // Stop submission if form is invalid
    }

    // Manual validation for cupos (slots)
    this.activity.cupos = Number(this.activity.cupos);
    if (isNaN(this.activity.cupos) || this.activity.cupos <= 0) {
      this.validationErrors['cupos'] = 'Los cupos deben ser un número positivo mayor que cero.';
      this.generalErrors.push('Por favor, corrige los errores de cupos.');
      console.warn('Frontend validation failed: Cupos invalid.');
      return;
    }

    // Manual date validation: fecha (date) must be today or in the future
    const fechaControl = this.activityForm.controls['date']; // Use 'date' as name in HTML
    if (fechaControl && fechaControl.value) {
      const selectedDate = new Date(fechaControl.value);
      const todayDateOnly = new Date(this.today); // Use the normalized 'today' from ngOnInit
      if (selectedDate < todayDateOnly) {
        this.validationErrors['fecha'] = 'La fecha de la actividad debe ser hoy o en el futuro.';
        this.generalErrors.push('Por favor, corrige la fecha de la actividad.');
        console.warn('Frontend validation failed: Fecha invalid.');
        return;
      }
    }

    // Manual time validation: horaFin (end time) must be after horaInicio (start time)
    const startTimeControl = this.activityForm.controls['startTime']; // Use 'startTime' as name in HTML
    const endTimeControl = this.activityForm.controls['endTime'];     // Use 'endTime' as name in HTML
    if (startTimeControl && endTimeControl && startTimeControl.value && endTimeControl.value) {
      const startTime = startTimeControl.value; // "HH:MM"
      const endTime = endTimeControl.value;     // "HH:MM"
      if (endTime <= startTime) {
        this.validationErrors['horaFin'] = 'La hora de fin debe ser posterior a la hora de inicio.';
        this.generalErrors.push('Por favor, corrige el horario de la actividad.');
        console.warn('Frontend validation failed: Horario invalid.');
        return;
      }
    }


    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    this.activity.availableSlots = this.activity.cupos;
    this.activity.imagenes = parsedPictures; // Assign parsed pictures

    // Descriptions and Instructions are optional in your HTML but required in backend (assuming)
    // If not required, ensure backend allows null/empty or set defaults here if needed.
    // Based on your previous backend resource, they had @NotBlank.
    // Ensure they have minlength in HTML for basic validation if they are meant to be filled.
    if (!this.activity.descripcion || this.activity.descripcion.length < 10) {
      this.validationErrors['descripcion'] = 'La descripción debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige la descripción.');
      return;
    }
    if (!this.activity.instrucciones || this.activity.instrucciones.length < 10) {
      this.validationErrors['instrucciones'] = 'Las instrucciones deben tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige las instrucciones.');
      return;
    }
    if (!this.activity.proposito || this.activity.proposito.length < 10) {
      this.validationErrors['proposito'] = 'El propósito debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige el propósito.');
      return;
    }
    if (!this.activity.ubicacion || this.activity.ubicacion.length < 5) {
      this.validationErrors['ubicacion'] = 'La ubicación debe tener al menos 5 caracteres.';
      this.generalErrors.push('Por favor, corrige la ubicación.');
      return;
    }


    // If all frontend validations pass, then attempt backend submission
    this.createService.createActivity(this.activity).subscribe({
      next: (createdActivity) => {
        console.log('[DEBUG] Actividad creada exitosamente'); // 👈 AÑADE ESTO AQUÍ
        const recipientId = this.loginService.getOrganizationId(); // Obtener el ID de la organización logueada
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION'; // El tipo de destinatario es una Organización

        if (recipientId !== null) { // Asegurarse de que tenemos un ID de organización válido
         /* this.notificationsService.createTypedNotification(
            'NEW_ACTIVITY', // Tipo de notificación específico para 'Actividad creada' desde tu backend enum
            recipientId,
            recipientType
            // El mensaje por defecto de 'NEW_ACTIVITY' en el backend es 'Has creado una nueva actividad...'
            // No pasamos customMessage si queremos el por defecto.
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });*/
        } else {
          console.warn('No se pudo crear la notificación de éxito: Organization ID no disponible.');
        }
        this.router.navigate(['/dashboard']);
        this.isSubmitting = false; // ✅ Reset
      },
      error: (err) => {
        console.error('Error al crear actividad:', err);
        // Display a more specific error message based on backend response if available
        let errorMessage = 'Error al crear la actividad.';
        if (err.status === 403) {
          errorMessage = 'Acceso denegado. No tienes permiso para crear actividades.';
        } else if (err.status === 400 && err.error && err.error.errors) {
          // This part will only execute if your backend's ValidationExceptionHandler works
          // and returns errors in the expected format.
          const backendErrors = err.error.errors.map((e: any) => e.defaultMessage || e.message);
          errorMessage += ' Errores de validación: ' + backendErrors.join('; ');
          this.generalErrors.push(...backendErrors); // Add backend errors to display
          this.populateValidationErrors(err.error.errors); // Populate specific fields if backend provides 'field'
        } else if (err.error && err.error.message) {
          errorMessage += ' ' + err.error.message;
        } else {
          errorMessage += ` (Código: ${err.status})`;
        }

        const recipientId = this.loginService.getOrganizationId(); // Obtener el ID de la organización logueada
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION'; // Tipo de destinatario

        if (recipientId !== null) { // Asegurarse de que tenemos un ID de organización válido
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores (o 'ERROR' si lo tienes en el backend enum)
            recipientId,
            recipientType,
            errorMessage // Pasa el mensaje de error como customMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
            this.isSubmitting = false;
          });
        } else {
          console.warn('No se pudo crear la notificación de error: Organization ID no disponible.');
        }
      }
    });
  }

  // Helper to populate validationErrors from Angular's form controls
  populateValidationErrors(backendErrors?: any[]) {
    // Add Angular form control errors
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
        // You can add more specific error types here (e.g., pattern, email)
      }
    });

    // Optionally, if backend errors are passed, merge them
    if (backendErrors && backendErrors.length > 0) {
      backendErrors.forEach(err => {
        if (err.field) {
          // Map backend field names to your form control names if they differ
          const mappedField = this.mapBackendFieldToFrontend(err.field);
          this.validationErrors[mappedField] = err.defaultMessage || err.message || 'Error de validación.';
        } else {
          this.generalErrors.push(err.defaultMessage || err.message || 'Error de validación general.');
        }
      });
    }
  }

  // Helper function to map backend field names to frontend form control names
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
      // Add other mappings if your backend field names don't exactly match your HTML 'name' attributes
      default: return backendField;
    }
  }

  // Helper to check if a control has a specific error to show
  hasError(controlName: string, errorType: string): boolean {
    const control = this.activityForm?.controls[controlName];
    return (control?.dirty || control?.touched) && control?.errors?.[errorType];
  }

  // Helper to get error message for a control
  getErrorMessage(controlName: string): string {
    return this.validationErrors[controlName] || '';
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
