export class Activity {
  constructor(
    public id: string,
    public title: string,
    public dashboardPicture: string,
    public pictures: string[],
    public date: string,
    public startTime: string,
    public endTime: string,
    public address: string,
    public description: string,
    public instructions: string[],
    public purpose: string[],
    public inscriptionCount: number,
    public isInscriptionOpen: boolean
  ) {}
}
