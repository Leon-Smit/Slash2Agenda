import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root',
})
export class IcsParserService {
  constructor() {}

  public writeToFile(appointments: Appointment[]): void {
    // TODO: Write the appointments to file
    console.log(appointments);
  }

  public readFromFile(path: string): Appointment[] {
    // TODO: Parse from file to object of appointments
    return [
      {
        date: '01-02-2021',
        startTime: '11:00',
        endTime: '13:00',
        clientName: 'Stefan Rierink',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '13:00',
        endTime: '15:00',
        clientName: 'Bartje Dikkers',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '12:00',
        endTime: '14:00',
        clientName: 'Noud Wenink',
        location: 'Groningen',
      },
      {
        date: '01-02-2021',
        startTime: '13:00',
        endTime: '15:00',
        clientName: 'Wil Stertjan',
        location: 'Leeuwarden',
      },
    ];
  }
}
