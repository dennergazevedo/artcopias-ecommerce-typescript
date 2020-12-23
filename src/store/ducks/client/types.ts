/* eslint-disable no-shadow */
/** Action types */
export enum ClientTypes {
  CLIENT_REGISTER_REQUEST = '@client/CLIENT_REGISTER_REQUEST',
  CLIENT_REGISTER_SUCCESS = '@client/CLIENT_REGISTER_SUCCESS',
  CLIENT_REGISTER_FAILURE = '@client/CLIENT_REGISTER_FAILURE',
  CLIENT_FORGOTPASS = '@client/CLIENT_FORGOTPASS',
  CLIENT_RESETPASS = '@client/CLIENT_RESETPASS',
  CLIENT_PARTNER = '@client/CLIENT_PARTNER',
}

/** Data types */
export interface IClient {
  email: string;
  password: string;
}

/** State types */
export interface IClientState {
  readonly loading: boolean;
  readonly error: boolean;
}

/** Register */

export interface IClientRegister {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

export interface IRegister {
  data: IClientRegister;
  type: string;
}
