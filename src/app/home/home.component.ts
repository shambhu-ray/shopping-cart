import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { BrandPipe } from '../shared/pipes/brand.pipe';
import { StoreFacade } from '../store/store.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _destroyRef = inject(DestroyRef);

  products: Product[] = [];

  constructor(private _storeService: StoreFacade, private _capitalize: BrandPipe) { }

  ngOnInit(): void {
    combineLatest([this._storeService.products$, this._storeService.brandFilter$])
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(([products, brands]) => this.products = this._capitalize.transform(products, brands));
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
