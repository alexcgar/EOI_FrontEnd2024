import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../services/pokemons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon';

@Component({
  selector: 'pagina-pokemons',
  imports: [CommonModule],
  templateUrl: './pagina-pokemons.component.html',
  styleUrl: './pagina-pokemons.component.css'
})
export class PaginaPokemonsComponent {
  viewportScroller = inject(ViewportScroller);
  pokemonsService = inject(PokemonsService);
  pokemons = signal<Pokemon[]>([]);
  pokemonActual = 0;
  pokemon = signal<PokemonDetails>({
    name: "Bulbasaur",
    cries: {
      latest:"https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg"
    },
    sprites: {
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    },
    types: [
      {
        slot: 1,
        type: {
          name: "grass"
        }
      }
    ]
  });

  tiposPokemons: { [key: string]: { color: string; icon: string } } = {
    normal:   { color: 'text-bg-light',     icon: 'bi-circle-fill' },
    fire:     { color: 'text-bg-danger',    icon: 'bi-fire' },
    water:    { color: 'text-bg-primary',   icon: 'bi-droplet-fill' },
    electric: { color: 'text-bg-warning',   icon: 'bi-lightning-fill' },
    grass:    { color: 'text-bg-success',   icon: 'bi-tree-fill' },
    ice:      { color: 'text-bg-info',      icon: 'bi-snow' },
    fighting: { color: 'text-bg-danger',    icon: 'bi-hand-index-thumb' },
    poison:   { color: 'text-bg-secondary', icon: 'bi-emoji-dizzy' },
    ground:   { color: 'text-bg-warning',   icon: 'bi-signpost-split' },
    flying:   { color: 'text-bg-info',      icon: 'bi-wind' },
    psychic:  { color: 'text-bg-danger',    icon: 'bi-eye-fill' },
    bug:      { color: 'text-bg-success',   icon: 'bi-bug-fill' },
    rock:     { color: 'text-bg-secondary', icon: 'bi-gem' },
    ghost:    { color: 'text-bg-dark',      icon: 'bi-emoji-neutral' },
    dragon:   { color: 'text-bg-primary',   icon: 'bi-bullseye' },
    dark:     { color: 'text-bg-dark',      icon: 'bi-moon-fill' },
    steel:    { color: 'text-bg-secondary', icon: 'bi-cpu-fill' },
    fairy:    { color: 'text-bg-light',     icon: 'bi-stars' }
  };

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
    this.pokemonsService
    .getDetallesPokemon(url)
    .subscribe({
      next: (pokemon) => {
        console.log(pokemon);
        this.pokemon.set(pokemon);
        this.viewportScroller.scrollToPosition([0,0]);
      },
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo pokemon: `, error),
    });
  }

  seleccionar(seleccionado: number) {
    this.pokemonActual = seleccionado;
    this.obtenerDetallesPokemon(this.pokemons()[this.pokemonActual].url);
  }

  obtenerSiguiente() {
    if (this.pokemonActual < 1000) {
      this.pokemonActual++;
      this.obtenerDetallesPokemon(this.pokemons()[this.pokemonActual].url);
    }
  }

  obtenerAnterior() {
    if (this.pokemonActual > 0) {
      this.pokemonActual--;
      this.obtenerDetallesPokemon(this.pokemons()[this.pokemonActual].url);
    }
  }
}
