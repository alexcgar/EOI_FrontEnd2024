import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Chiste } from '../interfaces/chiste';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  http = inject(HttpClient);
  chistesUrl = 'https://v2.jokeapi.dev/joke/Any?lang=es';

  constructor() { }

  getChistes() {
    return this.http.get<Chiste>(this.chistesUrl).pipe(
      map(resp => {
        if (resp.type === 'single') {
          return resp.joke; // Chiste de una sola línea
        } else if (resp.type === 'twopart') {
          return `${resp.setup} ${resp.delivery}`; // Chiste de dos partes
        }
        return 'Chiste no disponible';
      })
    );
  }
}
