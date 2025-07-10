// Description: Service for fetching volunteer data from the backend,
// including retrieving all volunteers and looking up a specific volunteer by ID,
// and handling creation, update, and deletion operations.
// Author: Cassius Martel, Ainhoa Castillo

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Volunteer,
  CreateVolunteerPayload,
  UpdateVolunteerPayload,
  VolunteerFilterPayload
} from '../model/volunteers.entity';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private apiUrl = environment.apiUrl;
  private basePath: string = `${this.apiUrl}/v1/volunteers`;

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
   * @returns Un Observable que emite un array de objetos Volunteer.
   */
  getVolunteers(filters?: VolunteerFilterPayload): Observable<Volunteer[]> {
    let params = new HttpParams();

    const organizationId = this.loginService.getOrganizationId();
    if (organizationId !== null && organizationId !== undefined) {
      params = params.set('organizationId', organizationId.toString());
    } else {
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
    console.log('VolunteersService: Enviando petición GET a:', this.basePath, 'con parámetros:', params.toString(), 'y cabeceras:', headers);

    return this.http.get<Volunteer[]>(this.basePath, { params: params, headers: headers });
  }

  getVolunteerById(id: number): Observable<Volunteer> {
    const headers = this.getAuthHeaders();
    return this.http.get<Volunteer>(`${this.basePath}/${id}`, { headers: headers });
  }

  createVolunteer(payload: CreateVolunteerPayload): Observable<Volunteer> {
    const organizationId = this.loginService.getOrganizationId();
    if (organizationId !== null && organizationId !== undefined) {
      payload.organizationId = organizationId;
    } else {
      console.error('VolunteersService: No se pudo obtener el organizationId para crear el voluntario.');
    }

    const headers = this.getAuthHeaders();
    return this.http.post<Volunteer>(this.basePath, payload, { headers: headers });
  }

  updateVolunteer(id: number, payload: UpdateVolunteerPayload): Observable<Volunteer> {
    const headers = this.getAuthHeaders();
    return this.http.put<Volunteer>(`${this.basePath}/${id}`, payload, { headers: headers });
  }

  deleteVolunteer(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.basePath}/${id}`, { headers: headers });
  }
}
