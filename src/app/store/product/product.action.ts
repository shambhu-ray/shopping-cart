import { createAction, props } from "@ngrx/store";
import { Product } from "../../shared/models/product.model";
import { ProductActionTypes } from "./product.action.types";


export const loadProducts = createAction(`[ProductDate] ${ProductActionTypes.LOAD_PRODUCT}`);
export const loadProductSuccess = createAction(`[ProductDate] ${ProductActionTypes.LOAD_PRODUCT_SUCCESS}`, props<{ products: Product[] }>());
export const loadProductFailure = createAction(`[ProductDate] ${ProductActionTypes.LOAD_PRODUCT_FAILURE}`, props<{ error: string }>());




