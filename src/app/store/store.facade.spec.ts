import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Product } from '../shared/models/product.model';
import { BrandFilterActions } from './brand-filter/brand-filter.action';
import { ProductLoadApiActions } from './shop/shop.action';
import { StoreFacade } from './store.facade';
import { AppState } from './store.state';

describe('StoreFacade', () => {
    let service: StoreFacade;
    let store: MockStore;
    const initialState: AppState = {
        shop: {
            products: [],
            cart: [],
        },
        brandFilter: '',
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StoreFacade,
                provideMockStore({ initialState }),
            ],
        });

        service = TestBed.inject(StoreFacade);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should dispatch ProductLoadApiActions.loadProducts', () => {
        const action = ProductLoadApiActions.loadProducts();
        spyOn(store, 'dispatch');
        service.loadProducts();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch BrandFilterActions.clearBrandFilter', () => {
        const action = BrandFilterActions.clearBrandFilter();
        spyOn(store, 'dispatch');
        service.clearBrandFilter();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should select products from the store', () => {
        const products: Product[] = [{ id: 1 }, { id: 2 }, { id: 3 }] as Product[];
        store.setState({ shop: { ...initialState.shop, products } });

        let selectedProducts: Product[] = [];
        service.products$.subscribe((products) => {
            selectedProducts = products;
        });

        expect(selectedProducts).toEqual(products);
    });
});
