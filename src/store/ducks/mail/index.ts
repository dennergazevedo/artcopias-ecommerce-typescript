import { Reducer } from 'redux';
import { IMailState, MailTypes } from './types';

const INITIAL_STATE: IMailState = {
  error: false,
};

const reducer: Reducer<IMailState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MailTypes.MAIL_CONTACT_REQUEST:
      return { ...state };
    case MailTypes.MAIL_CONTACT_SUCCESS:
      return { error: false };
    case MailTypes.MAIL_CONTACT_FAILURE:
      return { error: true };
    default:
      return state;
  }
};

export default reducer;
