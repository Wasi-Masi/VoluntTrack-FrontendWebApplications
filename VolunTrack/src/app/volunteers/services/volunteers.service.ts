// Description: Service for fetching volunteer data from the backend,
// including retrieving all volunteers and looking up a specific volunteer by ID,
// and handling creation, update, and deletion operations.
// Author: Cassius Martel, Ainhoa Castillo (Actualizado para filtros)

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Volunteer,
  CreateVolunteerPayload,
  UpdateVolunteerPayload,
  VolunteerFilterPayload
} from '../model/volunteers.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private apiUrl = environment.apiUrl;
  private basePath: string = `${this.apiUrl}/v1/volunteers`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los voluntarios del backend, opcionalmente con criterios de filtro.
   * @param filters (Opcional) Un objeto VolunteerFilterPayload con los criterios de filtro.
   * @returns Un Observable que emite un array de objetos Volunteer.
   */
  getVolunteers(filters?: VolunteerFilterPayload): Observable<Volunteer[]> {
    let params = new HttpParams();

    if (filters) {
      if (filters.firstName) {
        params = params.set('firstName', filters.firstName);
      }
      if (filters.lastName) {
        params = params.set('lastName', filters.lastName);
      }
      if (filters.dni) {
        params = params.set('dni', filters.dni);
      }
      if (filters.email) {
        params = params.set('email', filters.email);
      }
      if (filters.phoneNumber) {
        params = params.set('phoneNumber', filters.phoneNumber);
      }
      if (filters.profession) {
        params = params.set('profession', filters.profession);
      }
      if (filters.organizationId !== null && filters.organizationId !== undefined) {
        params = params.set('organizationId', filters.organizationId.toString());
      }

    }

    return this.http.get<Volunteer[]>(this.basePath, { params: params });
  }


  getVolunteerById(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.basePath}/${id}`);
  }


  createVolunteer(payload: CreateVolunteerPayload): Observable<Volunteer> {
    return this.http.post<Volunteer>(this.basePath, payload);
  }


  updateVolunteer(id: number, payload: UpdateVolunteerPayload): Observable<Volunteer> {
    return this.http.put<Volunteer>(`${this.basePath}/${id}`, payload);
  }

  deleteVolunteer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}/${id}`);
  }
}
