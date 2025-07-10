// src/app/participation/services/inscription.service.ts
// (O src/app/activity-registration/services/inscription.service.ts si lo alineas con el Bounded Context)

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importar tap, catchError, throwError
import { CreateInscriptionResource } from '../resources/create-inscription.resource'; // Asegúrate de la ruta correcta
import { environment } from '../../../environments/environment'; // Importar environment

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  // Usar environment.apiUrl para consistencia
  private apiUrl = `${environment.apiUrl}/inscriptions`; // Asumiendo que el endpoint es /inscriptions

  constructor(private http: HttpClient) { }

  // MODIFICADO: Ahora espera ApiResponse<any> (o ApiResponse<InscriptionResource> si tienes una)
  createInscription(resource: CreateInscriptionResource): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.apiUrl, resource).pipe(
      tap(response => {
        if (response.data) {
          console.log('Inscription created successfully:', response.message, response.data);
        } else {
          console.warn('Inscription creation responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // Método centralizado para el manejo de errores HTTP (copia del que ya tienes en otros servicios)
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side errors
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
