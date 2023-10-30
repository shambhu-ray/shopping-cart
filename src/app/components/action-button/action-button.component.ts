import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: `
  <div class="buttons flex-column">
    <button mat-stroked-button color="primary" (click)="onAddProductToCart()">
      <mat-icon>shopping_cart</mat-icon> Add to Cart
    </button>
    <button mat-stroked-button color="warn" (click)="onBuyNow()">
      <mat-icon>add_shopping_cart</mat-icon> Buy Now
    </button>
  </div>
  `,
  styles: [
    `.buttons {
      display: flex;

      button {
        margin-bottom: 1em;
        font-size: 16px;
      }
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ActionButtonComponent {
  @Output('addProductToCart') addProductToCart = new EventEmitter();
  @Output('buyNow') buyNow = new EventEmitter();

  /**
 * Executes the action of adding a product to the cart.
 *
 * @return {void} This function does not return a value.
 */
  onAddProductToCart(): void {
    this.addProductToCart.emit();
  }

  /**
 * Executes the 'onBuyNow' function.
 *
 * @param {} 
 * @return {} 
 */
  onBuyNow() {
    this.buyNow.emit();
  }
}
