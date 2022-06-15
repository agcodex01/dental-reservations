import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements AfterViewChecked {
  reservations: Reservation[] = [
    {
      day: 'Monday',
      schedule: '09:10',
      status: 'cancelled',
    },
    {
      day: 'Wednesday',
      schedule: '10:00 - 11:00 AM',
      status: 'confirmed',
    },
    {
      day: 'Friday',
      schedule: '10:00 - 11:00 AM',
      status: 'done',
    },
  ];
  constructor() {

    this.setData();
  }
  ngAfterViewChecked(): void {
    this.setData();
  }

  setData() {
    const data = localStorage.getItem('reservations');
    if (!data) {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }

    this.reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  }
  getColor(color: string) {
    if (color === 'pending') {
      return 'primary';
    } else if (color === 'cancelled') {
      return 'danger';
    } else if (color === 'confirmed') {
      return 'warning';
    } else if (color === 'done') {
      return 'success';
    }
  }
}

export interface Reservation {
  day: string;
  schedule: string;
  status: string;
}
