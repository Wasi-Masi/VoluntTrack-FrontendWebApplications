import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisteredVolunteer } from '../model/registered-volunteers.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteredVolunteersService {
  private apiUrl = environment.apiUrl;
  private registrationsApiUrl: string = `${this.apiUrl}/v1/inscriptions`;
  private participationsApiUrl: string = `${this.apiUrl}/v1/participations`;

  constructor(private http: HttpClient) { }

  getRegisteredVolunteersByActivityId(activityId: number): Observable<RegisteredVolunteer[]> {
    return this.http.get<RegisteredVolunteer[]>(
      `${this.registrationsApiUrl}/volunteers/byActivity/${activityId}`
    );
  }

  createParticipationByAttendance(volunteerId: number, activityId: number): Observable<any> {
    const participationData = {
      volunteerId: volunteerId,
      activityId: activityId,
      initialStatus: "REGISTERED"
    };

    return this.http.post<any>(this.participationsApiUrl, participationData);
  }

  deleteParticipation(participationId: number): Observable<any> {
    return this.http.delete<any>(`${this.participationsApiUrl}/${participationId}`);
  }

  getParticipationsByActivityId(activityId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.participationsApiUrl}/by-activity/${activityId}`);
  }

  updateAttendance(registrationId: number, attendance: boolean): Observable<any> {
    const attendanceValue = attendance ? 'asistio' : 'no asistio';
    return this.http.patch(`${this.registrationsApiUrl}/${registrationId}`, { attendance: attendanceValue });
  }
}
