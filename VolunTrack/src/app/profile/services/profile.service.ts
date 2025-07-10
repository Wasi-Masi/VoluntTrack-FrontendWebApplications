// src/app/profile/services/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Observable, of, throwError } from 'rxjs'; // Importar throwError
import { tap, catchError } from 'rxjs/operators'; // Importar catchError
import { User } from '../model/profile.entity';
import { environment } from '../../../environments/environment';

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<User>>
  getProfile(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.baseUrl}/users/me`).pipe(
      tap(response => {
        if (response.data) {
          console.log('Profile fetched successfully:', response.message, response.data);
        } else {
          console.warn('Profile fetch responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // MODIFICADO: Ahora devuelve Observable<ApiResponse<User>>
  updateProfile(userId: number, profileData: User): Observable<ApiResponse<User>> {
    // Es buena práctica asegurarse de que no envías propiedades que el backend no espera o no puede actualizar.
    // 'id' se pasa en la URL, por lo que no debe ir en el payload.
    // 'notifications' e 'inscriptions' suelen ser colecciones gestionadas por otros endpoints,
    // o solo se modifican indirectamente. Si el backend no las espera directamente en el PUT,
    // considera omitirlas del payload o ajusta el DTO del backend.
    const updatePayload: Omit<User, 'id'> = {
      username: profileData.username,
      email: profileData.email,
      phoneNumber: profileData.phoneNumber,
      plan: profileData.plan,
      description: profileData.description,
      profilePictureUrl: profileData.profilePictureUrl,
      bannerPictureUrl: profileData.bannerPictureUrl,
      language: profileData.language,
      // Aunque las incluyas en tu modelo local de 'User',
      // si el backend no las espera en el PUT de actualización de perfil,
      // es mejor no enviarlas o que el backend las ignore.
      notifications: profileData.notifications, // <--- Verifica si tu backend espera esto en el PUT
      timezone: profileData.timezone,
      inscriptions: profileData.inscriptions   // <--- Verifica si tu backend espera esto en el PUT
    };

    return this.http.put<ApiResponse<User>>(`${this.baseUrl}/users/${userId}`, updatePayload).pipe(
      tap(response => {
        if (response.data) {
          console.log(`Profile for user ${userId} updated successfully:`, response.message, response.data);
        } else {
          console.warn(`Profile update responded with no data for user ${userId}:`, response.message);
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
