import { Component, effect, inject, input, signal } from '@angular/core';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon';
import { NgClass } from '@angular/common';
import { PokemonsService } from '../services/pokemons.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'detalle-pokemon',
  imports: [NgClass],
  templateUrl: './detalle-pokemon.component.html',
  styleUrl: './detalle-pokemon.component.css',
})
export class DetallePokemonComponent {
  url = input.required<string>();
  pokemon = signal<PokemonDetails | null>(null);

  tiposPokemons: { [key: string]: { color: string; icon: string } } = {
    normal: { color: 'text-bg-light', icon: 'bi-circle-fill' },
    fire: { color: 'text-bg-danger', icon: 'bi-fire' },
    water: { color: 'text-bg-primary', icon: 'bi-droplet-fill' },
    electric: { color: 'text-bg-warning', icon: 'bi-lightning-fill' },
    grass: { color: 'text-bg-success', icon: 'bi-tree-fill' },
    ice: { color: 'text-bg-info', icon: 'bi-snow' },
    fighting: { color: 'text-bg-danger', icon: 'bi-hand-index-thumb' },
    poison: { color: 'text-bg-secondary', icon: 'bi-emoji-dizzy' },
    ground: { color: 'text-bg-warning', icon: 'bi-signpost-split' },
    flying: { color: 'text-bg-info', icon: 'bi-wind' },
    psychic: { color: 'text-bg-danger', icon: 'bi-eye-fill' },
    bug: { color: 'text-bg-success', icon: 'bi-bug-fill' },
    rock: { color: 'text-bg-secondary', icon: 'bi-gem' },
    ghost: { color: 'text-bg-dark', icon: 'bi-emoji-neutral' },
    dragon: { color: 'text-bg-primary', icon: 'bi-bullseye' },
    dark: { color: 'text-bg-dark', icon: 'bi-moon-fill' },
    steel: { color: 'text-bg-secondary', icon: 'bi-cpu-fill' },
    fairy: { color: 'text-bg-light', icon: 'bi-stars' },
  };

  pokemonsService = inject(PokemonsService);

  constructor() {
    effect(() =>
      this.pokemonsService.getDetallesPokemon(this.url()).subscribe({
        next: (pokemon) => {
          this.pokemon.set(pokemon);
        },
        error: (error: HttpErrorResponse) =>
          console.error(`Error obteniendo pokemon: `, error),
      })
    );
  }
}
