import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  newProduct = {
    id: 4,
    description: '',
    available: '',
    price: 0,
    imageUrl: '',
    rating: 0,
  };

  fileName = '';

  add = output<Product>();

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

  addProduct(productForm: NgForm) {
    this.add.emit({...this.newProduct});
    productForm.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }
}
