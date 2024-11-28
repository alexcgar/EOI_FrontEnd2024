import { Product } from "../interfaces/product";
import { ProductsResponse, SingleProductResponse } from "../interfaces/responses";
import { Http } from "./http";

export class ProductService {
  #http = new Http();
  #urlProductos = "https://api.fullstackpro.es/products-example/products";

  async getProducts(): Promise<Product[]> {
    const resp = await this.#http.get<ProductsResponse>(this.#urlProductos);
    return resp.products;
  }

  async insertProduct(product: Product): Promise<Product> {
    const resp = await this.#http.post<SingleProductResponse>(this.#urlProductos, product);
    return resp.product;
  }

  async deleteProduct(id: number): Promise<void> {
    await this.#http.delete<void>(`${this.#urlProductos}/${id}`);
  }
}
