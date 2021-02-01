import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private appointments: Appointment[];
  private filteredAppointments: Appointment[];

  private locationFilter: string;

  constructor() {
    this.locationFilter = '';
    this.loadAgenda();
  }

  public getAppointments(): Appointment[] {
    return this.filteredAppointments;
  }

  public removeAppointment(removeAppointment: Appointment): void {
    this.appointments = this.appointments.filter((appointment) => {
      return appointment !== removeAppointment;
    });
    this.filterAppointments();
  }

  public setLocationFilter(searchLocation: string): void {
    this.locationFilter = searchLocation.toLowerCase();
    this.filterAppointments();
  }

  public exportAgenda(): void {
    console.log('Exporting appointments');
    console.log(this.filteredAppointments);
  }

  private filterAppointments(): void {
    const locationFilter = this.locationFilter;
    this.filteredAppointments = this.appointments.filter((appointment) => {
      return appointment.location.toLowerCase().includes(locationFilter);
    });
  }

  private loadAgenda() {
    const mockAppointments: Appointment[] = [
      {
        date: '01-02-2021',
        startTime: '11:00',
        endTime: '13:00',
        clientName: 'Stefan Rierink',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '13:00',
        endTime: '15:00',
        clientName: 'Bartje Dikkers',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '12:00',
        endTime: '14:00',
        clientName: 'Noud Wenink',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '13:00',
        endTime: '15:00',
        clientName: 'Wil Stertjan',
        location: 'Leeuwarden',
      },
    ];

    this.appointments = mockAppointments;
    this.filteredAppointments = mockAppointments;
  }
}
