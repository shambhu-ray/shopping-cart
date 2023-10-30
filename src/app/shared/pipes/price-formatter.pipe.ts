import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  /**
 * Transforms a number into a string representation of a price.
 *
 * @param {number} price - The number to be transformed.
 * @return {string} The transformed price as a string.
 */
  transform(price: number): string {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
