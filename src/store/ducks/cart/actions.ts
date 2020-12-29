/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { CartTypes, ICart } from './types';

export const cartAdd = (data: ICart) => action(CartTypes.CART_ADD, { data });

export const cartAddSuccess = (data: ICart) =>
  action(CartTypes.CART_ADD_SUCCESS, { data });

export const cartRemove = (data: ICart) =>
  action(CartTypes.CART_REMOVE, { data });

export const cartClean = () => action(CartTypes.CART_CLEAN);

export const cartFinish = (data: ICart) =>
  action(CartTypes.CART_FINISH, { data });
