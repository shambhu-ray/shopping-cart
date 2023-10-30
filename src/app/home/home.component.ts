import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../shared/models/product.model';
import { BrandPipe } from '../shared/pipes/brand.pipe';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private _store: Store<AppState>, private _capitalize: BrandPipe) { }

  ngOnInit(): void {
    this._store.select((state: AppState) => state).subscribe((state) => {
      const brands = state.brandFilter;

      const filterByBrandArr = this._capitalize.transform(state.shop.products, brands);

      this.products = filterByBrandArr;
    });
  }

  /**
 * Returns the id of the given Product.
 *
 * @param {number} index - The index of the item in the array.
 * @param {Product} item - The Product object.
 * @return {any} The id of the Product.
 */
  trackById(index: number, item: Product) {
    return item.id;
  };
}
