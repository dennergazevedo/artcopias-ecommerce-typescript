/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

/** ACTIONS */
import { clientRegisterFailure, clientRegisterSuccess } from './actions';

/** SERVICES */
import api from '../../../services/api';

/** TYPES */
import { IRegister } from './types';

export function* clientRegisterRequest({ data }: IRegister) {
  try {
    yield call(api.post, 'client', {
      name: data.name,
      phone: data.phone,
      document: data.cpf,
      email: data.email,
      password: data.password,
      status: 'Ativo',
    });

    yield put(
      clientRegisterSuccess({ email: data.email, password: data.password }),
    );
    toast.success('Cadastrado com sucesso!', {
      position: 'bottom-center',
    });
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados', {
      position: 'bottom-center',
    });
    yield put(clientRegisterFailure());
  }
}
