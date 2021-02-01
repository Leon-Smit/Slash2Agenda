import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeLocationSearch = new EventEmitter();

  constructor() { }

  onLocationSearch(searchLocation: string) {
    this.invokeLocationSearch.emit(searchLocation);
  }
}
