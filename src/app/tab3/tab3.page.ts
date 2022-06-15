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
    this.reservations = JSON.parse(localStorage.getItem('reservations'))|| [];
  }
}

export interface Reservation {
  day: string;
  schedule: string;
  status: string;
}
