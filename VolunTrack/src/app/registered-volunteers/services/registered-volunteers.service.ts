import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Import tap, catchError, throwError
import { RegisteredVolunteer } from '../model/registered-volunteers.entity';
import { environment } from '../../../environments/environment';

// Import ApiResponse interface
import { ApiResponse } from '../../shared/models/api-response.interface'; // Adjust path if different

@Injectable({
  providedIn: 'root'
})
export class RegisteredVolunteersService {
  private apiUrl = environment.apiUrl;
  // Make sure these URLs are correct relative to your environment.apiUrl
  // If environment.apiUrl already includes /api/v1, then remove it from here.
  private registrationsApiUrl: string = `${this.apiUrl}/inscriptions`; // Assuming backend path is just /inscriptions
  private participationsApiUrl: string = `${this.apiUrl}/participations`; // Assuming backend path is just /participations

  constructor(private http: HttpClient) { }

  // MODIFIED: Returns Observable<ApiResponse<RegisteredVolunteer[]>>
  getRegisteredVolunteersByActivityId(activityId: number): Observable<ApiResponse<RegisteredVolunteer[]>> {
    return this.http.get<ApiResponse<RegisteredVolunteer[]>>(
      `${this.registrationsApiUrl}/volunteers/byActivity/${activityId}`
    ).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn(`No registered volunteers found for activity ID ${activityId}:`, response.message);
        } else {
          console.log(`Registered volunteers for activity ID ${activityId} fetched successfully:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFIED: Returns Observable<ApiResponse<any>>
  createParticipationByAttendance(volunteerId: number, activityId: number): Observable<ApiResponse<any>> {
    const participationData = {
      volunteerId: volunteerId,
      activityId: activityId,
      initialStatus: "REGISTERED" // Verify this status is correctly recognized by backend
    };

    return this.http.post<ApiResponse<any>>(this.participationsApiUrl, participationData).pipe(
      tap(response => {
        if (response.data) {
          console.log('Participation created successfully:', response.message, response.data);
        } else {
          console.warn('Participation creation responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFIED: Returns Observable<ApiResponse<any>>
  deleteParticipation(participationId: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.participationsApiUrl}/${participationId}`).pipe(
      tap(response => {
        console.log(`Participation with ID ${participationId} deleted successfully:`, response.message);
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFIED: Returns Observable<ApiResponse<any[]>>
  getParticipationsByActivityId(activityId: number): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.participationsApiUrl}/by-activity/${activityId}`).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn(`No participations found for activity ID ${activityId}:`, response.message);
        } else {
          console.log(`Participations for activity ID ${activityId} fetched successfully:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFIED: Returns Observable<ApiResponse<any>>
  updateAttendance(registrationId: number, attendance: boolean): Observable<ApiResponse<any>> {
    // Note: 'attendance' is passed as a boolean, but backend expects 'asistio' or 'no asistio' string.
    // This conversion is correct.
    const attendanceValue = attendance ? 'asistio' : 'no asistio';
    return this.http.patch<ApiResponse<any>>(`${this.registrationsApiUrl}/${registrationId}`, { attendance: attendanceValue }).pipe(
      tap(response => {
        if (response.data) {
          console.log(`Attendance for registration ID ${registrationId} updated successfully:`, response.message, response.data);
        } else {
          console.warn(`Attendance update responded with no data for registration ID ${registrationId}:`, response.message);
        }
      }),
      catchError(this.handleHttpError)
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
