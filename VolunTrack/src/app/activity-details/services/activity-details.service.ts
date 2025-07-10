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
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importar tap, catchError, throwError
import { Activity } from '../../dashboard/model/dashboard.entity';
import { environment } from '../../../environments/environment'; // Importa el archivo de entorno

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

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

  private activitiesApiUrl = `${environment.apiUrl}/activities`;

  constructor(private http: HttpClient) {}

  // MODIFICADO: Espera ApiResponse<Activity>
  getActivityById(id: number): Observable<ApiResponse<Activity>> {
    return this.http.get<ApiResponse<Activity>>(`${this.activitiesApiUrl}/${id}`).pipe(
      tap(response => {
        if (!response.data) {
          console.warn(`Activity with ID ${id} not found or no data in response:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Espera ApiResponse<Activity[]>
  getAllActivities(): Observable<ApiResponse<Activity[]>> {
    return this.http.get<ApiResponse<Activity[]>>(this.activitiesApiUrl).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn('No activities found or no data in response:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Espera ApiResponse<Activity>
  updateActivity(id: number, updatedData: UpdateActivityPayload): Observable<ApiResponse<Activity>> {
    return this.http.put<ApiResponse<Activity>>(`${this.activitiesApiUrl}/${id}`, updatedData).pipe(
      tap(response => {
        if (response.data) {
          console.log(`Activity with ID ${id} updated successfully:`, response.message);
        } else {
          console.error(`Failed to update activity with ID ${id}:`, response.message);
          // Dependiendo de tu backend, si un error 4xx/5xx viene con un cuerpo ApiResponse
          // esto se manejaría aquí. Si un 4xx/5xx no tiene ApiResponse, caería en handleHttpError.
        }
      }),
      catchError(this.handleHttpError) // Manejo de errores HTTP (4xx, 5xx)
    );
  }

  // Método centralizado para el manejo de errores HTTP
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente o de red
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Errores del lado del servidor
      // Intentar extraer el mensaje del cuerpo del error de ApiResponse del backend
      if (error.error && typeof error.error === 'object' && 'message' in error.error) {
        errorMessage = `Server-side error (${error.status}): ${error.error.message}`;
      } else if (error.error && typeof error.error === 'string') {
        errorMessage = `Server-side error (${error.status}): ${error.error}`;
      } else {
        errorMessage = `Server-side error (${error.status}): ${error.message || 'No specific error message from server.'}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Propagar el error
  }
}
