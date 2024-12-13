import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { minDateValidator } from '../validators/min-date.validator';

@Component({
  selector: 'product-form',
  imports: [ReactiveFormsModule, EncodeBase64Directive, DatePipe],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  #fb = inject(NonNullableFormBuilder);

  hoy = new Date().toISOString().split("T")[0];

  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    available: ['', [Validators.required, minDateValidator(this.hoy)]],
    imageUrl: ['', Validators.required],
  });

  imageBase64 = '';

  sending = signal(false);

  productsService = inject(ProductsService);
  destroyRef = inject(DestroyRef);
  router = inject(Router);

  addProduct() {
    this.sending.set(true);
    const product: Product = {
      ...this.productForm.getRawValue(),
      rating: 1,
      imageUrl: this.imageBase64,
    };
    this.productsService
      .addProduct(product)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (product) => this.router.navigate(['/products']),
        error: (error) => alert('Ha ocurrido un error añadiendo producto'),
      })
      .add(() => this.sending.set(false));
  }
}
