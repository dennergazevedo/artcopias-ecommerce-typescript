/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { ClientTypes } from './client/types';
import { MailTypes } from './mail/types';

import { authRequest, authRequestByRegister, signOut } from './auth/sagas';
import { clientRegisterRequest } from './client/sagas';
import { mailContactRequest } from './mail/sagas';

export default function* rootSaga() {
  return yield all([
    // AUTH
    takeLatest<any>(AuthTypes.AUTH_REQUEST, authRequest),
    takeLatest(AuthTypes.AUTH_LOGOUT, signOut),
    // CLIENT
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_REQUEST, clientRegisterRequest),
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_SUCCESS, authRequestByRegister),
    // MAIL
    takeLatest<any>(MailTypes.MAIL_CONTACT_REQUEST, mailContactRequest),
  ]);
}
