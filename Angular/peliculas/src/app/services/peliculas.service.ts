import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PeliculasResponse } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  http = inject(HttpClient);
  peliculasUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=...&language=es&page=1';

  constructor() { }

  getPeliculas() {
    return this.http.get<PeliculasResponse>(this.peliculasUrl).pipe(
      map(resp => {
          return resp.results; // Listado de películas
      })
    );
  }
}
