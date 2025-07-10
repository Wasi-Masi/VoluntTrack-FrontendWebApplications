// Description: Dialog component for filtering volunteers.
// Author: Cassius Martel, Ainhoa Castillo

import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';
import { VolunteerFilterPayload } from '../../model/volunteers.entity';

@Component({
  selector: 'app-volunteer-filter-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    TranslatePipe
  ],
  templateUrl: './volunteer-filter-dialog.component.html',
  styleUrls: ['./volunteer-filter-dialog.component.css']
})
export class VolunteerFilterDialogComponent implements OnInit {

  filterCriteria: VolunteerFilterPayload;
  availableProfessions: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<VolunteerFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { filterCriteria: VolunteerFilterPayload, professions: string[] }
  ) {
    this.filterCriteria = { ...data.filterCriteria };
    this.availableProfessions = data.professions || [];
  }

  ngOnInit(): void {
  }

  onClear(): void {
    this.filterCriteria = {
      minAge: null,
      maxAge: null,
      profession: null
    };
  }

  onApply(): void {
    this.dialogRef.close(this.filterCriteria);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
