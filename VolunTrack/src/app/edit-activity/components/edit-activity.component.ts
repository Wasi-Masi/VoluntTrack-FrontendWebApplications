import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CreateActivityService } from '../../create-activity/services/create-activity.service'; // Asegúrate de que este servicio tiene los métodos para obtener y actualizar

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
  activity: Activity = new Activity(
    0,    // actividad_id
    '',   // fecha
    '',   // horaInicio
    '',   // horaFin
    '',   // titulo
    '',   // descripcion
    '',   // instrucciones (será poblado por el objeto existente)
    '',   // proposito (será poblado por el objeto existente)
    0,    // cupos (será poblado por el objeto existente)
    '',   // ubicacion
    'Inactiva', // estado (será poblado por el objeto existente)
    0,    // organizacion_id (será poblado por el objeto existente)
    [],   // imagenes (será poblado por el objeto existente)
    0     // <--- AÑADIDO: availableSlots (requerido por el constructor de Activity)
  );

  // Estas propiedades ya no son necesarias porque se enlazarán directamente al objeto activity
  // instructions: string = '';
  // purpose: string = '';
  picturesInput: string = ''; // Mantener para la lógica del textarea de imágenes

  constructor(
    private route: ActivatedRoute,
    private activityService: CreateActivityService, // Asegúrate de que este servicio es el correcto para obtener y actualizar actividades.
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      // Idealmente, aquí deberías tener un servicio que obtenga la actividad por ID.
      // Si `getActivities()` devuelve todas las actividades y luego se filtra,
      // asegúrate de que el rendimiento sea aceptable para un gran número de actividades.
      this.activityService.getActivities().subscribe(activities => {
          const existing = activities.find(a => a.actividad_id === id);
          if (existing) {
            this.activity = existing; // Asigna el objeto existente directamente.
            // Las siguientes líneas ya no son necesarias porque activity ya está poblado
            // y los ngModel en el HTML se vincularán directamente a this.activity.instrucciones, etc.
            // this.instructions = existing.instrucciones;
            // this.purpose = existing.proposito;
            this.picturesInput = existing.imagenes.join('\n'); // Esto sí se mantiene
          } else {
            console.warn(`Activity with ID ${id} not found.`);
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          console.error('Error fetching activities:', error);
          this.router.navigate(['/dashboard']); // Redirigir en caso de error
        });
    } else {
      console.error('ID de actividad inválido o ausente en los parámetros de ruta.');
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    // Actualiza directamente las propiedades del objeto `this.activity`.
    // Las propiedades `instrucciones` y `proposito` se actualizan automáticamente
    // a través del `[(ngModel)]` en el HTML.
    this.activity.imagenes = parsedPictures; // Asigna las imágenes parseadas

    // Envía el objeto `this.activity` directamente, ya que contiene todos los datos actualizados.
    this.activityService.updateActivity(this.activity).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al actualizar actividad:', err);
        // Opcional: Notificación de error al usuario
      }
    });
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
