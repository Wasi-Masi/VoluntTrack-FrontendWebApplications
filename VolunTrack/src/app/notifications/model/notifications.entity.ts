export class Notification {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public createdAt: string
  ) {}
}


function createNotification(type: string): Notification {
  const id = Date.now().toString();
  const createdAt = new Date().toISOString();

  let title = '';
  let message = '';

  switch (type) {
    case 'signup':
      title = '¡Bienvenido a VolunTrack!';
      message = 'Tu cuenta ha sido creada exitosamente. Ya puedes unirte a actividades.';
      break;

    case 'login':
      title = 'Sesión iniciada';
      message = 'Has iniciado sesión correctamente.';
      break;

    case 'new-activity':
      title = 'Actividad creada';
      message = 'Has creado una nueva actividad de voluntariado. ¡Comparte para sumar voluntarios!';
      break;

    case 'joined-activity':
      title = 'Inscripción confirmada';
      message = 'Te has inscrito en una nueva actividad. ¡Gracias por tu compromiso!';
      break;

    case 'volunteer-joined':
      title = 'Nuevo voluntario';
      message = 'Un voluntario se ha unido a una de tus actividades. Revisa los detalles.';
      break;

    case 'certificate-ready':
      title = 'Certificado disponible';
      message = 'Tu certificado de participación ya está disponible para descargar.';
      break;

    case 'reminder':
      title = 'Recordatorio de actividad';
      message = 'Tienes una actividad programada pronto. No olvides revisar los detalles.';
      break;

    default:
      title = 'Notificación';
      message = 'Tienes una nueva notificación en VolunTrack.';
  }

  return new Notification(id, title, message, createdAt);
}
