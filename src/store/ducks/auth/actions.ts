/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { AuthTypes, IAuth, ILogin } from './types';

export const authRequest = (data: ILogin) =>
  action(AuthTypes.AUTH_REQUEST, { data });

export const authSuccess = (data: IAuth) =>
  action(AuthTypes.AUTH_SUCCESS, { data });

export const authFailure = () => action(AuthTypes.AUTH_FAILURE);

export const authLogout = () => action(AuthTypes.AUTH_LOGOUT);
