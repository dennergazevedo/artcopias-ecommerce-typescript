/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { ClientTypes, IClient, IClientRegister } from './types';

/** Register */
export const clientRegisterRequest = (data: IClientRegister) =>
  action(ClientTypes.CLIENT_REGISTER_REQUEST, { data });

export const clientRegisterSuccess = (data: IClient) =>
  action(ClientTypes.CLIENT_REGISTER_SUCCESS, { data });

export const clientRegisterFailure = () =>
  action(ClientTypes.CLIENT_REGISTER_FAILURE);

/** ForgotPass */
interface IForgotPass {
  email: string;
}
export const clientForgotPassRequest = (data: IForgotPass) =>
  action(ClientTypes.CLIENT_FORGOTPASS, { data });

/** ResetPass */
interface IResetPass {
  email: string;
  token: string;
  password: string;
}
export const clientResetPassRequest = (data: IResetPass) =>
  action(ClientTypes.CLIENT_FORGOTPASS, { data });

/** Be a Partner */
interface IPartner {
  name: string;
  email: string;
  phone: string;
  document: string;
  city: string;
  message: string;
}
export const clientPartnerRequest = (data: IPartner) =>
  action(ClientTypes.CLIENT_PARTNER, { data });
