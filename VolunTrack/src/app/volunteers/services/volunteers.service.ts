// src/app/volunteers/services/volunteers.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importar tap, catchError, throwError
import {
  Volunteer,
  CreateVolunteerPayload,
  UpdateVolunteerPayload,
  VolunteerFilterPayload
} from '../model/volunteers.entity';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../login/services/login.service';
import { ApiResponse } from '../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private apiUrl = environment.apiUrl;
  // Asegúrate de que esta basePath sea correcta. Si environment.apiUrl ya incluye /api/v1,
  // entonces debería ser `${this.apiUrl}/volunteers`.
  private basePath: string = `${this.apiUrl}/volunteers`;

  constructor(
    private http: HttpClient,
    private loginService: LoginService // Inyecta LoginService
  ) {}

  /**
   * Genera las cabeceras HTTP con el token JWT si está disponible.
   * @returns Un objeto HttpHeaders con el token de autorización.
   */
  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.loginService.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  /**
   * Obtiene todos los voluntarios del backend, opcionalmente con criterios de filtro.
   * @param filters (Opcional) Un objeto VolunteerFilterPayload con los criterios de filtro.
   * @returns Un Observable que emite un ApiResponse<Volunteer[]>.
   */
  // MODIFICADO: Ahora devuelve Observable<ApiResponse<Volunteer[]>>
  getVolunteers(filters?: VolunteerFilterPayload): Observable<ApiResponse<Volunteer[]>> {
    let params = new HttpParams();

    const organizationId = this.loginService.getOrganizationId();
    if (organizationId !== null && organizationId !== undefined) {
      params = params.set('organizationId', organizationId.toString());
    } else {
      // Advertencia: si no hay organizationId, el backend podría denegar la solicitud.
      console.warn('VolunteersService: No se pudo obtener el organizationId del usuario logueado. Esto podría causar problemas de autorización en el backend.');
    }

    if (filters) {
      if (filters.minAge !== null && filters.minAge !== undefined) {
        params = params.set('minAge', filters.minAge.toString());
      }
      if (filters.maxAge !== null && filters.maxAge !== undefined) {
        params = params.set('maxAge', filters.maxAge.toString());
      }
      if (filters.profession !== null && filters.profession !== undefined && filters.profession !== '') {
        params = params.set('profession', filters.profession);
      }
    }

    const headers = this.getAuthHeaders();

    return this.http.get<ApiResponse<Volunteer[]>>(this.basePath, { params: params, headers: headers }).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn('No volunteers found:', response.message);
        } else {
          console.log('Volunteers fetched successfully:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<Volunteer>>
  getVolunteerById(id: number): Observable<ApiResponse<Volunteer>> {
    const headers = this.getAuthHeaders();
    return this.http.get<ApiResponse<Volunteer>>(`${this.basePath}/${id}`, { headers: headers }).pipe(
      tap(response => {
        if (response.data) {
          console.log(`Volunteer with ID ${id} fetched successfully:`, response.message);
        } else {
          console.warn(`Volunteer with ID ${id} responded with no data:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<Volunteer>>
  createVolunteer(payload: CreateVolunteerPayload): Observable<ApiResponse<Volunteer>> {
    const organizationId = this.loginService.getOrganizationId();
    if (organizationId !== null && organizationId !== undefined) {
      payload.organizationId = organizationId; // Asigna organizationId al payload
    } else {
      // Error crítico: no se puede crear un voluntario sin organizationId
      console.error('VolunteersService: No se pudo obtener el organizationId para crear el voluntario. La solicitud no se enviará.');
      return throwError(() => new Error('No se pudo obtener el ID de la organización.'));
    }

    const headers = this.getAuthHeaders();
    return this.http.post<ApiResponse<Volunteer>>(this.basePath, payload, { headers: headers }).pipe(
      tap(response => {
        if (response.data) {
          console.log('Volunteer created successfully:', response.message, response.data);
        } else {
          console.warn('Volunteer creation responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<Volunteer>>
  updateVolunteer(id: number, payload: UpdateVolunteerPayload): Observable<ApiResponse<Volunteer>> {
    const headers = this.getAuthHeaders();
    return this.http.put<ApiResponse<Volunteer>>(`${this.basePath}/${id}`, payload, { headers: headers }).pipe(
      tap(response => {
        if (response.data) {
          console.log(`Volunteer with ID ${id} updated successfully:`, response.message, response.data);
        } else {
          console.warn(`Volunteer with ID ${id} update responded with no data:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<void>>
  deleteVolunteer(id: number): Observable<ApiResponse<void>> {
    const headers = this.getAuthHeaders();
    return this.http.delete<ApiResponse<void>>(`${this.basePath}/${id}`, { headers: headers }).pipe(
      tap(response => {
        console.log(`Volunteer with ID ${id} deleted successfully:`, response.message);
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
