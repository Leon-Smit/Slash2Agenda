import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/interfaces/appointment';
import { Input } from '@angular/core'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() appointment: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
