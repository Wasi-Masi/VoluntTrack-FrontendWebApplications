// src/app/shared/services/volunteer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Necesario para los tipos de datos asíncronos

@Injectable({
  providedIn: 'root' // Esto registra el servicio para que esté disponible en toda la aplicación
})
export class VolunteerService {

  // La URL base para el controlador de voluntarios en tu backend.
  // IMPORTANTE: Asegúrate de que el puerto (8080) y la ruta (/api/v1/volunteers)
  // coincidan exactamente con la configuración de tu Spring Boot.
  private apiUrl = 'http://localhost:8080/api/v1/volunteers'; // <-- ¡VERIFICA ESTA URL!

  constructor(private http: HttpClient) { } // Inyecta el cliente HTTP de Angular

  /**
   * Obtiene todos los voluntarios del backend.
   * Realiza una solicitud GET a la URL de la API.
   * @returns Un Observable que emitirá un array de objetos (que representarán a los voluntarios).
   */
  getAllVolunteers(): Observable<any[]> {
    console.log('VolunteerService: Realizando llamada GET a:', this.apiUrl); // Mensaje de depuración
    return this.http.get<any[]>(this.apiUrl);
  }
}
