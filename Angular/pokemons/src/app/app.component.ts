import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPokemonsComponent } from "./pagina-pokemons/pagina-pokemons.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaPokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemons';
}
