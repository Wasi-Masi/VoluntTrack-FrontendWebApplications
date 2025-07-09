/**
 * Defines the RegisteredVolunteersEntity class representing a volunteer's registration details for an activity,
 * and the Certificate class representing a participation certificate for a volunteer.
 *
 * Cassius Martel
 */

export class RegisteredVolunteersEntity {
  constructor(
    public id: string,
    public activityId: string,
    public volunteerId: string,
    public registrationDate: string,
    public status: string,
    public attendance: string

  ) {}
}

export class Certificate {
  constructor(
    public id: string,
    public volunteerId: string,
    public activityTitle: string,
    public text: string,

  ) {}
}

