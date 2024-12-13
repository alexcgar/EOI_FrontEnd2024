import { DatePipe, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  Input,
  output,
  signal,
} from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, IntlCurrencyPipe, StarRatingComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  showImage = input(true);
  delete = output<void>();

  productsService = inject(ProductsService);
  changeDetector = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);

  deleteProduct() {
    this.productsService
      .deleteProduct(this.product().id!)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.delete.emit());
  }

  changeRating(rating: number) {
    const oldRating = this.product().rating; // Guardamos puntuación antigua
    this.product().rating = rating;
    this.productsService
      .changeRating(this.product().id!, rating)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: (error) => {
          this.product().rating = oldRating;
          this.changeDetector.markForCheck();
          // Darle feedback al usuario del error al cambiar puntuación
        },
      });
  }
}
