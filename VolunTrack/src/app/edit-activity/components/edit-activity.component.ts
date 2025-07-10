import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CreateActivityService } from '../../create-activity/services/create-activity.service';
import { NotificationsService } from '../../notifications/services/notifications.service';
import { LoginService } from '../../login/services/login.service';
import { ApiResponse } from '../../shared/models/api-response.interface'; // Import ApiResponse

@Component({
  selector: 'app-edit-activity',
  standalone: true,
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ]
})
export class EditActivityComponent implements OnInit {
  @ViewChild('activityForm') activityForm!: NgForm;

  activity: Activity = new Activity(
    0,    // actividad_id
    '',   // fecha
    '',   // horaInicio
    '',   // horaFin
    '',   // titulo
    '',   // descripcion
    '',   // instrucciones
    '',   // proposito
    0,    // cupos
    '',   // ubicacion
    'Inactiva', // estado
    0,    // organizacion_id
    [],   // imagenes
    0     // availableSlots
  );

  picturesInput: string = '';
  validationErrors: { [key: string]: string } = {};
  generalErrors: string[] = [];

  public today: string = '';
  isSubmitting: boolean = false; // Add isSubmitting property

  constructor(
    private route: ActivatedRoute,
    private activityService: CreateActivityService, // Note: This service is used for both create and get/update activities
    private router: Router,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];

    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      // MODIFICADO: Espera ApiResponse<Activity[]>
      this.activityService.getActivities().subscribe({
        next: (apiResponse: ApiResponse<Activity[]>) => {
          if (apiResponse.data) {
            const existing = apiResponse.data.find(a => a.actividad_id === id);
            if (existing) {
              this.activity = existing;
              this.picturesInput = existing.imagenes.join('\n');
            } else {
              console.warn(`Actividad con ID ${id} no encontrada en los datos recibidos.`);
              this.router.navigate(['/dashboard']);
            }
          } else {
            console.warn('No hay datos de actividades en la respuesta:', apiResponse.message);
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          console.error('Error al obtener actividades:', err.message || err);
          this.generalErrors.push('Error al cargar la actividad para editar.');
          this.router.navigate(['/dashboard']);
        }
      });
    } else {
      console.error('ID de actividad inválido o ausente en los parámetros de ruta.');
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.isSubmitting) {
      console.warn('[DEBUG] Ya se está enviando el formulario. Ignorando envío duplicado.');
      return;
    }
    this.isSubmitting = true; // Set to true when submission starts

    this.validationErrors = {};
    this.generalErrors = [];

    if (!this.activityForm || this.activityForm.invalid) {
      this.populateValidationErrors();
      this.generalErrors.push('Por favor, completa todos los campos requeridos y corrige los errores.');
      console.warn('Frontend validation failed:', this.validationErrors, this.generalErrors);
      this.isSubmitting = false; // Reset on frontend validation failure
      return;
    }

    this.activity.cupos = Number(this.activity.cupos);
    if (isNaN(this.activity.cupos) || this.activity.cupos <= 0) {
      this.validationErrors['cupos'] = 'Los cupos deben ser un número positivo mayor que cero.';
      this.generalErrors.push('Por favor, corrige los errores de cupos.');
      this.isSubmitting = false; // Reset on frontend validation failure
      return;
    }

    const fechaControl = this.activityForm.controls['date'];
    if (fechaControl && fechaControl.value) {
      const selectedDate = new Date(fechaControl.value);
      const todayDateOnly = new Date(this.today);
      if (selectedDate < todayDateOnly) {
        this.validationErrors['fecha'] = 'La fecha de la actividad debe ser hoy o en el futuro.';
        this.generalErrors.push('Por favor, corrige la fecha de la actividad.');
        this.isSubmitting = false; // Reset on frontend validation failure
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
        this.isSubmitting = false; // Reset on frontend validation failure
        return;
      }
    }

    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    this.activity.imagenes = parsedPictures;

    // Ensure description, instructions, purpose, and ubicacion meet minLength requirements
    if (!this.activity.descripcion || this.activity.descripcion.length < 10) {
      this.validationErrors['descripcion'] = 'La descripción debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige la descripción.');
      this.isSubmitting = false; return;
    }
    if (!this.activity.instrucciones || this.activity.instrucciones.length < 10) {
      this.validationErrors['instrucciones'] = 'Las instrucciones deben tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige las instrucciones.');
      this.isSubmitting = false; return;
    }
    if (!this.activity.proposito || this.activity.proposito.length < 10) {
      this.validationErrors['proposito'] = 'El propósito debe tener al menos 10 caracteres.';
      this.generalErrors.push('Por favor, corrige el propósito.');
      this.isSubmitting = false; return;
    }
    if (!this.activity.ubicacion || this.activity.ubicacion.length < 5) {
      this.validationErrors['ubicacion'] = 'La ubicación debe tener al menos 5 caracteres.';
      this.generalErrors.push('Por favor, corrige la ubicación.');
      this.isSubmitting = false; return;
    }


    // MODIFICADO: Espera ApiResponse<void> o ApiResponse<Activity> dependiendo de lo que el PUT retorne
    this.activityService.updateActivity(this.activity).subscribe({
      next: (apiResponse: ApiResponse<void>) => { // Assuming backend returns ApiResponse<void> for PUT
        console.log('Actividad actualizada exitosamente:', apiResponse.message);

        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          // MODIFICADO: Espera ApiResponse en el next de la notificación
          this.notificationsService.createTypedNotification(
            'ACTIVITY_UPDATE', // Considera usar un tipo 'ACTIVITY_UPDATE' si lo tienes en tu backend enum
            recipientId,
            recipientType,
            apiResponse.message || 'Actividad actualizada exitosamente.' // Usa el mensaje del backend o un default
          ).subscribe({
            next: (notifApiResponse) => {
              console.log('Notificación de actualización enviada:', notifApiResponse.message);
              window.dispatchEvent(new Event('openNotifications'));
            },
            error: (notifErr) => console.error('Error al enviar notificación de actualización:', notifErr.message || notifErr)
          });
        } else {
          console.warn('No se pudo crear la notificación de éxito: Organization ID no disponible.');
        }
        this.router.navigate(['/dashboard']);
        this.isSubmitting = false; // Reset isSubmitting
      },
      error: (err) => {
        console.error('Error al actualizar actividad (HTTP/Service Error):', err);
        let errorMessage = 'Error al actualizar la actividad.';

        if (err && err.message) {
          errorMessage = err.message;
        } else if (err.error && err.error.message) {
          errorMessage = err.error.message;
        }

        if (err.error && err.error.errors && Array.isArray(err.error.errors)) {
          const backendValidationErrors = err.error.errors.map((e: any) => e.defaultMessage || e.message);
          this.generalErrors.push(...backendValidationErrors);
          this.populateValidationErrors(err.error.errors);
          errorMessage = 'Errores de validación: ' + backendValidationErrors.join('; ');
        } else if (err.error && typeof err.error === 'string') {
          this.generalErrors.push(err.error);
        } else {
          this.generalErrors.push(errorMessage);
        }

        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          // MODIFICADO: Espera ApiResponse en el next de la notificación de error
          this.notificationsService.createTypedNotification(
            'GENERIC', // O 'ERROR'
            recipientId,
            recipientType,
            errorMessage
          ).subscribe({
            next: (notifApiResponse) => {
              console.log('Notificación de error enviada:', notifApiResponse.message);
              window.dispatchEvent(new Event('openNotifications'));
            },
            error: (notifErr) => console.error('Error al enviar notificación de error:', notifErr.message || notifErr)
          });
        } else {
          console.warn('No se pudo crear la notificación de error: Organization ID no disponible.');
        }
        this.isSubmitting = false; // Reset isSubmitting
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
