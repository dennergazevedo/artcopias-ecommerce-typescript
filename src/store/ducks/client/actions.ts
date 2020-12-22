/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { ClientTypes, IClient, IClientRegister } from './types';

export const clientRegisterRequest = (data: IClientRegister) =>
  action(ClientTypes.CLIENT_REGISTER_REQUEST, { data });

export const clientRegisterSuccess = (data: IClient) =>
  action(ClientTypes.CLIENT_REGISTER_SUCCESS, { data });

export const clientRegisterFailure = () =>
  action(ClientTypes.CLIENT_REGISTER_FAILURE);
