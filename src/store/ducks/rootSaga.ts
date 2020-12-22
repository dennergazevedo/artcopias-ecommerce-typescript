/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';

import { authRequest, signOut } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest<any>(AuthTypes.AUTH_REQUEST, authRequest),
    takeLatest(AuthTypes.AUTH_LOGOUT, signOut),
  ]);
}
