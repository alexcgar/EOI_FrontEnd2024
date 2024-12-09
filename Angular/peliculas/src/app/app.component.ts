import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPeliculasComponent } from "./pagina-peliculas/pagina-peliculas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas';
}
