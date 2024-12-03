import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'events-page',
  imports: [],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {
  events: Evento[] = [
    {
      id: 1,
      title: 'Evento de prueba 1',
      description: 'Un evento para probar',
      date: '2024-12-12',
      image: '',
      price: 50
    },
    {
      id: 2,
      title: 'Evento de prueba 2',
      description: 'Otro evento',
      date: '2025-02-01',
      image: '',
      price: 22.5
    },
    {
      id: 3,
      title: 'Evento de prueba 3',
      description: 'Y otro más',
      date: '2025-03-15',
      image: '',
      price: 99.95
    },
  ];
}
