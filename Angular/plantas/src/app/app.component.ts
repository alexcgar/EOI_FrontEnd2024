import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantsService } from './services/plants.service';
import { Plant } from './interfaces/plant';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  plants: Plant[] = [];
  page = 1;

  plantsService = inject(PlantsService);

  constructor() {
    this.cargarPlantas();
  }

  cargarPlantas() {
    this.plantsService
    .getSpecies(this.page)
    .subscribe((resp) => (this.plants = this.plants.concat(resp.data)));
  }

  cargarMas() {
    this.page++;
    this.cargarPlantas();
  }
}
