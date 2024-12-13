import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '../interfaces/product';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  NgClass,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsService } from '../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'products-page',
  imports: [FormsModule, NgClass, ProductItemComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  title = 'Mi lista de productos';
  productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  search = signal('');

  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.description.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  showImage = signal(true);

  constructor() {
    this.productsService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (products) => this.products.set(products),
        error: (error: HttpErrorResponse) => console.error(`Error obteniendo productos: `, error),
      });
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
