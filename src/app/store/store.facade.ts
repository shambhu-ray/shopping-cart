import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../shared/models/product.model";
import { BrandFilterActions } from "./brand-filter/brand-filter.action";
import { ProductLoadApiActions, ShopActions } from "./shop/shop.action";
import { AppState, State } from "./store.state";

@Injectable()
export class StoreFacade {

    readonly state$: Observable<AppState> = this._store.select((state: AppState) => state);
    readonly shop$: Observable<State> = this._store.select((state: AppState) => state.shop);
    readonly products$: Observable<Product[]> = this._store.select((state: AppState) => state.shop.products);
    readonly cart$: Observable<Product[]> = this._store.select((state: AppState) => state.shop.cart);
    readonly cartLength$: Observable<number> = this._store.select((state: AppState) => state.shop.cart.length);
    readonly brandFilter$: Observable<string> = this._store.select((state: AppState) => state.brandFilter);


    constructor(private _store: Store<AppState>) { }

    loadProducts(): void {
        this._store.dispatch(ProductLoadApiActions.loadProducts());
    }

    addProductToCart(product: Product): void {
        this._store.dispatch(ShopActions.addProductToCart({ payload: product }));
    }

    incrementCartQuantity(id: number): void {
        this._store.dispatch(ShopActions.incrementCartQuantity({ payload: id }));
    }

    decrementCartQuantity(id: number): void {
        this._store.dispatch(ShopActions.decrementCartQuantity({ payload: id }));
    }

    removeProductFromCart(id: number): void {
        this._store.dispatch(ShopActions.removeProductFromCart({ payload: id }));
    }

    checkoutCartProducts(products: Product[]): void {
        this._store.dispatch(ShopActions.checkoutCartItem({ payload: products }));
    }

    clearBrandFilter(): void {
        this._store.dispatch(BrandFilterActions.clearBrandFilter());
    }

    addBrandToFilter(name: string): void {
        this._store.dispatch(BrandFilterActions.addBrandToFilter({ payload: name }));
    }

    removeBrandFromFilter(name: string): void {
        this._store.dispatch(BrandFilterActions.removeBrandFromFilter({ payload: name }));
    }


}
