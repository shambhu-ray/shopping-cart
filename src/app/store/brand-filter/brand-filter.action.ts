
import { createAction, props } from '@ngrx/store';
import { BrandFilterActionTypes } from './brand-filter.action.types';

const addBrandToFilter = createAction(`[Brand] ${BrandFilterActionTypes.ADD_BRAND_TO_FILTER}`, props<{ payload: string }>());
const removeBrandFromFilter = createAction(`[Brand] ${BrandFilterActionTypes.REMOVE_BRAND_FROM_FILTER}`, props<{ payload: string }>());
const clearBrandFilter = createAction(`[Brand] ${BrandFilterActionTypes.CLEAR_BRAND_FILTER}`);


export const BrandFilterActions = {
    addBrandToFilter,
    removeBrandFromFilter,
    clearBrandFilter
}