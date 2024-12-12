import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { Evento } from '../interfaces/evento';
import { EventsService } from '../services/events.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'event-card',
  imports: [DatePipe, TitleCasePipe, IntlCurrencyPipe, RouterLink],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  evento = input.required<Evento>();
  delete = output<void>();

  eventsService = inject(EventsService);

  deleteEvento() {
    this.eventsService
      .deleteEvent(this.evento().id!)
      .subscribe(() => this.delete.emit());
  }
}
