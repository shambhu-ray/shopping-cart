import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { AppState } from '../../store/app.state';
import { checkoutCartItem, decrementCartQuantity, incrementCartQuantity, removeProductFromCart } from '../../store/shop/shop.action';

@Injectable()
export class CartService {

  constructor(private _store: Store<AppState>, public _dialog: MatDialog) { }


  /**
 * Retrieves the cart as an observable of Product array.
 *
 * @return {Observable<Product[]>} The observable representing the cart.
 */
  getCart(): Observable<Product[]> {
    return this._store.select('shop').pipe(map((state) => state.cart));
  }

  /**
 * Retrieves the buy cart for a specific product ID.
 *
 * @param {number} productId - The ID of the product to retrieve the buy cart for.
 * @return {Observable<Product[]>} An Observable that emits an array of products that match the given product ID.
 */
  getBuyCart(productId: number): Observable<Product[]> {
    return this._store.select('shop')
      .pipe(
        map((state) => state.cart.filter(product => product.id === productId))
      );
  }

  /**
 * Increments the quantity of a cart item.
 *
 * @param {number} id - The ID of the cart item to increment.
 * @return {void} This function does not return a value.
 */
  onIncrementCartItem(id: number): void {
    this._store.dispatch(incrementCartQuantity({ payload: id }));
  }

  /**
 * Decrements the quantity of a cart item.
 *
 * @param {number} id - The ID of the item to decrement.
 * @return {void} This function does not return anything.
 */
  onDecrementCartItem(id: number): void {
    this._store.dispatch(decrementCartQuantity({ payload: id }));
  }

  /**
 * Removes a cart item from the store.
 *
 * @param {number} id - The ID of the item to be removed.
 * @return {void} This function does not return anything.
 */
  onRemoveCartItem(id: number): void {
    this._store.dispatch(removeProductFromCart({ payload: id }));
  }

  onCheckout(products: Product[]): void {
    this._store.dispatch(checkoutCartItem({ payload: products }));
  }

  /**
 * Calculate the total price of the products in the cart.
 *
 * @param {Product[]} cartProducts - An array of Product objects representing the products in the cart.
 * @return {number} The total price of the products in the cart.
 */
  calculateTotalPrice(cartProducts: Product[]): number {
    return cartProducts.reduce((count, curItem) => count + curItem.quantity * curItem.price, 0);
  }

  /**
 * Opens a dialog with the given template reference.
 *
 * @param {TemplateRef<any>} templateRef - The template reference for the dialog.
 * @return {void} This function does not return a value.
 */
  openDialog(templateRef: TemplateRef<any>): void {
    this._dialog.open(templateRef, {
      width: '400px',
      height: '150px'
    });
  }
}
