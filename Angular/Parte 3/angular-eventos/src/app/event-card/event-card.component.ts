import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'event-card',
  imports: [DatePipe, TitleCasePipe, IntlCurrencyPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  evento = input.required<Evento>();
  delete = output<void>();

  deleteEvento() {
    this.delete.emit();
  }
}
