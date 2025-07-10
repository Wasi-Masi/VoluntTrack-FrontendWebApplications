// src/app/participation/services/inscription.service.ts
// (O src/app/activity-registration/services/inscription.service.ts si lo alineas con el Bounded Context)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateInscriptionResource } from '../resources/create-inscription.resource'; // Asegúrate de la ruta correcta

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:8080/api/v1/'; // Ajusta la URL base si es diferente para inscripciones

  constructor(private http: HttpClient) { }

  createInscription(resource: CreateInscriptionResource): Observable<any> {
    // Este endpoint es el que tu backend debe exponer para crear una inscripción.
    // Basado en tu diagrama, sería POST a /inscriptions
    return this.http.post(`${this.apiUrl}inscriptions`, resource);
  }
}
