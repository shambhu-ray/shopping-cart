import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';
import * as fromBrandFilter from './brand-filter/brand-filter.reducer';
import * as fromShop from './shop/shop.reducer';

export const reducers: ActionReducerMap<AppState> = {
  shop: fromShop.shoppingListReducer,
  brandFilter: fromBrandFilter.brandFilterReducer
};
