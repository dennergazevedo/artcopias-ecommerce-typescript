/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

/** ACTIONS */
import { mailContactSuccess, mailContactFailure } from './actions';

/** SERVICES */
import api from '../../../services/api';

/** TYPES */
import { IMail } from './types';

/** Interfaces */
interface IMailRequest {
  data: IMail;
}

export function* mailContactRequest({ data }: IMailRequest) {
  console.log(data);
  try {
    yield call(api.post, 'contact_mail', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    yield put(mailContactSuccess());
    toast.success('Contato efetuado com sucesso!', {
      position: 'bottom-center',
    });
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados', {
      position: 'bottom-center',
    });
    yield put(mailContactFailure());
  }
}
