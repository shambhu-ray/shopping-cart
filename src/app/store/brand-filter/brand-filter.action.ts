
import { createAction, props } from '@ngrx/store';
import { BrandFilterActionTypes } from './brand-filter.action.types';

export const addBrandToFilter = createAction(`[Brand] ${BrandFilterActionTypes.ADD_BRAND_TO_FILTER}`, props<{ payload: string }>());
export const removeBrandFromFilter = createAction(`[Brand] ${BrandFilterActionTypes.REMOVE_BRAND_FROM_FILTER}`, props<{ payload: string }>());
export const clearBrandFilter = createAction(`[Brand] ${BrandFilterActionTypes.CLEAR_BRAND_FILTER}`);
