import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
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

@Component({
  selector: 'products-page',
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe,
    NgClass,
    IntlCurrencyPipe
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
  ]);

  search = signal('');

  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.description.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  showImage = signal(true);

  newProduct = {
    id: 0,
    description: '',
    available: '',
    price: 0,
    imageUrl: '',
    rating: 0,
  };

  fileName = '';

  #changeDetector = inject(ChangeDetectorRef);

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck(); // Marca el componente como dirty
    });
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  addProduct(productForm: NgForm) {
    this.newProduct.id = Math.max(...this.products().map((p) => p.id!)) + 1;
    const newProduct = { ...this.newProduct };
    this.products.update(products => [...products, newProduct]);
    this.fileName = '';
    productForm.resetForm();
    this.newProduct.imageUrl = '';
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter((p) => p !== product));
  }
}
