// src/app/notifications/model/notification-type.enum.ts

export enum NotificationType {
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  NEW_ACTIVITY = 'NEW_ACTIVITY',
  JOINED_ACTIVITY = 'JOINED_ACTIVITY',
  VOLUNTEER_JOINED = 'VOLUNTEER_JOINED',
  CERTIFICATE_READY = 'CERTIFICATE_READY',
  REMINDER = 'REMINDER',
  GENERIC = 'GENERIC',
  // Si añades más tipos en el backend, añádelos aquí también.
  // Por ejemplo, para los tipos que usabas antes en el frontend:
  SUCCESS = 'SUCCESS', // Si tu backend enum no tiene esto, podemos considerarlo para el frontend o remapearlo
  ERROR = 'ERROR',     // Si tu backend enum no tiene esto, podemos considerarlo para el frontend o remapearlo
  MAIL = 'MAIL',       // Si tu backend enum no tiene esto, podemos considerarlo para el frontend o remapearlo
  INFO = 'INFO'        // Si tu backend enum no tiene esto, podemos considerarlo para el frontend o remapearlo
}

// Puedes añadir una función de utilidad si necesitas mapear los tipos de 'éxito', 'error', 'mail' a GENERIC
export function mapFrontendTypeToBackendType(frontendType: string): NotificationType {
  switch (frontendType) {
    case 'success': return NotificationType.GENERIC; // O mapear a un tipo específico si lo añades en backend
    case 'error': return NotificationType.GENERIC;   // O mapear a un tipo específico si lo añades en backend
    case 'mail': return NotificationType.GENERIC;    // O mapear a un tipo específico si lo añades en backend
    case 'info': return NotificationType.GENERIC;    // O mapear a un tipo específico si lo añades en backend
    default:
      // Si el tipo ya coincide directamente con los del backend, úsalo
      if (Object.values(NotificationType).includes(frontendType as NotificationType)) {
        return frontendType as NotificationType;
      }
      return NotificationType.GENERIC; // Fallback
  }
}
