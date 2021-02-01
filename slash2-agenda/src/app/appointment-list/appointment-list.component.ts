import { Component, OnInit } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { AgendaService } from '../services/agenda.service';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];
  subscription: any;

  constructor(
    private agendaService: AgendaService,
    private eventEmitterService: EventEmitterService
  ) {}

  ngOnInit(): void {
    this.appointments = this.agendaService.getAppointments();

    this.subscription = this.eventEmitterService.invokeLocationSearch.subscribe(
      (searchLocation) => this.filterAppointments(searchLocation)
    );
  }

  public removeAppointment(appointment: Appointment):void {
    this.agendaService.removeAppointment(appointment);
    this.updateAppointments();
  }

  private filterAppointments(searchLocation: string) {
    this.agendaService.filterAppointments(searchLocation);
    this.updateAppointments();
  }

  private updateAppointments(): void {
    this.appointments = this.agendaService.getAppointments();
  }
}
