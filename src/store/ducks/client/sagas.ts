/* eslint-disable func-names */
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

interface IForgotPass {
  data: {
    email: string;
  };
}

export function* forgotPass({ data }: IForgotPass) {
  try {
    yield call(api.post, 'forgot_pass', { email: data.email });

    toast.success(
      'Sucesso! Um e-mail foi enviado para seu e-mail com os passos para recuperação!',
      { position: 'bottom-center' },
    );
  } catch (err) {
    toast.error(
      'Oops! Não foi possível recuperar a sua senha! Verifique os dados e tente novamente.',
      { position: 'bottom-center' },
    );
  }
}

interface IResetPass {
  data: {
    email: string;
    token: string;
    password: string;
  };
}

export function* resetPass({ data }: IResetPass) {
  try {
    yield call(api.post, 'reset_pass', {
      email: data.email,
      token: data.token,
      password: data.password,
    });

    toast.success('Sua senha foi atualizada com sucesso!', {
      position: 'bottom-center',
    });
    setTimeout(function () {
      window.location.href = '/';
      window.location.reload();
    }, 3000);
  } catch (err) {
    toast.error('Oops! Não foi possível atualizar a sua senha!.', {
      position: 'bottom-center',
    });
  }
}

interface IPartner {
  data: {
    name: string;
    email: string;
    phone: string;
    document: string;
    city: string;
    message: string;
  };
}

export function* bePartner({ data }: IPartner) {
  console.log(data);
  try {
    yield call(api.post, 'be_partner', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      document: data.document,
      city: data.city,
      message: data.message,
    });

    toast.success('Seu formulário foi enviado com sucesso!', {
      position: 'bottom-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  } catch (err) {
    toast.error(
      'Oops! Não foi enviar o seu formulário, tente novamente mais tarde!',
      {
        position: 'bottom-center',
      },
    );
  }
}

/** Interface */
interface IClient {
  id?: number;
  name?: string;
  contact?: string;
  phone?: string;
  document?: string;
  email?: string;
}

interface IPropsIClient {
  data: IClient;
}

export function* updateClient({ data }: IPropsIClient) {
  try {
    yield call(api.put, `client/${data.id}`, data);

    toast.success('Dados atualizados com sucesso!', {
      position: 'bottom-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  } catch (err) {
    toast.error('Erro ao atualizar dados, tente novamente mais tarde!', {
      position: 'bottom-center',
    });
  }
}

/** Interface */
interface IResetPass {
  id: number;
  password: string;
  oldPassword: string;
}

interface IPropsResetPass {
  data: IResetPass;
}

export function* updatePassword({ data }: IPropsResetPass) {
  try {
    yield call(api.put, `client_update_pass/${data.id}`, {
      password: data.password,
      oldPassword: data.oldPassword,
    });

    toast.success('Senha atualizada com sucesso!', {
      position: 'bottom-center',
    });
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  } catch (err) {
    toast.error(
      'Erro ao atualizar senha, verifique os dados e tente novamente!',
      {
        position: 'bottom-center',
      },
    );
  }
}
