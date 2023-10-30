import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Product } from '../../shared/models/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('checkoutSuccessDialogTempRef', { static: true }) dialogTempRef: TemplateRef<any>;

  totalPrice: number;
  cartProducts: Product[];

  constructor(public cartService: CartService, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    this._route.params.pipe(
      map(params => +params['id']),
      tap((productId) => {
        if (isNaN(productId)) { this.getCart() }
      }),
      filter(productId => !isNaN(productId)),
      switchMap((productId) => this.cartService.getBuyCart(productId))
    ).subscribe((product: Product[]) => {
      this.cartProducts = product;
      this.totalPrice = this.cartService.calculateTotalPrice(product);
    });
  }

  /**
 * Retrieves the cart items and calculates the total price.
 * 
 * @return {void}
 */
  getCart(): void {
    this.cartService.getCart()
      .pipe(
        switchMap((cartProducts) => {
          this.cartProducts = cartProducts;
          this.totalPrice = this.cartService.calculateTotalPrice(cartProducts);
          return this.cartService.getCart();
        })
      )
      .subscribe();
  }

  /**
 * A function that tracks items by their ID.
 *
 * @param {number} index - The index of the item in the array.
 * @param {Product} item - The item to track.
 * @return {any} The ID of the item.
 */
  trackById(index: number, item: Product) {
    return item.id;
  };

  /**
 * Perform the checkout process.
 *
 * @return {void} This function does not return anything.
 */
  checkout(): void {
    this.cartService.onCheckout(this.cartProducts);
    this.cartService.openDialog(this.dialogTempRef);
  }


}
