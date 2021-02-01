import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchLocation: string;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    const searchLocation: string = event.target.value;
    this.eventEmitterService.onLocationSearch(searchLocation);
  }
}
