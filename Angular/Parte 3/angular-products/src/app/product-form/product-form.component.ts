import { Component, DestroyRef, inject, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  newProduct: Product = {
    description: '',
    available: '',
    price: 0,
    imageUrl: '',
    rating: 1,
  };

  fileName = '';
  sending = signal(false);

  add = output<Product>();

  productsService = inject(ProductsService);
  destroyRef = inject(DestroyRef);

  addProduct(productForm: NgForm) {
    this.sending.set(true);
    this.productsService
      .addProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (product) => {
          this.add.emit(product);
          productForm.resetForm();
          this.newProduct.imageUrl = '';
        },
        error: (error) => alert('Ha ocurrido un error añadiendo producto'),
      }).add(() => this.sending.set(false));
  }
}
