import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'events-page',
  imports: [FormsModule],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {
  eventos: Evento[] = [
    {
      id: 1,
      title: 'Evento de prueba 1',
      description: 'Un evento para probar',
      date: '2024-12-12',
      image: '/evento1.jpg',
      price: 50
    },
    {
      id: 2,
      title: 'Evento de prueba 2',
      description: 'Otro evento',
      date: '2025-02-01',
      image: '/evento2.jpg',
      price: 22.5
    },
    {
      id: 3,
      title: 'Evento de prueba 3',
      description: 'Y otro más',
      date: '2025-03-15',
      image: '/evento3.jpg',
      price: 99.95
    },
  ];

  newId = 4;
  newEvento: Evento = {
    id: this.newId,
    title: '',
    description: '',
    date: '',
    image: '',
    price: 0
  }

  imageToBase64(input: HTMLInputElement) {
    const file = input.files?.[0];
    if(!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
      this.newEvento.image = fileReader.result as string;
    })
  }

  addEvento(formEvent: NgForm) {
    this.eventos.push({...this.newEvento});
    formEvent.resetForm();
    this.newEvento.image = "";
    this.newEvento.id!++;
  }

  deleteEvento(index: number) {
    this.eventos.splice(index, 1);
  }
}
