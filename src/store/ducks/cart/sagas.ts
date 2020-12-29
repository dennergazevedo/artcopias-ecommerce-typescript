/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

/** ACTIONS */
import { cartAddSuccess } from './actions';

/** SERVICES */
import api from '../../../services/api';
import history from '../../../services/history';

/** TYPES */
import { ICart } from './types';

interface IData {
  data: ICart;
}

export function* addCart({ data }: IData) {
  try {
    const response = yield call(api.post, 'order', {
      quantity: data.quantity,
      value: data.value,
      width: data.width,
      height: data.height,
      finishing: data.finishing,
      product_id: data.product_id,
      art: data.art,
      sector: 5,
      describe: data.obs,
    });
    toast.success('Produto adicionado ao carrinho!', {
      position: 'bottom-center',
    });
    yield put(cartAddSuccess(response.data.id));
    setTimeout(function () {
      if (data.signed) {
        history.push('/cart');
        window.location.reload();
      } else {
        history.push('/sign-up');
        window.location.reload();
      }
    }, 3000);
  } catch (err) {
    toast.error(
      'Falha ao adicionar o produto ao carrinho, tente novamente mais tarde!',
      { position: 'bottom-center' },
    );
  }
}

export function* removeCart({ data }: IData) {
  yield call(api.delete, `order/${data.id}`);
}
