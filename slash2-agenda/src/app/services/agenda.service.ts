import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { IcsParserService } from './ics-parser.service';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private appointments: Appointment[];
  private filteredAppointments: Appointment[];

  private locationFilter: string;

  constructor(private icsParserService: IcsParserService) {
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
    const mockAppointments: Appointment[] = this.icsParserService.parse('');

    this.appointments = mockAppointments;
    this.filteredAppointments = mockAppointments;
  }
}
