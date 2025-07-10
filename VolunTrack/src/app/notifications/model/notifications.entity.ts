// src/app/notifications/model/notifications.entity.ts

import { NotificationType } from './notification-type.enum';

export class Notification {
  public id?: number; // Propiedad opcional
  public title: string;
  public message: string;
  public createdAt: string;
  public type?: NotificationType; // Propiedad opcional
  public recipientId?: number; // Propiedad opcional
  public recipientType?: 'VOLUNTEER' | 'ORGANIZATION'; // Propiedad opcional

  constructor(data: {
    title: string;
    message: string;
    createdAt: string;
    id?: number; // Opcional dentro del objeto
    type?: NotificationType; // Opcional dentro del objeto
    recipientId?: number; // Opcional dentro del objeto
    recipientType?: 'VOLUNTEER' | 'ORGANIZATION'; // Opcional dentro del objeto
  }) {
    this.id = data.id;
    this.title = data.title;
    this.message = data.message;
    this.createdAt = data.createdAt;
    this.type = data.type;
    this.recipientId = data.recipientId;
    this.recipientType = data.recipientType;
  }
}
