import { Http } from "./http.js";

export class ProductService {
  #http = new Http();
  #urlProductos = "https://api.fullstackpro.es/products-example/products";

  async getProducts() {
    const resp = await this.#http.get(this.#urlProductos);
    return resp.products;
  }

  async insertProduct(product) {
    const resp = await this.#http.post(this.#urlProductos, product);
    return resp.product;
  }

  async deleteProduct(id) {
    await this.#http.delete(`${this.#urlProductos}/${id}`);
  }
}
