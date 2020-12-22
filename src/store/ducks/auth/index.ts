import { Reducer } from 'redux';
import { IAuthState, AuthTypes } from './types';

const INITIAL_STATE: IAuthState = {
  data: {
    email: '',
    token: '',
    name: '',
  },
  error: false,
  loading: false,
  signed: false,
};

const reducer: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.AUTH_SUCCESS:
      return {
        loading: false,
        signed: true,
        error: false,
        data: action.payload.data,
      };
    case AuthTypes.AUTH_FAILURE:
      return {
        loading: false,
        error: true,
        signed: false,
        data: { email: '', token: '', name: '' },
      };
    case AuthTypes.AUTH_LOGOUT:
      return {
        loading: false,
        error: false,
        signed: false,
        data: { email: '', token: '', name: '' },
      };
    default:
      return state;
  }
};

export default reducer;
