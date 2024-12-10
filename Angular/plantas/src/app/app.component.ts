import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantsService } from './services/plants.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  plants = [];

  plantsService = inject(PlantsService);

  constructor() {
    this.plantsService.getSpecies().subscribe(res);
  }
}
