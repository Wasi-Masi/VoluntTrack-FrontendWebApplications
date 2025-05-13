import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { VolunteersComponent } from './volunteers/components/volunteers.component';
import { ProfileComponent } from './profile/components/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'profile', component: ProfileComponent }
];

export const appRoutes = provideRouter(routes);
