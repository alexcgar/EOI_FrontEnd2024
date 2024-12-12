import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  numberAttribute,
  OnInit,
  signal,
} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from '../interfaces/product';
import { Title } from '@angular/platform-browser';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { DatePipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'product-detail',
  imports: [IntlCurrencyPipe, DatePipe, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  id = input.required({ transform: numberAttribute });
  productsService = inject(ProductsService);
  title = inject(Title);
  destroyRef = inject(DestroyRef);
  changeDetector = inject(ChangeDetectorRef);
  router = inject(Router);

  product = signal<Product | null>(null);

  constructor() {
    effect(() => {
      this.productsService
      .getProduct(this.id())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((product) => {
        this.product.set(product);
        this.title.setTitle(
          this.product()!.description + ' | Angular Products'
        );
      });
    });
  }

  changeRating(rating: number) {
    const oldRating = this.product()!.rating; // Guardamos puntuación antigua
    this.product()!.rating = rating;
    this.productsService
      .changeRating(this.product()!.id!, rating)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: (error) => {
          this.product()!.rating = oldRating;
          this.changeDetector.markForCheck();
          // Darle feedback al usuario del error al cambiar puntuación
        },
      });
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
