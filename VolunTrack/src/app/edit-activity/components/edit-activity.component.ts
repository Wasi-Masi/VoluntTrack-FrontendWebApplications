/**
 * Description: Component to edit an existing activity, allowing update of details such as instructions, purpose, and pictures.
 * Author: Victor Ortiz
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CreateActivityService } from '../../create-activity/services/create-activity.service';

@Component({
  selector: 'app-edit-activity',
  standalone: true,
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButton,
    MatIconModule,
    TranslateModule
  ]
})
export class EditActivityComponent implements OnInit {
  activity: Activity = new Activity('', '', '', [], '', '', '', '', '', [], [], 0, true);
  instructions: string = '';
  purpose: string = '';
  picturesInput: string = '';

  constructor(
    private route: ActivatedRoute,
    private activityService: CreateActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.activityService.getActivities().subscribe(activities => {
        const existing = activities.find(a => a.id === id);
        if (existing) {
          this.activity = existing;
          this.instructions = existing.instructions.join('\n');
          this.purpose = existing.purpose.join('\n');
          this.picturesInput = existing.pictures.join('\n');
        }
      });
    }
  }

  onSubmit(): void {
    const updatedActivity: Activity = {
      ...this.activity,
      instructions: this.instructions.split('\n').map(i => i.trim()).filter(Boolean),
      purpose: this.purpose.split('\n').map(p => p.trim()).filter(Boolean),
      pictures: this.picturesInput.split('\n').map(p => p.trim()).filter(Boolean),
      dashboardPicture: this.picturesInput.split('\n')[0] || ''
    };

    this.activityService.updateActivity(updatedActivity).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
