// src/app/shared/services/volunteer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Necesario para los tipos de datos asíncronos

@Injectable({
  providedIn: 'root' // Esto registra el servicio para que esté disponible en toda la aplicación
})
export class VolunteerService {

  /*
  private apiUrl = 'http://localhost:8080/api/v1/volunteers';

  constructor(private http: HttpClient) { }
  */
  /**
   * Obtiene todos los voluntarios del backend.
   * Realiza una solicitud GET a la URL de la API.
   * @returns Un Observable que emitirá un array de objetos (que representarán a los voluntarios).
   */
  /*
  getAllVolunteers(): Observable<any[]> {
    console.log('VolunteerService: Realizando llamada GET a:', this.apiUrl); // Mensaje de depuración
    return this.http.get<any[]>(this.apiUrl);
  }
  */
}
