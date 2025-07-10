// src/app/participation/services/participation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Import tap, catchError, throwError
import { environment } from '../../../environments/environment';

// Import ApiResponse interface
import { ApiResponse } from '../../shared/models/api-response.interface'; // Adjust path if different

// Interfaz para la respuesta de inscripción, basada en lo que tu backend devuelve:
// [ { "inscription_id": 0, "voluntarioId": 0, "estado": "PENDING", "fecha": "2025-07-10", "actividadId": 0 } ]
export interface InscriptionResponse {
  inscription_id: number;
  voluntarioId: number; // Este es el ID del voluntario que necesitamos
  estado: string;
  fecha: string;
  actividadId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  // Use environment.apiUrl for consistency, assuming it already includes /api/v1
  private apiUrl = `${environment.apiUrl}/inscriptions`;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de inscripciones para una actividad específica.
   * La respuesta contiene el ID del voluntario para cada inscripción.
   * @param activityId El ID de la actividad.
   * @returns Un Observable que emite un ApiResponse que contiene un array de InscriptionResponse.
   */
  // MODIFIED: Now returns Observable<ApiResponse<InscriptionResponse[]>>
  getInscriptionsByActivityId(activityId: number): Observable<ApiResponse<InscriptionResponse[]>> {
    const url = `${this.apiUrl}/byActivity/${activityId}`;
    console.log('GET Inscriptions URL:', url); // <-- ¡Aquí está el console.log!

    return this.http.get<ApiResponse<InscriptionResponse[]>>(url).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn(`No inscriptions found for activity ID ${activityId}:`, response.message);
        } else {
          console.log(`Inscriptions for activity ID ${activityId} fetched successfully:`, response.message);
        }
      }),
      catchError(this.handleHttpError) // Centralized error handling
    );
  }

  // Centralized method for HTTP error handling
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side errors
      // Attempt to extract the message from the backend's ApiResponse error body
      if (error.error && typeof error.error === 'object' && 'message' in error.error) {
        errorMessage = `Server-side error (${error.status}): ${error.error.message}`;
      } else if (error.error && typeof error.error === 'string') {
        errorMessage = `Server-side error (${error.status}): ${error.error}`;
      } else {
        errorMessage = `Server-side error (${error.status}): ${error.message || 'No specific error message from server.'}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Propagate the error
  }
}
