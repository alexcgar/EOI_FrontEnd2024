import { Component, inject, signal } from '@angular/core';
import { TiempoService } from '../services/tiempo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'pagina-tiempo',
  imports: [FormsModule],
  templateUrl: './pagina-tiempo.component.html',
  styleUrl: './pagina-tiempo.component.css'
})
export class PaginaTiempoComponent {
  tiempoService = inject(TiempoService);
  tiempo = signal<any>({});
  ubicacion = "";

  constructor() {
    this.obtenerTiempo("Guarromán");
  }

  buscar(productForm: NgForm) {
    this.obtenerTiempo(this.ubicacion);
    productForm.resetForm();
  }

  obtenerTiempo(ubicacion:string) {
    this.tiempoService
    .getTiempo(ubicacion)
    .subscribe({
      next: (tiempo) => {
        console.log(tiempo);
        this.tiempo.set(tiempo)
      },
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo pokemon: `, error),
    });
  }
}
