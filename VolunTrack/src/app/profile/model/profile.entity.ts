export class ProfileEntity {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
    public phone: string,
    public pfp: string,
    public plan: string,
    public banner: string,
    public description: string,
    public language: string,
    public notifications: string,
    public timezone: string,
    public inscriptions: string
  ) {
  }
}
