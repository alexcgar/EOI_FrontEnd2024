import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'event-form',
  imports: [FormsModule],
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

  imageToBase64(input: HTMLInputElement) {
    const file = input.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', () => {
      this.newEvento.image = fileReader.result as string;
    });
  }

  addEvento(formEvent: NgForm) {
    const newEvento = {...this.newEvento};
    this.add.emit(newEvento);
    formEvent.resetForm();
    this.newEvento.image = '';
    this.newEvento.id!++;
  }
}
