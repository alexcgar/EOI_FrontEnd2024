import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Product[] {
    return [
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
    ];
  }
}
