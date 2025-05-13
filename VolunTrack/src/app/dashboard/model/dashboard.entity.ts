export class DashboardActivity {
  constructor(
    public id: number,
    public title: string,
    public dashboardPicture: string,
    public mainPicture: string,
    public picture1: string,
    public picture2: string,
    public picture3: string,
    public picture4: string,
    public date: string,
    public startTime: string,
    public endTime: string,
    public address: string,
    public description: string,
    public instructions: string[],
    public purpose: string[],
    public inscriptionCount: number,
    public isInscriptionOpen: boolean

  ) {

  }
}
