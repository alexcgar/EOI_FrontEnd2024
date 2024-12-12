import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { Evento } from '../interfaces/evento';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'event-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  newEvento: Evento = {
    title: '',
    description: '',
    date: '',
    image: '',
    price: 0,
  };

  eventsService = inject(EventsService);
  router = inject(Router);

  addEvento() {
    this.eventsService.addEvent(this.newEvento).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
