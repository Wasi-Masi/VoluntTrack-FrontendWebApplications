import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisteredVolunteersEntity } from '../model/registered-volunteers.entity';
import {Volunteer } from '../../volunteers/model/volunteers.entity'

@Injectable({
  providedIn: 'root'
})
export class RegisteredVolunteersService {
  private apiUrl = 'http://localhost:3000/registers';

  constructor(private http: HttpClient) { }

  getRegistrationsByActivity(activityId: string): Observable<RegisteredVolunteersEntity[]> {
    // Usamos HttpParams para enviar el filtro por query param
    const params = new HttpParams().set('activityId', activityId);

    return this.http.get<RegisteredVolunteersEntity[]>(this.apiUrl, { params });
  }
  getVolunteerById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`http://localhost:3000/volunteers/${id}`);
  }

}
