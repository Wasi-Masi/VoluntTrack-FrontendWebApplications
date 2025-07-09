// Description: Defines the entities and payloads for volunteer management.
// Author: Cassius Martel, Ainhoa Castillo

export interface Volunteer {
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  profession: string;
  active: boolean;
  organizationId: number;
  organizationName?: string;
  registrationDate: string;
}

export interface CreateVolunteerPayload {
  firstName: string;
  lastName: string;
  dni: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  organizationId: number;
  profession?: string;
}

export interface UpdateVolunteerPayload {
  firstName?: string;
  lastName?: string;
  dni?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  organizationId?: number;
  profession?: string;
  active?: boolean;
  registrationDate?: string;
}

export interface VolunteerFilterPayload {
  firstName?: string;
  lastName?: string;
  dni?: string;
  email?: string;
  phoneNumber?: string;
  profession?: string;
  organizationId?: number | null;

}

// Enum or type for Volunteer Status if applicable (from your backend if any)
// export type VolunteerStatus = 'ACTIVE' | 'INACTIVE' | 'PENDING';
