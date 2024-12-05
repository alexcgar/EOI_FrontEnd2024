import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
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

  addProduct(productForm: NgForm) {
    this.add.emit({...this.newProduct});
    productForm.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }
}
