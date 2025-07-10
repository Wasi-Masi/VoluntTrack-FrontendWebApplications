// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core'; // Asumo que usas ngx-translate, si no, puedes quitarlo

/**
 * Interfaz para los datos que se pasarán al diálogo de confirmación.
 */
export interface ConfirmDialogData {
  title: string;       // Título del diálogo (se puede traducir)
  message: string;     // Mensaje principal del diálogo (se puede traducir)
  confirmText?: string; // Texto opcional para el botón de confirmar (ej: "Eliminar", "Aceptar")
  cancelText?: string;  // Texto opcional para el botón de cancelar (ej: "Cancelar")
}

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title | translate }}</h1>
    <div mat-dialog-content>
      <p>{{ data.message | translate }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">{{ (data.cancelText || 'common.cancel') | translate }}</button>
      <button mat-raised-button color="warn" (click)="onConfirm()">{{ (data.confirmText || 'common.confirm') | translate }}</button>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule] // Asegúrate de incluir TranslateModule si lo usas
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>, // Referencia al diálogo
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData // Datos pasados al diálogo
  ) {}

  /**
   * Cierra el diálogo y retorna 'false' indicando que la acción fue cancelada.
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }

  /**
   * Cierra el diálogo y retorna 'true' indicando que la acción fue confirmada.
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
