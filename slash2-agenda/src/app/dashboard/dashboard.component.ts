import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService, private agendaService: AgendaService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    const searchLocation: string = event.target.value;
    this.eventEmitterService.onLocationSearch(searchLocation);
  }

  exportAppointments() {
    this.agendaService.exportAgenda();
  }
}
