import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CompetitionsResponse, MatchesResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  urlBase = 'https://api.football-data.org/v4';
  http = inject(HttpClient);

  getCompeticiones() {
    return this.http.get<CompetitionsResponse>(`${this.urlBase}/competitions`, {
      headers: { 'X-Auth-Token': '36715d769bd94caa925bf31674cf294e' },
    });
  }

  getPartidos(idCompeticion: number) {
    return this.http.get<MatchesResponse>(`${this.urlBase}/matches`, {
      params: {
        competitions: idCompeticion,
        dateFrom: '2024-12-13',
        dateTo: '2024-12-16'
      },
      headers: { 'X-Auth-Token': '36715d769bd94caa925bf31674cf294e' },
    });
  }
}
