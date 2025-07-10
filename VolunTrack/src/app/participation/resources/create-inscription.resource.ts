// src/app/participation/resources/create-inscription.resource.ts

export interface CreateInscriptionResource {
  voluntarioId: number; // El ID del voluntario que se va a inscribir
  actividadId: number;  // El ID de la actividad a la que se va a inscribir
  estado: string; // Ej: 'PENDING'
  fecha: string; // Formato YYYY-MM-DD
}
