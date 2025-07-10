import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisteredVolunteer } from '../model/registered-volunteers.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteredVolunteersService {
  private registrationsApiUrl = `${environment.apiUrl}/v1/inscriptions`;

  constructor(private http: HttpClient) { }

  getRegisteredVolunteersByActivityId(activityId: number): Observable<RegisteredVolunteer[]> {
    return this.http.get<RegisteredVolunteer[]>(
      `${this.registrationsApiUrl}/volunteers/byActivity/${activityId}`
    );
  }

  updateAttendance(registrationId: number, attendance: boolean): Observable<any> {
    const attendanceValue = attendance ? 'asistio' : 'no asistio';
    return this.http.patch(`${this.registrationsApiUrl}/${registrationId}`, { attendance: attendanceValue });
  }
}
