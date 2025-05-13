import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Activity } from '../model/dashboard.entity';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    MatButton,
    NgForOf,
    MatIconModule,
    RouterLink
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }
}
