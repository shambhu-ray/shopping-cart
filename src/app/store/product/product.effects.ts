import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Product } from "src/app/shared/models/product.model";
import { DataService } from "../../services/data.service";
import { ProductLoadApiActions } from "../shop/shop.action";

@Injectable()
export class ProductEffects {

  constructor(private _actions: Actions, private _dataService: DataService) { }

  loadProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(ProductLoadApiActions.loadProducts),
      mergeMap(() =>
        this._dataService.getProducts().pipe(
          map((products: Product[]) => ProductLoadApiActions.loadProductSuccess({ products: products })),
          catchError((error) => of(ProductLoadApiActions.loadProductFailure({ error: error })))
        )
      )
    )
  );
}
