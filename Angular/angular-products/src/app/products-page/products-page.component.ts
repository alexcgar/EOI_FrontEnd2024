import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  imports: [],
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
    imageUrl: '/ssd.jpg',
    rating: 5
  }, {
    id: 2,
    description: 'LGA1212 Motherboard',
    available: '2020-10-03',
    price: 98,
    imageUrl: '/motherboard.jpg',
    rating: 4
  }];
}
