import { Component, inject, signal } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula';

@Component({
  selector: 'pagina-peliculas',
  imports: [],
  templateUrl: './pagina-peliculas.component.html',
  styleUrl: './pagina-peliculas.component.css'
})
export class PaginaPeliculasComponent {
  peliculasService = inject(PeliculasService);
  peliculas = signal<Pelicula[]>([]);

  constructor() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService
    .getPeliculas()
    .subscribe({
      next: (peliculas) => this.peliculas.set(peliculas),
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo peliculas: `, error),
    });
  }
}
