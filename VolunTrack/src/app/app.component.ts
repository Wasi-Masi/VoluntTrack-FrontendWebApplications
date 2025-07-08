import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import {NotificationsComponent} from './notifications/components/notifications.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VolunteerService } from './shared/services/volunteer.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, ToolbarComponent, NotificationsComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'VolunTrack';

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit(): void {
    console.log('AppComponent: Iniciando llamada al servicio de voluntarios...');
    this.volunteerService.getAllVolunteers().subscribe({
      next: (data) => {
        console.log('AppComponent: ¡Conexión exitosa! Datos de voluntarios recibidos:', data);
      },
      error: (error) => {
        console.error('AppComponent: Error al obtener voluntarios:', error);
      },
      complete: () => {
        console.log('AppComponent: Solicitud de voluntarios completada.');
      }
    });
  }
}
