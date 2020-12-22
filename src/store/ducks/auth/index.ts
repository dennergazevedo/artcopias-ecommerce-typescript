import { Reducer } from 'redux';
import { IAuthState, AuthTypes } from './types';

const INITIAL_STATE: IAuthState = {
  data: {
    email: '',
    token: '',
    name: '',
    provider: 0,
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
        ...state,
        loading: false,
        signed: true,
        error: false,
        data: action.payload.data,
      };
    case AuthTypes.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        signed: false,
        data: { email: '', token: '', name: '', provider: 0 },
      };
    case AuthTypes.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        signed: false,
        data: { email: '', token: '', name: '', provider: 0 },
      };
    default:
      return state;
  }
};

export default reducer;
