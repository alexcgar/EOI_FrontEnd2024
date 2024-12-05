import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Evento } from '../interfaces/evento';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';

@Component({
  selector: 'event-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  add = output<Evento>();

  newEvento: Evento = {
    id: 4,
    title: '',
    description: '',
    date: '',
    image: '',
    price: 0,
  };

  addEvento(formEvent: NgForm) {
    const newEvento = {...this.newEvento};
    this.add.emit(newEvento);
    formEvent.resetForm();
    this.newEvento.image = '';
    this.newEvento.id!++;
  }
}
