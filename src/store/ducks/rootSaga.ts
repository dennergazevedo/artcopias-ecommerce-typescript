/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { ClientTypes } from './client/types';

import { authRequest, signOut } from './auth/sagas';
import { clientRegisterRequest } from './client/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest<any>(AuthTypes.AUTH_REQUEST, authRequest),
    takeLatest(AuthTypes.AUTH_LOGOUT, signOut),
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_REQUEST, clientRegisterRequest),
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_SUCCESS, authRequest),
  ]);
}
