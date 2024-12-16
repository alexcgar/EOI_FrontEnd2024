import { Component, inject, signal } from '@angular/core';
import { TiempoService } from '../services/tiempo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pagina-tiempo',
  imports: [],
  templateUrl: './pagina-tiempo.component.html',
  styleUrl: './pagina-tiempo.component.css'
})
export class PaginaTiempoComponent {
  tiempoService = inject(TiempoService);
  tiempo = signal<any>({});

  constructor() {
    this.obtenerTiempo();
  }

  obtenerTiempo() {
    this.tiempoService
    .getTiempo()
    .subscribe({
      next: (tiempo) => {
        console.log(tiempo);
        this.tiempo.set(tiempo)
      },
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo pokemon: `, error),
    });
  }
}
