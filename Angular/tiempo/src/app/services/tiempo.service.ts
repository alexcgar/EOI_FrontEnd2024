import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {
  http = inject(HttpClient);
  tiempoUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Guarrom%C3%A1n&appid=36716e91288f48d1fb0d996c17c7ce73&units=metric&lang=es';

  constructor() { }

  getTiempo() {
    return this.http.get<any>(`${this.tiempoUrl}`).pipe(
      map(resp => {
          return resp; // Información del tiempo
      })
    );
  }

}
