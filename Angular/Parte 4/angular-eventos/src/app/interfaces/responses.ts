import { Evento } from "./evento";

export interface EventosResponse {
  events: Evento[];
}

export interface SingleEventoResponse {
  event: Evento;
}
