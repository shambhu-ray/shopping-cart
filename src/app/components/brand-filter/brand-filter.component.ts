import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectionListChange } from '@angular/material/list';
import { map } from 'rxjs';
import { StoreFacade } from 'src/app/store/store.facade';
import { brands } from '../../services/data/brands';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {
  private _destroyRef = inject(DestroyRef);
  brands = brands;
  brandItemsCount: any = {};

  constructor(private _storeService: StoreFacade) {
  }
  ngOnInit() {
    this.loadBrands();
  }

  loadBrands(): void {
    this._storeService.products$
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        map((products) => {
          const counts: any = {};
          products.forEach((p: Product) => counts[p.brand] = counts[p.brand] + 1 || 1);
          return counts;
        })
      )
      .subscribe((counts) => {
        this.brandItemsCount = counts;
      });
  }

  /**
 * Handles the change event of the select box.
 *
 * @param {MatSelectionListChange} $event - The event object containing the selection change information.
 * @return {void} This function does not return anything.
 */
  brandSelectBoxChangeEvent($event: MatSelectionListChange): void {
    const name = $event.options[0].value;
    const selected = $event.options[0].selected;

    if (selected) {
      this._storeService.addBrandToFilter(name);
    } else {
      this._storeService.removeBrandFromFilter(name);
    }
  }
}
