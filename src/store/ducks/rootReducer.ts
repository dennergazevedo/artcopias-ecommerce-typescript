import { combineReducers } from 'redux';

import auth from './auth';
import client from './client';
import mail from './mail';

export default combineReducers({
  auth,
  client,
  mail,
});
