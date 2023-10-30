import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProductToCart } from 'src/app/store/shop/shop.action';
import { Product } from '../../shared/models/product.model';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product = <Product>{};

  constructor(private _store: Store<AppState>, private _router: Router) {
  }

  /**
 * A function that adds a product to the cart.
 *
 * @return {void} This function does not return anything.
 */
  onAddProductToCart(): void {
    this._store.dispatch(addProductToCart({ payload: this.product }));
  }

  /**
 * Adds the specified product to the cart and navigates to the cart page.
 *
 * @param {number} productId - The ID of the product to add to the cart.
 * @return {void} This function does not return a value.
 */
  onBuyNow(productId: number): void {
    this._store.dispatch(addProductToCart({ payload: this.product }));
    this._router.navigate(['/cart', productId]);
  }
}
