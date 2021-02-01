import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private eventEmitterService: EventEmitterService,
    private agendaService: AgendaService
  ) {}

  ngOnInit(): void {}

  public onKey(event: any) {
    const searchLocation: string = event.target.value;
    this.eventEmitterService.onLocationSearch(searchLocation);
  }

  public exportAppointments() {
    this.agendaService.exportAgenda();
  }
}
