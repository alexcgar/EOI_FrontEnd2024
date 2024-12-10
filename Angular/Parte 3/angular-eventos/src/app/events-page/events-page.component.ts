import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventFormComponent } from '../event-form/event-form.component';
import { Evento } from '../interfaces/evento';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'events-page',
  imports: [FormsModule, EventFormComponent, EventCardComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
  eventos = signal<Evento[]>([]);

  search = signal('');

  filteredEvents = computed(() => {
    const searchLower = this.search().toLowerCase();
    return this.eventos().filter(
      (e) =>
        e.title.toLowerCase().includes(searchLower) ||
        e.description.toLowerCase().includes(searchLower)
    );
  });

  eventsService = inject(EventsService);

  constructor() {
    this.eventsService.getEvents().subscribe(resp => this.eventos.set(resp.events));
  }

  addEvento(evento: Evento) {
    this.eventos.update(eventos => [...eventos, evento]);
  }

  deleteEvento(evento: Evento) {
    this.eventos.update(eventos => eventos.filter((e) => e !== evento));
  }

  orderPrice() {
    this.eventos.update(eventos => eventos.toSorted((e1, e2) => e1.price - e2.price));
  }

  orderDate() {
    this.eventos.update(eventos => eventos.toSorted((e1, e2) => e1.date.localeCompare(e2.date)));
  }
}
