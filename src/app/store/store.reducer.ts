import { ActionReducerMap } from '@ngrx/store';

import * as fromBrandFilter from './brand-filter/brand-filter.reducer';
import * as fromShop from './shop/shop.reducer';
import { AppState } from './store.state';

export const reducers: ActionReducerMap<AppState> = {
  shop: fromShop.shoppingListReducer,
  brandFilter: fromBrandFilter.brandFilterReducer
};
