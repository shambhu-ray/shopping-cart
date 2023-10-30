import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { addProductToCart } from 'src/app/store/shop/shop.action';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentImage: string = '';

  id: number = 0;
  product: Product = <Product>{};

  constructor(private _route: ActivatedRoute, private _store: Store<AppState>, private _router: Router) {
  }

  ngOnInit() {
    this._route.params.pipe(
      map(params => +params['id']),
      switchMap(productId =>
        this._store.pipe(
          select('shop'),
          filter(state => state.products.length > 0),
          map(state => state.products.find(product => product.id === productId)),
          filter(product => !!product)
        )
      )
    ).subscribe((product: Product) => {
      this.product = product;
      this.currentImage = this.product.images[0];
    });
  }

  /**
 * Updates the current image based on the provided index.
 *
 * @param {number} n - The index of the image to be set as the current image.
 * @return {void} This function does not return a value.
 */
  onChangeImage(n: number): void {
    this.currentImage = this.product.images[n];
  }

  /**
 * Add the product to the cart.
 *
 * @return {void} No return value.
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
