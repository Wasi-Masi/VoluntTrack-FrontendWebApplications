import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Import NgForm
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CreateActivityService } from '../../create-activity/services/create-activity.service';
import { NotificationsService } from '../../notifications/services/notifications.service';
import {LoginService} from '../../login/services/login.service'; // Import NotificationsService

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
  @ViewChild('activityForm') activityForm!: NgForm; // Reference to the form

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
  validationErrors: { [key: string]: string } = {}; // Object to store field-specific errors
  generalErrors: string[] = []; // Array for general (non-field-specific) errors

  public today: string = ''; // Property to hold today's date for date input min attribute

  constructor(
    private route: ActivatedRoute,
    private activityService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // Initialize 'today' date to ensure the min attribute for date input is set correctly
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      this.activityService.getActivities().subscribe(
        activities => {
          const existing = activities.find(a => a.actividad_id === id);
          if (existing) {
            this.activity = existing;
            this.picturesInput = existing.imagenes.join('\n');
          } else {
            console.warn(`Actividad con ID ${id} no encontrada.`);
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          console.error('Error al obtener actividades:', error);
          this.router.navigate(['/dashboard']);
        }
      );
    } else {
      console.error('ID de actividad inválido o ausente en los parámetros de ruta.');
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
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


    this.activityService.updateActivity(this.activity).subscribe({
      next: () => {
        const recipientId = this.loginService.getOrganizationId(); // ¡CORREGIDO! Usar getOrganizationId()
        // Si la organización ID es null, significa que no hay organización logueada o hay un problema.
        // Deberías manejar este caso, quizás no enviar la notificación o registrar un error.
        // Para este ejemplo, asumiremos que siempre hay un organizationId cuando se actualiza una actividad.
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION'; // El tipo de destinatario es una Organización

        if (recipientId !== null) { // Asegúrate de que tenemos un ID de organización válido
          this.notificationsService.createTypedNotification(
            'NEW_ACTIVITY', // Ajusta este tipo si tienes un tipo más específico como 'ACTIVITY_UPDATED' en tu backend enum
            recipientId,
            recipientType,
            'Actividad actualizada exitosamente.' // Mensaje personalizado
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        } else {
          console.warn('No se pudo crear la notificación de éxito: Organization ID no disponible.');
        }
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al actualizar actividad:', err);
        let errorMessage = 'Error al actualizar la actividad.';
        if (err.status === 403) {
          errorMessage = 'Acceso denegado. No tienes permiso para actualizar actividades.';
        } else if (err.status === 400 && err.error && err.error.errors) {
          const backendErrors = err.error.errors.map((e: any) => e.defaultMessage || e.message);
          errorMessage += ' Errores de validación: ' + backendErrors.join('; ');
          this.generalErrors.push(...backendErrors);
          this.populateValidationErrors(err.error.errors);
        } else if (err.error && err.error.message) {
          errorMessage += ' ' + err.error.message;
        } else {
          errorMessage += ` (Código: ${err.status})`;
        }

        const recipientId = this.loginService.getOrganizationId(); // ¡CORREGIDO!
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION'; // Tipo de destinatario

        if (recipientId !== null) { // Asegúrate de que tenemos un ID de organización válido
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores (o 'ERROR' si lo tienes en el backend enum)
            recipientId,
            recipientType,
            errorMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
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
      }
    });

    // Optionally, if backend errors are passed, merge them
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
