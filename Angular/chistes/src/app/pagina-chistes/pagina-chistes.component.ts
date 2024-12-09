import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChistesService } from '../services/chistes.service';

@Component({
  selector: 'pagina-chistes',
  imports: [],
  templateUrl: './pagina-chistes.component.html',
  styleUrl: './pagina-chistes.component.css'
})
export class PaginaChistesComponent {
  chistesService = inject(ChistesService);
  chiste = signal<string|undefined>("");

  constructor() {
    this.obtenerChiste();
  }

  obtenerChiste() {
    this.chistesService
    .getChistes()
    .subscribe({
      next: (chiste) => this.chiste.set(chiste),
      error: (error: HttpErrorResponse) => console.error(`Error obteniendo chiste: `, error),
    });
  }
}
