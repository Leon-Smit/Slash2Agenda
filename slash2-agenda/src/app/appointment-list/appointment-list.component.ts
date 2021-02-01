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
  filteredAppointments: Appointment[];
  subscription: any;

  constructor(
    private agendaService: AgendaService,
    private eventEmitterService: EventEmitterService
  ) {}

  ngOnInit(): void {
    this.appointments = this.agendaService.getAppointments();
    this.filteredAppointments = this.appointments;

    this.subscription = this.eventEmitterService.invokeLocationSearch.subscribe(
      (searchLocation) => this.filterAppointments(searchLocation)
    );
  }

  private filterAppointments(searchLocation: string): void {
    const lcSearchLocation = searchLocation.toLowerCase();
    const filteredAppointments: Appointment[] = [];
    this.appointments.forEach((appointment) => {
      if (appointment.location.toLowerCase().includes(lcSearchLocation)) {
        filteredAppointments.push(appointment);
      }
    });
    this.filteredAppointments = filteredAppointments;
  }
}
