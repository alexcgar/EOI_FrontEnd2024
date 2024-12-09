import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  http = inject(HttpClient);
  chistesUrl = 'https://v2.jokeapi.dev/joke/Programming?lang=es';

  constructor() { }

  getChistes() {
    return this.http.get<any>(this.chistesUrl).pipe(
      map(resp => resp.joke)
    );
  }
}
