import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEvents(): Evento[] {
    return [
      {
        id: 1,
        title: 'Evento de prueba 1',
        description: 'Un evento para probar',
        date: '2024-12-12',
        image: '/evento1.jpg',
        price: 50,
      },
      {
        id: 2,
        title: 'Evento de prueba 2',
        description: 'Otro evento',
        date: '2025-02-01',
        image: '/evento2.jpg',
        price: 22.5,
      },
      {
        id: 3,
        title: 'Evento de prueba 3',
        description: 'Y otro más',
        date: '2025-03-15',
        image: '/evento3.jpg',
        price: 99.95,
      },
    ];
  }
}
