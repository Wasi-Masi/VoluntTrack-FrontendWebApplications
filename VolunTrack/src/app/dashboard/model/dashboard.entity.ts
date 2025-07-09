export class Activity {
  constructor(
    public actividad_id: number,
    public fecha: string,
    public horaInicio: string,
    public horaFin: string,
    public titulo: string,
    public descripcion: string,
    public instrucciones: string,
    public proposito: string,
    public cupos: number,
    public ubicacion: string,
    public estado: string,
    public organizacion_id: number,
    public imagenes: string[]
  ) {}

  get dashboardPicture(): string {
    return (this.imagenes && this.imagenes.length > 0)
      ? this.imagenes[0]
      : 'assets/images/default-activity-placeholder.png';
  }

  get isInscriptionOpen(): boolean {
    return this.estado === 'Activa';
  }
}
