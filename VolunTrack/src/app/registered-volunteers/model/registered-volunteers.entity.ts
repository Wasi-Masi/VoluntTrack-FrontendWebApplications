/**
 * Defines the RegisteredVolunteersEntity class representing a volunteer's registration details for an activity,
 * the Certificate class for participation certificates,
 * and the RegisteredVolunteer class for enriched display data in the UI.
 *
 * Cassius Martel
 * Actualizado por Gemini AI
 */

export class RegisteredVolunteersEntity {
  constructor(
    public id: number,
    public activityId: number,
    public volunteerId: number,
    public registrationDate: string,
    public status: string,
    public attendance: boolean
  ) {}
}

export class Certificate {
  constructor(
    public id: string,
    public volunteerId: number,
    public activityTitle: string,
    public text: string,
  ) {}
}

/**
 * Class used in the frontend to represent a volunteer registration with full volunteer details
 * merged from Volunteer + RegisteredVolunteersEntity.
 */
export class RegisteredVolunteer {
  constructor(
    public id: number,                // volunteer.id
    public volunteerId: number,      // registration.id
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public dateOfBirth: string,
    public age: number,
    public profession: string,
    public registrationDate: string,
    public status: string,
    public attendance: boolean
  ) {}
}
