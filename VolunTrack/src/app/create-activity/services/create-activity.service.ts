/*
Description:
Service to handle HTTP requests related to activity creation, retrieval,
and updating via a REST API.

Author: Ainhoa Castillo
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importa HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importa tap, catchError, throwError
import { Activity } from '../../dashboard/model/dashboard.entity';
import { environment } from '../../../environments/environment'; // Importa el entorno para apiUrl

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

@Injectable({
  providedIn: 'root'
})
export class CreateActivityService {
  // Es mejor usar environment.apiUrl para consistencia
  private apiUrl = `${environment.apiUrl}/activities`; // Asumiendo que /activities es el endpoint base

  constructor(private http: HttpClient) {}

  // MODIFICADO: Ahora espera ApiResponse<Activity>
  createActivity(activity: Activity): Observable<ApiResponse<Activity>> {
    return this.http.post<ApiResponse<Activity>>(this.apiUrl, activity).pipe(
      tap(response => {
        if (response.data) {
          console.log('Activity created successfully via CreateActivityService:', response.message);
        } else {
          console.warn('Activity creation responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora espera ApiResponse<Activity[]>
  getActivities(): Observable<ApiResponse<Activity[]>> {
    return this.http.get<ApiResponse<Activity[]>>(this.apiUrl).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn('No activities found via CreateActivityService.getActivities:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora espera ApiResponse<void> (o ApiResponse<any> si devuelve algo simple)
  // El backend puede devolver una ApiResponse con data: null/void para PUT exitosos que no retornan un recurso.
  // Si tu backend devuelve la actividad actualizada, cambia <void> por <Activity>.
  updateActivity(activity: Activity): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(`${this.apiUrl}/${activity.actividad_id}`, activity).pipe(
      tap(response => {
        console.log(`Activity with ID ${activity.actividad_id} updated successfully:`, response.message);
      }),
      catchError(this.handleHttpError)
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
