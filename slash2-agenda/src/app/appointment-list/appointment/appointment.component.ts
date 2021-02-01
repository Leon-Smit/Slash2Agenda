import { Component, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/interfaces/appointment';
import { Input } from '@angular/core'
import { AgendaService } from 'src/app/services/agenda.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() appointment: Appointment;
  @Output() removeAppointment = new EventEmitter<Appointment>();

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
  }
  
  remove(): void {
    this.removeAppointment.emit(this.appointment);
  }
}
