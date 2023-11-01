import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from 'src/app/store/store.facade';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input({ required: true }) product: Product = <Product>{};

  constructor(public storeService: StoreFacade, private _router: Router) {
  }


  onBuyNow(product: Product): void {
    this.storeService.addProductToCart(product);
    this._router.navigate(['/cart', product.id]);
  }
}
