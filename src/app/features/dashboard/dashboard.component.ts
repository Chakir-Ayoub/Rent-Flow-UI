import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

interface CalendarDay {
  day: number;
  monthOffset: number;
  status: 'available' | 'reserved' | 'today' | 'pending';
}

interface Booking {
  initials: string;
  name: string;
  room: string;
  dates: string;
  price: number;
  status: 'Confirmed' | 'On hold';
  avatarClass: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dateNow: Date = new Date();

  sidebarCollapsed = false;

  selectedDay = 15;

  chartMode: 'weekly' | 'monthly' = 'weekly';

  bookingSearch = '';

  calendarDays: CalendarDay[] = [
    { day: 30, monthOffset: -1, status: 'available' },

    { day: 1, monthOffset: 0, status: 'reserved' },
    { day: 2, monthOffset: 0, status: 'reserved' },
    { day: 3, monthOffset: 0, status: 'reserved' },
    { day: 4, monthOffset: 0, status: 'available' },
    { day: 5, monthOffset: 0, status: 'reserved' },
    { day: 6, monthOffset: 0, status: 'reserved' },

    { day: 7, monthOffset: 0, status: 'reserved' },
    { day: 8, monthOffset: 0, status: 'reserved' },
    { day: 9, monthOffset: 0, status: 'available' },
    { day: 10, monthOffset: 0, status: 'pending' },
    { day: 11, monthOffset: 0, status: 'available' },
    { day: 12, monthOffset: 0, status: 'reserved' },
    { day: 13, monthOffset: 0, status: 'reserved' },

    { day: 14, monthOffset: 0, status: 'available' },
    { day: 15, monthOffset: 0, status: 'today' },
    { day: 16, monthOffset: 0, status: 'reserved' },
    { day: 17, monthOffset: 0, status: 'reserved' },
    { day: 18, monthOffset: 0, status: 'reserved' },
    { day: 19, monthOffset: 0, status: 'reserved' },
    { day: 20, monthOffset: 0, status: 'reserved' },

    { day: 21, monthOffset: 0, status: 'available' },
    { day: 22, monthOffset: 0, status: 'pending' },
    { day: 23, monthOffset: 0, status: 'available' },
    { day: 24, monthOffset: 0, status: 'reserved' },
    { day: 25, monthOffset: 0, status: 'reserved' },
    { day: 26, monthOffset: 0, status: 'reserved' },
    { day: 27, monthOffset: 0, status: 'reserved' },

    { day: 28, monthOffset: 0, status: 'reserved' },
    { day: 29, monthOffset: 0, status: 'reserved' },
    { day: 30, monthOffset: 0, status: 'reserved' },
    { day: 31, monthOffset: 0, status: 'available' },

    { day: 1, monthOffset: 1, status: 'available' },
    { day: 2, monthOffset: 1, status: 'available' },
    { day: 3, monthOffset: 1, status: 'available' }
  ];

  bookings: Booking[] = [
    {
      initials: 'SM',
      name: 'Sophie Martin',
      room: 'Deluxe Suite',
      dates: '15-18 Oct',
      price: 420,
      status: 'Confirmed',
      avatarClass: 'bg-primary-container'
    },
    {
      initials: 'AD',
      name: 'Alexandre Dumas',
      room: 'Panoramic Studio',
      dates: '22 Oct',
      price: 115,
      status: 'On hold',
      avatarClass: 'bg-secondary-container'
    },
    {
      initials: 'CL',
      name: 'Camille Laurent',
      room: 'Superior Room',
      dates: '24-27 Oct',
      price: 360,
      status: 'Confirmed',
      avatarClass: 'bg-primary-container'
    },
    {
      initials: 'TB',
      name: 'Thomas Bernard',
      room: 'Junior Suite',
      dates: '28-30 Oct',
      price: 290,
      status: 'Confirmed',
      avatarClass: 'bg-primary-container'
    }
  ];

  occupancy = [
    {
      name: 'Suites Deluxe',
      occupied: 6,
      total: 8,
      percentage: 75
    },
    {
      name: 'Studios Panoramiques',
      occupied: 5,
      total: 6,
      percentage: 83
    },
    {
      name: 'Chambres Supérieures',
      occupied: 9,
      total: 10,
      percentage: 90
    }
  ];

  chartPoints = [
    {
      cx: 0,
      cy: 110,
      label: 'Sem 40',
      value: '68%',
      info: "Sem 40 : 68% d'occupation"
    },
    {
      cx: 125,
      cy: 50,
      label: 'Sem 41',
      value: '84%',
      info: "Sem 41 : 84% d'occupation"
    },
    {
      cx: 250,
      cy: 35,
      label: 'Sem 42',
      value: '91%',
      info: 'Sem 42 : 91% (Pic mensuel)'
    },
    {
      cx: 375,
      cy: 60,
      label: 'Sem 43',
      value: '79%',
      info: "Sem 43 : 79% d'occupation"
    },
    {
      cx: 500,
      cy: 25,
      label: 'Sem 44',
      value: '88%',
      info: "Sem 44 : 88% d'occupation"
    }
  ];

  selectedChartPoint: any = null;

  selectDay(day: CalendarDay): void {
    if (day.monthOffset !== 0) {
      return;
    }

    this.selectedDay = day.day;
  }

  selectChartPoint(point: any): void {
    this.selectedChartPoint = point;
  }

  hideChartTooltip(): void {
    this.selectedChartPoint = null;
  }

  setChartMode(mode: 'weekly' | 'monthly'): void {
    this.chartMode = mode;
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  get filteredBookings(): Booking[] {
    const search = this.bookingSearch.toLowerCase().trim();

    if (!search) {
      return this.bookings;
    }

    return this.bookings.filter(booking =>
      booking.name.toLowerCase().includes(search) ||
      booking.room.toLowerCase().includes(search)
    );
  }

  newBooking(): void {
    console.log('Nouvelle réservation');
  }

  exportData(): void {
    console.log('Export des données');
  }

  previousMonth(): void {
    console.log('Mois précédent');
  }

  nextMonth(): void {
    console.log('Mois suivant');
  }

  goToday(): void {
    this.selectedDay = 15;
  }

  markMaintenanceDone(): void {
    console.log('Maintenance terminée');
  }

  get currentMonthYear(): string {
    const date= this.dateNow.toLocaleDateString('fr-FR', {
      month: 'long',
      year: 'numeric'
    });
    return date.charAt(0).toUpperCase() + date.slice(1);
  }
}
