import { Reducer } from 'redux';
import { IClientState, ClientTypes } from './types';

const INITIAL_STATE: IClientState = {
  error: false,
  loading: false,
};

const reducer: Reducer<IClientState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTypes.CLIENT_REGISTER_REQUEST:
      return { ...state, loading: true };
    case ClientTypes.CLIENT_REGISTER_SUCCESS:
      return {
        loading: false,
        error: false,
      };
    case ClientTypes.CLIENT_REGISTER_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
