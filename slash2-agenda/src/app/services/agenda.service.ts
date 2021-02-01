import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import * as ICal from 'node-ical';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private appointments: Appointment[];

  constructor() {
    this.loadAgenda();
  }

  public getAppointments(): Appointment[] {
    return this.appointments;
  }

  private loadAgenda() {
    const mockAppointments: Appointment[] = [
      {
        date: "01-02-2021",
        startTime: "11:00",
        endTime: "13:00",
        clientName: "Stefan Rierink",
        location: "Groningen"
      },
      {
        date: "01-02-2021",
        startTime: "13:00",
        endTime: "15:00",
        clientName: "Bartje Dikkers",
        location: "Groningen"
      },
      {
        date: "01-02-2021",
        startTime: "12:00",
        endTime: "14:00",
        clientName: "Noud Wenink",
        location: "Groningen"
      },
      {
        date: "01-02-2021",
        startTime: "13:00",
        endTime: "15:00",
        clientName: "Wil Stertjan",
        location: "Leeuwarden"
      }
    ];

    this.appointments = mockAppointments;
  }
}
