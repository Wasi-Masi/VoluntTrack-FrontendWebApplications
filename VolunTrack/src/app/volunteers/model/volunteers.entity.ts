// Description: Entity class representing a volunteer, including personal details, status, and associated certificates.
// Author: Cassius Martel

export class Volunteer {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public dni: string,
    public dateOfBirth: string, // formato ISO, ej. '2025-05-10'
    public email: string,
    public phoneNumber: string,
    public registrationDate: string, // formato ISO, ej. '2025-05-10'
    public status: 'ACTIVE' | 'INACTIVE',
    public address: string,
    public profession: string,
  ) {}
}
