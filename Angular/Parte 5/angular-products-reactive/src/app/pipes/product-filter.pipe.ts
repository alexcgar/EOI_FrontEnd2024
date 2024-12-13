import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    return products.filter((p) =>
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }
}
