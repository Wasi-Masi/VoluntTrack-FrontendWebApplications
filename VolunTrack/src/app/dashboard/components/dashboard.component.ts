import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { DashboardActivity } from '../model/dashboard.entity';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  activities: DashboardActivity[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }
}
