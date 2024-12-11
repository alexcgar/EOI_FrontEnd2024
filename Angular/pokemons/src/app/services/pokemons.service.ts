import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  http = inject(HttpClient);
  pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor() { }

  getPokemons() {
    return this.http.get<any>(this.pokemonsUrl).pipe(
      map(resp => {
          return resp.results; // Listado de películas
      })
    );
  }
}
