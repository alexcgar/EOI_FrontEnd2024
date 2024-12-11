import { Component, inject, signal } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pagina-pokemons',
  imports: [],
  templateUrl: './pagina-pokemons.component.html',
  styleUrl: './pagina-pokemons.component.css'
})
export class PaginaPokemonsComponent {
  pokemonsService = inject(PokemonsService);
  pokemons = signal<any[]>([]);

  constructor() {
    this.obtenerPokemons();
  }

  obtenerPokemons() {
    this.pokemonsService
    .getPokemons()
    .subscribe({
      next: (pokemons) => this.pokemons.set(pokemons),
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo peliculas: `, error),
    });
  }
}
