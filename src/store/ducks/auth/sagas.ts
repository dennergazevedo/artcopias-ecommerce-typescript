/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

/** ACTIONS */
import { authFailure, authSuccess } from './actions';

/** SERVICES */
import api from '../../../services/api';
import history from '../../../services/history';

/** TYPES */
import { ISession, ILogin } from './types';

interface IPayload {
  payload: {
    data: ILogin;
  };
}

export function* authRequest({ payload }: IPayload) {
  try {
    const response = yield call(api.post, 'login', {
      email: payload.data.email,
      password: payload.data.password,
    });

    const session: ISession = response.data;

    api.defaults.headers.Authorization = `Bearer ${session.token}`;

    yield put(
      authSuccess({
        email: session.user.email,
        name: session.user.name,
        token: session.token,
        provider: session.user.provider,
      }),
    );
    toast.success('Logado com sucesso! Redirecionando...', {
      position: 'bottom-center',
    });
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados', {
      position: 'bottom-center',
    });
    yield put(authFailure());
  }
}

export function signOut() {
  history.push('/');
  toast.success('Deslogado com sucesso! Redirecionando...', {
    position: 'bottom-right',
  });
}
