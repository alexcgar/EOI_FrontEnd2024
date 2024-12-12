import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  http = inject(HttpClient);
  pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=';
  offset = 0;

  constructor() { }

  getPokemons() {
    return this.http.get<any>(`${this.pokemonsUrl}${this.offset}`).pipe(
      map(resp => {
          return resp.results; // Listado de pokemons
      })
    );
  }

  getDetallesPokemon(url:string) {
    return this.http.get<any>(url).pipe(
      map(resp => {
          return resp; // Detalles de pokemon
      })
    );
  }
}
