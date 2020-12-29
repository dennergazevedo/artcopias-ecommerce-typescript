import { combineReducers } from 'redux';

import auth from './auth';
import client from './client';
import mail from './mail';
import cart from './cart';

export default combineReducers({
  auth,
  client,
  mail,
  cart,
});
