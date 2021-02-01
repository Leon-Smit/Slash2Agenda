import { Component, OnInit } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.appointments = this.agendaService.getAppointments();
  }

}
