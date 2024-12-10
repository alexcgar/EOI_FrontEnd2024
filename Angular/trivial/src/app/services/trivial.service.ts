import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QuestionResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {
  urlBase = "https://opentdb.com/api.php";
  http = inject(HttpClient);

  getQuestion() {
    return this.http.get<QuestionResponse>(this.urlBase, { params: { amount: 1 }})
  }
}
