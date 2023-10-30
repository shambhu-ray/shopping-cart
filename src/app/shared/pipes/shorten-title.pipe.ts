import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  /**
 * Transforms the given title by splitting it at the first occurrence of ' (' and returning the part before it.
 *
 * @param {string} title - The title to be transformed.
 * @return {string} The transformed title.
 */
  transform(title: string): string {
    return title.split(' (')[0];
  }

}
