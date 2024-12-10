import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootballService } from './services/football.service';
import { Competition } from './interfaces/competition';
import { Match } from './interfaces/match';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  footService = inject(FootballService);
  competiciones: Competition[] = [];
  partidos: Match[] = [];

  constructor() {
    this.footService
      .getCompeticiones()
      .subscribe((resp) => (this.competiciones = resp.competitions));
  }

  getPartidos(id: number) {
    this.footService
      .getPartidos(id)
      .subscribe((resp) => (this.partidos = resp.matches));
  }
}
