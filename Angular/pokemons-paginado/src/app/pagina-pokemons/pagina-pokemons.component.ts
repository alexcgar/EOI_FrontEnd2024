import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'pagina-pokemons',
  imports: [CommonModule, RouterLink],
  templateUrl: './pagina-pokemons.component.html',
  styleUrl: './pagina-pokemons.component.css'
})
export class PaginaPokemonsComponent {
  viewportScroller = inject(ViewportScroller);
  pokemonsService = inject(PokemonsService);
  pokemons = signal<Pokemon[]>([]);
  pokemonActual = 0;

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
}
