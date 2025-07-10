// src/app/certificates/services/certificates.service.ts
// (Asumiendo que este servicio está en src/app/certificates/services, ajusta la ruta si es diferente)

import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importar tap, catchError, throwError
import { Certificate } from '../../registered-volunteers/model/registered-volunteers.entity'; // Asegúrate de que Certificate esté bien definida aquí
import { environment } from '../../../environments/environment';

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private apiUrl = environment.apiUrl;
  // Asegúrate de que esta basePath sea correcta. Si environment.apiUrl ya incluye /api/v1,
  // entonces debería ser `${this.apiUrl}/certificates`.
  private basePath: string = `${this.apiUrl}/certificates`;

  constructor(private http: HttpClient) {}

  /**
   * Envía un certificado al backend.
   * @param certificate El objeto Certificate a enviar.
   * @returns Un Observable que emite un ApiResponse<any> (o ApiResponse<Certificate> si el backend devuelve el certificado creado).
   */
  // MODIFICADO: Ahora devuelve Observable<ApiResponse<any>> (o el tipo específico de la respuesta)
  postCertificate(certificate: Certificate): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.basePath, certificate).pipe(
      tap(response => {
        if (response.data) {
          console.log('Certificate posted successfully:', response.message, response.data);
        } else {
          console.warn('Certificate post responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  /**
   * Obtiene los certificados asociados a un voluntario específico.
   * @param volunteerId El ID del voluntario.
   * @returns Un Observable que emite un ApiResponse<any[]> (o ApiResponse<Certificate[]> si el backend devuelve un array de certificados).
   */
  // MODIFICADO: Ahora devuelve Observable<ApiResponse<any[]>> (o el tipo específico de la respuesta)
  getCertificatesByVolunteer(volunteerId: number): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.basePath}/by-volunteer/${volunteerId}`).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn(`No certificates found for volunteer ID ${volunteerId}:`, response.message);
        } else {
          console.log(`Certificates for volunteer ID ${volunteerId} fetched successfully:`, response.message);
        }
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
