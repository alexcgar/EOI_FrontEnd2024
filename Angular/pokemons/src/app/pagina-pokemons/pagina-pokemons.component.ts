import { Component, inject, signal } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'pagina-pokemons',
  imports: [],
  templateUrl: './pagina-pokemons.component.html',
  styleUrl: './pagina-pokemons.component.css'
})
export class PaginaPokemonsComponent {
  pokemonsService = inject(PokemonsService);
  pokemons = signal<any[]>([]);
  pokemon = signal<Pokemon>({sprites:{front_default:""}});

  constructor() {
    this.obtenerPokemons();
  }

  obtenerPokemons() {
    this.pokemonsService
    .getPokemons()
    .subscribe({
      next: (pokemons) => this.pokemons.set(pokemons),
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo pokemon: `, error),
    });
  }

  obtenerDetallesPokemon(url:string) {

console.log(url);    

    this.pokemonsService
    .getDetallesPokemon(url)
    .subscribe({
      next: (pokemon) => {
        console.log(pokemon);
        this.pokemon.set(pokemon)
      },
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo pokemon: `, error),
    });
  }
}
