import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
  },

  {
    path: 'booking',
    loadComponent: () =>
      import('./features/booking/booking-list-component/booking-list-component.component')
        .then(m => m.BookingListComponentComponent)
  }
];
