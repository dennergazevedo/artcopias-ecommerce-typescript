import { Reducer } from 'redux';
import { IMailState, MailTypes } from './types';

const INITIAL_STATE: IMailState = {
  error: false,
};

const reducer: Reducer<IMailState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MailTypes.MAIL_CONTACT_REQUEST:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
