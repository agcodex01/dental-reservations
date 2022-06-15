import { Reservation } from './../tab3/tab3.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  days: Day[];
  constructor(private router: Router, public toastController: ToastController) {
    this.days = [
      {
        name: 'Monday',
        value: 'monday',
        schedules: scheduleList,
      },
      {
        name: 'Tuesday',
        value: 'tuesday',
        schedules: scheduleList,
      },
      {
        name: 'Wednesday',
        value: 'wednesday',
        schedules: scheduleList,
      },
      {
        name: 'Thursday',
        value: 'thursday',
        schedules: scheduleList,
      },
      {
        name: 'Friday',
        value: 'friday',
        schedules: scheduleList,
      },
    ];
  }

  reserve(day, schedule) {
    const info: Info = JSON.parse(localStorage.getItem('info')) || null;
    if (info === null) {
      this.router.navigate(['start']);
    }
    const reservations: Reservation[] =
      JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push({
      day,
      schedule,
      status: 'pending',
    });

    localStorage.setItem('reservations', JSON.stringify(reservations));

    this.presentToast(info);
  }
  async presentToast(info: Info) {
    const toast = await this.toastController.create({
      message:
        info.preferContact === 'email'
          ? this.emailMessage(info.name, info.contactData)
          : this.smsMessage(info.name, info.contactData),
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  emailMessage(name: string, contact: string) {
    return `${name} successfully reserved. We will update to your email @ ${contact}.`;
  }

  smsMessage(name: string, contact: string) {
    return `${name} successfully reserved. We will message to your number ${contact}.`;
  }
}

export interface Day {
  name: string;
  value: string;
  schedules: Schedule[];
}

export interface Schedule {
  name: string;
  value: string;
}

export interface Info {
  name: string;
  preferContact: string;
  contactData: string;
}

export const scheduleList: Schedule[] = [
  {
    name: '09:00 - 10:00 AM',
    value: '09-10',
  },
  {
    name: '10:00 - 11:00 AM',
    value: '10-11',
  },
  {
    name: '11:00 - 12:00 NN',
    value: '11-12',
  },
  {
    name: '01:00 - 02:00 PM',
    value: '01-02',
  },
  {
    name: '02:00 - 03:00 PM',
    value: '02-03',
  },
  {
    name: '03:00 - 04:00 PM',
    value: '03-04',
  },
  {
    name: '04:00 - 05:00 PM',
    value: '04-05',
  },
];
