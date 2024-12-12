import { Routes } from '@angular/router';
import { PaginaPokemonsComponent } from './pagina-pokemons/pagina-pokemons.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    children: [
      { path: '', component: PaginaPokemonsComponent },
      { path: 'detalle', component: DetallePokemonComponent },
    ],
  },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', redirectTo: '/pokemons'}
];
