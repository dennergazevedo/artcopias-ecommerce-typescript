/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

/** SERVICES */
import api from '../../../services/api';

/** TYPES */
import { IMail, IBudget } from './types';

/** Interfaces */
interface IMailRequest {
  data: IMail;
}

export function* mailContactRequest({ data }: IMailRequest) {
  try {
    yield call(api.post, 'contact_mail', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    toast.success('Contato efetuado com sucesso!', {
      position: 'bottom-center',
    });
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados', {
      position: 'bottom-center',
    });
  }
}

interface IMailBudget {
  data: IBudget;
}

export function* mailBudgetRequest({ data }: IMailBudget) {
  try {
    yield call(api.post, 'send_budget', {
      name: data.name,
      phone: data.phone,
      product: data.product,
      message: data.message,
      company: data.company,
      email: data.email,
    });

    toast.success('Orçamento enviado com sucesso!', {
      position: 'bottom-center',
    });
  } catch (err) {
    toast.error('Falha ao enviar orçamento, tente novamente mais tarde.', {
      position: 'bottom-center',
    });
  }
}
