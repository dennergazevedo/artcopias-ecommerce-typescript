import { createStore, applyMiddleware, Store } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { IAuthState } from './ducks/auth/types';
import { IClientState } from './ducks/client/types';
import { IMailState } from './ducks/mail/types';
import { ICartState } from './ducks/cart/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface IApplicationState {
  auth: IAuthState;
  client: IClientState;
  mail: IMailState;
  cart: ICartState;
}

const persistConfig = {
  key: '@artcopias',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
