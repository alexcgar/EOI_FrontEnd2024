import { Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Evento } from '../interfaces/evento';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'event-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  add = output<Evento>();

  newEvento: Evento = {
    title: '',
    description: '',
    date: '',
    image: '',
    price: 0,
  };

  eventsService = inject(EventsService);

  addEvento(formEvent: NgForm) {
    this.eventsService.addEvent(this.newEvento).subscribe(resp => {
      this.add.emit(resp.event);
      formEvent.resetForm();
      this.newEvento.image = '';
    });
  }
}
