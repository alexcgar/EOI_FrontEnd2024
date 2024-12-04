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

@Component({
  selector: 'products-page',
  imports: [
    FormsModule,
    NgClass,
    ProductItemComponent,
    ProductFormComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  title = 'Mi lista de productos';

  products = signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2019-10-03',
      price: 80,
      imageUrl: '/ssd.webp',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1212 Motherboard',
      available: '2020-10-03',
      price: 98,
      imageUrl: '/motherboard.webp',
      rating: 4,
    },
    {
      id: 3,
      description: 'PC 1TB SSD 16GB RAM',
      available: '2023-23-04',
      price: 760,
      imageUrl: '/pc-ssd.webp',
      rating: 3,
    },
  ]);

  search = signal('');

  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.description.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  showImage = signal(true);


  toggleImage() {
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    this.products.update(products => [...products, product]);
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter((p) => p !== product));
  }
}
