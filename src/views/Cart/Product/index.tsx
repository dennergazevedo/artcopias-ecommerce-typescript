/* eslint-disable func-names */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** Services */
import { FaTrashAlt, FaArrowAltCircleDown } from 'react-icons/fa';
import api from '../../../services/api';
import store from '../../../store';
import { CartTypes } from '../../../store/ducks/cart/types';

/** Styled Components */
import {
  Container,
  ImagemContainer,
  Imagem,
  Remove,
  Descricao,
  Gabarito,
} from './styles';

/** Interfaces */
interface IProps {
  item: number;
}

interface IProduct {
  id: number;
  unit: number;
  photo: string;
  name: string;
  value: number;
  provider_value: number;
  template: number;
}

interface IOrder {
  id: number;
  quantity: number;
  value: number;
  width: number;
  height: number;
  finishing: string;
  sector: number;
  describe: string;
  art: boolean;
  product_id: number;
}

const Product: React.FC<IProps> = ({ item }: IProps) => {
  const [product, setProduct] = useState<IProduct>();
  const [order, setOrder] = useState<IOrder>();
  const [loading, setLoading] = useState<boolean>(false);

  async function loadProduct(e: number) {
    const response = await api.get(`product/${e}`);
    setProduct(response.data);
  }

  async function loadData() {
    const response = await api.get(`order/${item}`);
    setOrder(response.data);
    loadProduct(response.data.product_id);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [item]);

  async function handleDownload() {
    setLoading(true);
    await api.get(`download_drive/${product?.template}`);
    authDownload();
  }

  async function authDownload() {
    const resp = await api.get(`file/${product?.template}`);
    if (Number(resp.data.auth) === 1) {
      window.open(
        `${process.env.REACT_APP_API_URL}download_open/${product?.template}`,
      );
      await api.put(`download_auth/${resp.data.url}`, {
        auth: 0,
      });
      setLoading(false);
      api.delete(`delete_file/${resp.data.url}`);
    } else {
      setTimeout(function () {
        authDownload();
      }, 3000);
    }
  }

  function handleRemove() {
    store.store.dispatch({
      type: CartTypes.CART_REMOVE,
      data: {
        id: order?.id,
      },
    });
  }

  return (
    <Container>
      <ImagemContainer>
        <Imagem src={product?.photo} alt="FOTO" />
        <Remove onClick={handleRemove}>
          REMOVER PRODUTO
          <FaTrashAlt className="iconRemove" />
        </Remove>
      </ImagemContainer>
      <Descricao>
        <span className="descProduct">{product?.name}</span>
        <span className="descSizeQnt">{order?.finishing}</span>
        <span className="descSizeQnt">
          {product &&
            product.unit !== 1 &&
            product.unit !== 4 &&
            `${order?.width}cm x ${order?.height}cm - `}
          {`${order?.quantity} un.`}
        </span>
        <>
          {order && order.art ? (
            <span className="descPrice">
              {`R$${Number(order.value + 35).toFixed(2)}`}
            </span>
          ) : (
            <span className="descPrice">
              {`R$${Number(order?.value).toFixed(2)}`}
            </span>
          )}
        </>
        <Gabarito onClick={handleDownload}>
          <FaArrowAltCircleDown className="downloadIcon" />
          {loading ? `CARREGANDO...` : `BAIXAR GABARITO`}
        </Gabarito>
      </Descricao>
    </Container>
  );
};

export default Product;
