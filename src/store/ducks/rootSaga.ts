/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { ClientTypes } from './client/types';
import { MailTypes } from './mail/types';
import { CartTypes } from './cart/types';

import { authRequest, authRequestByRegister, signOut } from './auth/sagas';
import {
  clientRegisterRequest,
  forgotPass,
  resetPass,
  bePartner,
} from './client/sagas';
import { mailContactRequest, mailBudgetRequest } from './mail/sagas';
import { addCart, removeCart } from './cart/sagas';

export default function* rootSaga() {
  return yield all([
    // AUTH
    takeLatest<any>(AuthTypes.AUTH_REQUEST, authRequest),
    takeLatest(AuthTypes.AUTH_LOGOUT, signOut),
    // CLIENT
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_REQUEST, clientRegisterRequest),
    takeLatest<any>(ClientTypes.CLIENT_REGISTER_SUCCESS, authRequestByRegister),
    takeLatest<any>(ClientTypes.CLIENT_FORGOTPASS, forgotPass),
    takeLatest<any>(ClientTypes.CLIENT_RESETPASS, resetPass),
    takeLatest<any>(ClientTypes.CLIENT_PARTNER, bePartner),
    // MAIL
    takeLatest<any>(MailTypes.MAIL_CONTACT_REQUEST, mailContactRequest),
    takeLatest<any>(MailTypes.MAIL_BUDGET_REQUEST, mailBudgetRequest),
    // CART
    takeLatest<any>(CartTypes.CART_ADD, addCart),
    takeLatest<any>(CartTypes.CART_REMOVE, removeCart),
  ]);
}
