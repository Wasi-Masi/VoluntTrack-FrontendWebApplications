// src/app/participation/services/participation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Interfaz para la respuesta de inscripción, basada en lo que tu backend devuelve:
// [ { "inscription_id": 0, "voluntarioId": 0, "estado": "PENDING", "fecha": "2025-07-10", "actividadId": 0 } ]
export interface InscriptionResponse {
  inscription_id: number;
  voluntarioId: number; // Este es el ID del voluntario que necesitamos
  estado: string;
  fecha: string;
  actividadId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de inscripciones para una actividad específica.
   * La respuesta contiene el ID del voluntario para cada inscripción.
   * @param activityId El ID de la actividad.
   * @returns Un Observable que emite un array de InscriptionResponse.
   */
  getInscriptionsByActivityId(activityId: number): Observable<InscriptionResponse[]> {

    const url = `${this.baseUrl}/v1/inscriptions/byActivity/${activityId}`;
    console.log('GET Inscriptions URL:', url); // <-- ¡Aquí está el console.log!
    return this.http.get<InscriptionResponse[]>(url);
  }
}
