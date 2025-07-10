/**
 * Description:
 * Service to fetch detailed information about activities from the backend API.
 * Provides methods to get activity data by its ID, to get all available activities,
 * and to update activity details including its status.
 *
 * Author: Victor Ortiz
 * Updated: Gemini AI (con método updateActivity y uso de environment)
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { environment } from '../../../environments/environment'; // Importa el archivo de entorno
export interface UpdateActivityPayload {
  fecha: string;
  horaInicio: string;
  horaFin: string;
  titulo: string;
  descripcion: string;
  instrucciones: string;
  proposito: string;
  cupos: number;
  ubicacion: string;
  estado: string; // Este es el campo clave para el estado de la inscripción
  organizacionId: number;
  imagenes: string[];
  // NOTA: No incluimos 'inscripcionesActuales' aquí, porque lo quitamos del UpdateActivityResource del backend.
}
// FIN DE LA INTERFAZ A AÑADIR

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  private activitiesApiUrl = `${environment.apiUrl}/v1/activities`;

  constructor(private http: HttpClient) {}

  getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.activitiesApiUrl}/${id}`);
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesApiUrl);
  }

  // MODIFICA ESTE MÉTODO:
  // Antes: updateActivity(activity: Activity): Observable<Activity> {
  // Ahora:
  updateActivity(id: number, updatedData: UpdateActivityPayload): Observable<Activity> {
    return this.http.put<Activity>(`${this.activitiesApiUrl}/${id}`, updatedData);
  }
}
