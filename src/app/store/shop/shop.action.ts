import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import { ShopActionTypes } from './shop.action.types';


// cart actions
const removeProductFromCart = createAction(`[CartProduct] ${ShopActionTypes.REMOVE_PRODUCT_FROM_CART}`, props<{ payload: number }>());
const incrementCartQuantity = createAction(`[CartProduct] ${ShopActionTypes.INCREMENT_CART_ITEM_QUANTITY}`, props<{ payload: number }>());
const decrementCartQuantity = createAction(`[CartProduct] ${ShopActionTypes.DECREMENT_CART_ITEM_QUANTITY}`, props<{ payload: number }>());
const checkoutCartItem = createAction(`[CartProduct] ${ShopActionTypes.CHECKOUT_CART_ITEM}`, props<{ payload: Product[] }>());
const addProductToCart = createAction(`[CartProduct] ${ShopActionTypes.ADD_PRODUCT_TO_CART}`, props<{ payload: Product }>());

// Load products from api
const loadProducts = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT}`);
const loadProductSuccess = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT_SUCCESS}`, props<{ products: Product[] }>());
const loadProductFailure = createAction(`[ProductAPI] ${ShopActionTypes.LOAD_PRODUCT_FAILURE}`, props<{ error: string }>());


export const ShopActions = {
    removeProductFromCart,
    incrementCartQuantity,
    decrementCartQuantity,
    checkoutCartItem,
    addProductToCart
}

export const ProductLoadApiActions = {
    loadProducts,
    loadProductSuccess,
    loadProductFailure
}