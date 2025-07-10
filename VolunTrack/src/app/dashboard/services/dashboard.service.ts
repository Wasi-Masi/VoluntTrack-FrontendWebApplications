import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse
import { Observable, tap, catchError, throwError } from 'rxjs'; // Importar tap, catchError, throwError
import { Activity } from '../model/dashboard.entity';
import { environment } from '../../../environments/environment'; // Importa el entorno para apiUrl

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta a donde tengas tu ApiResponse

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl; // Considera usar environment.apiUrl aquí también

  constructor(private http: HttpClient) {}

  // MODIFICADO: Ahora espera un ApiResponse<Activity[]>
  getActivities(): Observable<ApiResponse<Activity[]>> {
    return this.http.get<ApiResponse<Activity[]>>(`${this.apiUrl}/activities`).pipe(
      tap(apiResponse => {
        // Opcional: Loguear si no hay datos o el mensaje de la API
        if (!apiResponse.data || apiResponse.data.length === 0) {
          console.warn('DashboardService: No activities found or data is empty.', apiResponse.message);
        } else {
          console.log('DashboardService: Activities fetched successfully.', apiResponse.message);
        }
      }),
      // Añadir manejo de errores para los errores HTTP (4xx, 5xx)
      catchError(this.handleHttpError)
    );
  }

  // Método centralizado para el manejo de errores HTTP (copia del que ya tienes en LoginService o ActivityDetailsService)
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
    return throwError(() => new Error(errorMessage)); // Propagar el error
  }
}
