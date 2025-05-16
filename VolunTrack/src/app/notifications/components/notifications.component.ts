import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../model/notifications.entity';
import { MatButton } from '@angular/material/button';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatButton,
    CommonModule,
    NgForOf,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications: Notification[] = [];
  isDrawerOpen = false;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.loadNotifications();
    window.addEventListener('openNotifications', () => this.isDrawerOpen = true);
    window.addEventListener('closeNotifications', () => this.isDrawerOpen = false);
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  loadNotifications() {
    this.notificationsService.getNotifications().subscribe({
      next: (data) => (this.notifications = data),
      error: (err) => console.error('Error loading notifications', err)
    });
  }

  createNotification(type: string) {
    this.notificationsService.getNotifications().subscribe((existingNotis) => {
      const maxId = existingNotis.length > 0
        ? Math.max(...existingNotis.map(n => +n.id))
        : 0;
      const newId = (maxId + 1).toString();
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
        case 'volunteer-joined':
          title = 'Nuevo voluntario';
          message = 'Un voluntario se ha unido a una de tus actividades. Revisa los detalles.';
          break;
        case 'certificate':
          title = 'Certificados disponibles';
          message = 'Has enviado certificados a todos los participantes involucrados. ¡Sigue valorando el compromiso!.';
          break;
        case 'reminder':
          title = 'Recordatorio de actividad';
          message = 'Tienes una actividad programada pronto. No olvides revisar los detalles.';
          break;
        case 'mail':
          title = 'Correo enviado';
          message = 'Has enviado correctamente un correo al voluntario seleccionado.';
          break;
        default:
          title = 'Notificación';
          message = 'Tienes una nueva notificación en VolunTrack.';
      }

      const newNotification = new Notification(newId, title, message, createdAt);

      this.notificationsService.createNotification(newNotification).subscribe({
        next: () => this.loadNotifications(),
        error: (err) => console.error('Error creating notification', err)
      });
    });
  }

  deleteNotification(noti: Notification) {
    this.notificationsService.deleteNotification(noti).subscribe(() => {
      this.loadNotifications();
    });
  }

  deleteAllNotifications() {
    this.notificationsService.deleteAllNotifications().subscribe(() => {
      this.loadNotifications();
    });
  }
}
