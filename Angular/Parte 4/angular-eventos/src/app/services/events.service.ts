import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventosResponse, SingleEventoResponse } from '../interfaces/responses';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlEventos = "https://api.fullstackpro.es/svtickets-lite/events";

  http = inject(HttpClient);

  getEvents() {
    return this.http.get<EventosResponse>(this.urlEventos);
  }

  addEvent(evento: Evento) {
    return this.http.post<SingleEventoResponse>(this.urlEventos, evento);
  }

  deleteEvent(id: number) {
    return this.http.delete<void>(`${this.urlEventos}/${id}`);
  }
}
