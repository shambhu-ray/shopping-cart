import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { brands } from '../../services/data/brands';
import { Product } from '../../shared/models/product.model';
import { AppState } from '../../store/app.state';
import { addBrandToFilter, removeBrandFromFilter } from '../../store/brand-filter/brand-filter.action';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {

  brands = brands;
  brandItemsCount: any = {};

  constructor(private _store: Store<AppState>) {
  }
  ngOnInit() {
    this.loadBrands();
  }

  /**
  * Loads the brands by subscribing to the 'shop' store and calculating the count of products for each brand.
  * 
  */
  loadBrands(): void {
    this._store.select('shop').subscribe(shop => {
      const counts: any = {};
      shop.products.forEach((p: Product) => {
        counts[p.brand] = counts[p.brand] + 1 || 1;
      });
      this.brandItemsCount = counts;
    });
  }

  /**
 * Handles the change event of the select box.
 *
 * @param {MatSelectionListChange} $event - The event object containing the selection change information.
 * @return {void} This function does not return anything.
 */
  onChangeSelectBox($event: MatSelectionListChange): void {
    const name = $event.options[0].value;
    const selected = $event.options[0].selected;

    if (selected) {
      this._store.dispatch(addBrandToFilter({ payload: name }));
    } else {
      this._store.dispatch(removeBrandFromFilter({ payload: name }));
    }
  }
}
