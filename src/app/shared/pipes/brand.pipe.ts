import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  /**
 * Filters an array of products based on the brand.
 *
 * @param {Product[]} products - The array of products to filter.
 * @param {string} brand - The brand to filter by.
 * @return {Product[]} - The filtered array of products.
 */
  transform(products: Product[], brand: string): Product[] {
    if (!brand) return products;

    return products.filter(product => brand.includes(product.brand));
  }

}
