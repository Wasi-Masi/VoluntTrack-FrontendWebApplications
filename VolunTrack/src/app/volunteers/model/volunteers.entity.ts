// Description: Entity class representing a volunteer, including personal details, status, and associated certificates.
// Author: Cassius Martel

export class Volunteer {
  constructor(
    public id: number,
    public fullName: string,
    public email: string,
    public age: number,
    public phoneNumber: string,
    public status: 'active' | 'inactive',
    public registrationDate: string, // formato ISO, ej. '2025-05-10'
    public profession: string,
    public profilePicture: string,
    public isFeatured: boolean,
    public certificateIds: number[]
  ) {}
}
