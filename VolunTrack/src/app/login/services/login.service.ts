// src/app/login/services/login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

import { SignInResource } from '../components/sign-in-resource';
import { AuthenticationResponseResource } from '../components/authentication-response-resource';
import { SignUpResource } from '../../register/components/sign-up-resource';
import { environment } from '../../../environments/environment';

import { ApiResponse } from '../../shared/models/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl;
  private ORGANIZATION_ID_KEY = 'organization_id';

  constructor(private http: HttpClient) { }

  signIn(credentials: SignInResource): Observable<ApiResponse<AuthenticationResponseResource>> {
    console.log('Sending sign-in request to:', `${this.baseUrl}/auth/sign-in`);
    console.log('With credentials:', credentials);
    return this.http.post<ApiResponse<AuthenticationResponseResource>>(`${this.baseUrl}/auth/sign-in`, credentials)
      .pipe(
        tap(apiResponse => {
          if (apiResponse.data && apiResponse.data.token) {
            this.saveAuthenticationData(apiResponse.data.token, apiResponse.data.organizationId);
          } else {
            console.error('Sign-in failed:', apiResponse.message);
          }
        }),
        catchError(this.handleHttpError)
      );
  }

  signUp(userData: SignUpResource): Observable<ApiResponse<AuthenticationResponseResource>> {
    return this.http.post<ApiResponse<AuthenticationResponseResource>>(`${this.baseUrl}/auth/sign-up`, userData)
      .pipe(
        tap(apiResponse => {
          if (apiResponse.data && apiResponse.data.token) {
            this.saveAuthenticationData(apiResponse.data.token, apiResponse.data.organizationId);
          } else {
            console.error('Sign-up failed:', apiResponse.message);
          }
        }),
        catchError(this.handleHttpError)
      );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      if (error.error && typeof error.error === 'object' && error.error.message) {
        errorMessage = `Server-side error (${error.status}): ${error.error.message}`;
      } else if (error.error && typeof error.error === 'string') {
        errorMessage = `Server-side error (${error.status}): ${error.error}`;
      } else {
        errorMessage = `Server-side error (${error.status}): ${error.message || 'No specific error message from server.'}`;
      }
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  private saveAuthenticationData(token: string, organizationId?: number): void {
    localStorage.setItem('jwt_token', token);
    if (organizationId !== undefined && organizationId !== null) {
      localStorage.setItem(this.ORGANIZATION_ID_KEY, organizationId.toString());
    } else {
      localStorage.removeItem(this.ORGANIZATION_ID_KEY);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  getOrganizationId(): number | null {
    const orgId = localStorage.getItem(this.ORGANIZATION_ID_KEY);
    return orgId ? parseInt(orgId, 10) : null;
  }

  removeToken(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem(this.ORGANIZATION_ID_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
