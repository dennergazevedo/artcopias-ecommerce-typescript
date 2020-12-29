/* eslint-disable no-shadow */

/** Action types */
export enum CartTypes {
  CART_ADD = '@cart/CART_ADD',
  CART_ADD_SUCCESS = '@cart/CART_ADD_SUCCESS',
  CART_REMOVE = '@cart/CART_REMOVE',
  CART_FINISH = '@cart/CART_FINISH',
  CART_CLEAN = '@cart/CART_CLEAN',
}

/** Data types */
export interface ICart {
  id: number;
  width: number;
  height: number;
  quantity: number;
  art: boolean;
  obs: string;
  finishing: string;
  signed: boolean;
  product_id: number;
  value: number;
}

/** State types */
export interface ICartState {
  readonly cart: Array<number>;
}
