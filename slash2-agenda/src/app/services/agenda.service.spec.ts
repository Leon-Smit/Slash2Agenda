import { TestBed } from '@angular/core/testing';
import { Appointment } from '../interfaces/appointment';

import { AgendaService } from './agenda.service';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove the given appointment', () => {
    let mockData = getMockData();
    let removeAppointment = mockData[0];

    service.setAppointments(mockData);
    service.removeAppointment(removeAppointment);

    expect(
      appointmentsContainRemovedAppointment(
        service.getAppointments(),
        removeAppointment
      )
    ).toBeFalsy();
  });
});

function appointmentsContainRemovedAppointment(
  appointments: Appointment[],
  removeAppointment: Appointment
): boolean {
  let containsRemovedAppointment = false;
  appointments.forEach((appointment) => {
    if (appointment === removeAppointment) {
      containsRemovedAppointment = true;
    }
  });
  return containsRemovedAppointment;
}

function getMockData(): Appointment[] {
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
