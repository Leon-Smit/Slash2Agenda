import { Component } from '@angular/core';
import { AgendaService } from './services/agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private agendaService: AgendaService) {

  }
}
