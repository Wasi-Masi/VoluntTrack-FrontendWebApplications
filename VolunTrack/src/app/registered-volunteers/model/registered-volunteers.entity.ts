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

