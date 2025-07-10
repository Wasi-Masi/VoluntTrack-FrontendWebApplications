/**
 * Defines the class representing a volunteer's registration details for an activity and
 * the Certificate class for participation certificates.
 *
 * Ainhoa Castillo
 */


export class Certificate {
  id?: number; // Optional, as it's returned by GET but not sent with POST
  participationId: number;
  description: string;

  constructor(participationId: number, description: string, id?: number) {
    this.participationId = participationId;
    this.description = description;
    if (id) {
      this.id = id;
    }
  }
}



/**
 * Class used in the frontend to represent a volunteer registration with full volunteer details
 * merged from Volunteer + RegisteredVolunteersEntity.
 */
export class RegisteredVolunteer {
  constructor(
    public id: number,                // volunteer.id
    public fullName: string,
    public dateOfBirth: string,
    public age: number,
    public profession: string,
    public registrationDate: string,
    public status: string,
    public hasParticipation?: boolean, // Indica si el voluntario tiene una participación para esta actividad
    public participationId?: number | null
  ) {}
}
