import { NgClass } from '@angular/common';
import { Component, input, linkedSignal, model, output } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  rating = model.required<number>();
  auxRating = linkedSignal(() => this.rating());
}
