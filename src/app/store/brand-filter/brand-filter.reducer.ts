import { createReducer, on } from '@ngrx/store';
import * as BrandFilterActions from './brand-filter.action';

export const initialState: string = '';

export const brandFilterReducer = createReducer(
  initialState,
  on(BrandFilterActions.addBrandToFilter, (state: string, { payload }) => {
    if (state.includes(payload)) {
      return state;
    }
    return state += payload;
  }),
  on(BrandFilterActions.removeBrandFromFilter, (state: string, { payload }) => {
    const reg = new RegExp(payload, 'gi');
    return state.replace(reg, '');
  }),
  on(BrandFilterActions.clearBrandFilter, () => {
    return '';
  })
);

