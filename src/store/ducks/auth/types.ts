/* eslint-disable no-shadow */

/** Action types */
export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_REQUEST',
  AUTH_SUCCESS = '@auth/AUTH_SUCCESS',
  AUTH_FAILURE = '@auth/AUTH_FAILURE',
  AUTH_LOGOUT = '@auth/AUTH_LOGOUT',
}

/** Data types */
export interface IAuth {
  email: string;
  token: string;
  name: string;
}

/** Session types */
export interface IUser {
  id: number;
  name: string;
  phone: string;
  document: string;
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISession {
  token: string;
  user: IUser;
}

/** State types */
export interface IAuthState {
  readonly data: IAuth;
  readonly loading: boolean;
  readonly signed: boolean;
  readonly error: boolean;
}
