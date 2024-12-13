import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);
  productsUrl = 'https://api.fullstackpro.es/products-example/products';

  getProducts() {
    return this.http.get<ProductsResponse>(this.productsUrl).pipe(
      map(resp => resp.products)
    );
  }

  getProduct(id: number) {
    return this.http
      .get<SingleProductResponse>(`${this.productsUrl}/${id}`)
      .pipe(map((resp) => resp.product));
  }

  addProduct(product: Product) {
    return this.http.post<SingleProductResponse>(this.productsUrl, product).pipe(
      map(resp => resp.product)
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<void>(`${this.productsUrl}/${id}`);
  }

  changeRating(id: number, rating: number) {
    return this.http.put<void>(`${this.productsUrl}/${id}/rating`, {rating});
  }
}
