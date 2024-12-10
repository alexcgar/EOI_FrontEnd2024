import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import confetti from 'canvas-confetti';
import { Option, Question } from './interfaces/question';
import { TrivialService } from './services/trivial.service';


@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  question?: Question;
  options: Option[] = [];
  selected = -1;
  trivialService = inject(TrivialService);

  constructor() {
    this.cargaPregunta();
  }

  cargaPregunta() {
    this.trivialService.getQuestion().subscribe(resp => {
      this.question = resp.results[0];
      this.options = this.question.incorrect_answers.map(a => ({ text: a, correct: false }));
      this.options.push({text: this.question.correct_answer, correct: true});
      this.options.sort(() => Math.random() - 0.5);
      console.log(this.options);
    });
  }

  siguiente() {
    this.selected = -1;
    this.cargaPregunta();
  }

  select(index: number) {
    this.selected = index;
    if(this.options[index].correct) {
      const duration = 3000; // in milliseconds

      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });

      // Clear confetti after a certain duration
      setTimeout(() => confetti.reset(), duration);
    }
  }
}
