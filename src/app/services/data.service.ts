import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly BASE_URL = '/assets/';

  constructor(private _httpClient: HttpClient) { }

  /**
 * Retrieves the products by making an HTTP GET request to the specified URL.
 *
 * @return {Observable<Product[]>} An Observable that emits an array of Product objects.
 */
  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.BASE_URL}product-data.json`);
  }
}
