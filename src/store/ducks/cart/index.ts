/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { ICartState, CartTypes } from './types';

const INITIAL_STATE: ICartState = {
  cart: [],
};

const reducer: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  const array = [];
  switch (action.type) {
    case CartTypes.CART_CLEAN:
      return { cart: [] };
    case CartTypes.CART_ADD_SUCCESS:
      return { cart: [...state.cart, action.payload.data] };
    case CartTypes.CART_REMOVE:
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i] !== action.data.id) {
          array.push(state.cart[i]);
        }
      }
      return {
        cart: array,
      };
    default:
      return state;
  }
};

export default reducer;
