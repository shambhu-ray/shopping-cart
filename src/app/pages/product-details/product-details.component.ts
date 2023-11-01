import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { StoreFacade } from 'src/app/store/store.facade';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private _destroyRef = inject(DestroyRef);
  product$: Observable<Product>;

  constructor(private _route: ActivatedRoute, public storeService: StoreFacade, private _router: Router) {
  }

  ngOnInit() {
    this.product$ = this._route.params.pipe(
      takeUntilDestroyed(this._destroyRef),
      map(params => +params['id']),
      switchMap(productId =>
        this.storeService.products$.pipe(
          filter(products => products.length > 0),
          map(products => products.find(product => product.id === productId)),
          filter(product => !!product)
        )
      )
    );
  }


  onBuyNow(product: Product): void {
    this.storeService.addProductToCart(product);
    this._router.navigate(['/cart', product.id]);
  }
}
