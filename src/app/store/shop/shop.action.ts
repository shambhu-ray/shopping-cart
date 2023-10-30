import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { ShopActionTypes } from './shop.action.types';


// cart actions
export const removeProductFromCart = createAction(`[CartProduct] ${ShopActionTypes.REMOVE_PRODUCT_FROM_CART}`, props<{ payload: number }>());
export const incrementCartQuantity = createAction(`[CartProduct] ${ShopActionTypes.INCREMENT_CART_ITEM_QUANTITY}`, props<{ payload: number }>());
export const decrementCartQuantity = createAction(`[CartProduct] ${ShopActionTypes.DECREMENT_CART_ITEM_QUANTITY}`, props<{ payload: number }>());
export const checkoutCartItem = createAction(`[CartProduct] ${ShopActionTypes.CHECKOUT_CART_ITEM}`, props<{ payload: Product[] }>());
export const addProductToCart = createAction(`[CartProduct] ${ShopActionTypes.ADD_PRODUCT_TO_CART}`, props<{ payload: Product }>());

// Load products from api
export const loadProducts = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT}`);
export const loadProductSuccess = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT_SUCCESS}`, props<{ products: Product[] }>());
export const loadProductFailure = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT_FAILURE}`, props<{ error: string }>());
