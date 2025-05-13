import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatIconModule,
    MatIconButton,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  openNotifications() {
    // Aquí luego se mostrará el popup de notificaciones
  }
}
