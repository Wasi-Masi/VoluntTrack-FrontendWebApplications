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
    public estado: string, // <-- Este es el estado de la actividad (ej: 'Abierta', 'Cerrada', 'Finalizada')
    public organizacion_id: number,
    public imagenes: string[],
    public availableSlots: number,
  ) {}

  get dashboardPicture(): string {
    return (this.imagenes && this.imagenes.length > 0)
      ? this.imagenes[0]
      : 'assets/images/default-activity-placeholder.png';
  }

  get isInscriptionOpen(): boolean {
    // Si tu backend envía 'Abierta' cuando las inscripciones están listas para recibir voluntarios
    return this.estado === 'Abierta'; // <-- CAMBIO AQUÍ
  }
}
