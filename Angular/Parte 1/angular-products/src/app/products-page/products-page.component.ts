import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'products-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  title = "Mi lista de productos";

  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2019-10-03',
    price: 80,
    imageUrl: '/ssd.webp',
    rating: 5
  }, {
    id: 2,
    description: 'LGA1212 Motherboard',
    available: '2020-10-03',
    price: 98,
    imageUrl: '/motherboard.webp',
    rating: 4
  }];

  showImage = true;

  newProduct = {
    id: 0,
    description: '',
    available: '',
    price: 0,
    imageUrl: '',
    rating: 0
  };

  fileName = '';

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct(productForm: NgForm) {
    console.log(this.newProduct);
    this.newProduct.id = Math.max(...this.products.map(p => p.id!)) + 1;
    this.products.push({...this.newProduct});
    this.fileName = '';
    productForm.resetForm();
  }
}
