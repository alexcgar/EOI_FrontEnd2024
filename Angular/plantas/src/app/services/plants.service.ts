import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlantsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  urlBase = 'https://perenual.com/api';
  http = inject(HttpClient);

  getSpecies() {
    return this.http.get<PlantsResponse>(`${this.urlBase}/species-list`, {
      params: { key: 'sk-WrGN67588158f3b4b7957' },
    });
  }
}
