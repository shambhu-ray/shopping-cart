import { Product } from '../../shared/models/product.model';

import { createReducer, on } from '@ngrx/store';

import { State } from '../store.state';
import { ProductLoadApiActions, ShopActions } from './shop.action';


export const initialState: State = {
  products: [],
  cart: []
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ProductLoadApiActions.loadProductSuccess, (state: State, { products }) => {
    try {
      return { ...state, products: [...products] };
    } catch (error) {
      console.error(error);
      return state;
    }
  }),
  on(ShopActions.addProductToCart, (state: State, { payload }) => {
    try {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex((item: Product) => item.id === payload.id);

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    } catch (error) {
      console.error(error);
      return state;
    }

  }),
  on(ShopActions.removeProductFromCart, (state: State, { payload }) => {
    try {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      return { ...state, cart: updatedCart };
    } catch (error) {
      console.error(error);
      return state;
    }

  }),
  on(ShopActions.incrementCartQuantity, (state: State, { payload }) => {
    try {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === payload
      );

      if (updatedCart[updatedItemIndex].quantity > 9) {
        return state;
      }

      const incrementedItem = { ...updatedCart[updatedItemIndex] };
      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cart: updatedCart };
    } catch (error) {
      console.error(error);
      return state;
    }

  }),
  on(ShopActions.decrementCartQuantity, (state: State, { payload }) => {
    try {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.id === payload
      );

      if (updatedCart[updatedItemIndex].quantity < 2) {
        return state;
      }

      const decrementedItem = { ...updatedCart[updatedItemIndex] };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };
    } catch (error) {
      console.error(error);
      return state;
    }

  }),
  on(ShopActions.checkoutCartItem, (state: State, { payload }) => {
    try {
      let updatedCart = [...state.cart];
      updatedCart = updatedCart.filter(product => !(payload.map((product: Product) => product.id)).includes(product.id));

      return { ...state, cart: updatedCart };
    } catch (error) {
      console.error(error);
      return state;
    }
  })
);
