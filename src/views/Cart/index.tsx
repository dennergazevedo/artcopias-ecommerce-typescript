/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

/** Icons */
import { FaCartPlus, FaCheck, FaTruck, FaDonate } from 'react-icons/fa';

/** Lottie */
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';

/** Redux */
import { connect } from 'react-redux';
import store, { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Components */
import LojaNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import MandeUmZap from '../../components/ZapPlugin';
import Product from './Product';

/** Services */
import api from '../../services/api';
import history from '../../services/history';

/** Assets */
import empty from '../../assets/json/empty.json';

/** Styled Components */
import {
  Container,
  ItemBody,
  Title,
  Subtitle,
  Body,
  Address,
  BodyCart,
  Vazio,
  ItemFinance,
  ButtonFinish,
  BackShop,
} from './styles';
import { CartTypes } from '../../store/ducks/cart/types';

/** Interfaces */
interface IProps {
  data: IAuth;
  cart: Array<number>;
}

interface IAddress {
  id: number;
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
}

interface IAddressRequest {
  data: IAddress;
}

const Cart: React.FC<IProps> = ({ data, cart }: IProps) => {
  const cartOptions = {
    loop: false,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<IAddress>();
  const [total, setTotal] = useState<number>();

  async function loadData() {
    try {
      const response: IAddressRequest = await api.get(
        `address/${data.address_id}`,
      );
      setAddress(response.data);

      let value = 0;
      for (let i = 0; i < cart.length; i++) {
        const resp = await api.get(`order/${cart[i]}`);
        value += Number(resp.data.value);
      }
      setTotal(value);
    } catch (err) {
      loadData();
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [cart]);

  function handleShop() {
    if (
      window.confirm('Quer continuar comprando? Os outros itens serão salvos.')
    ) {
      history.push('/');
      window.location.reload();
    }
  }

  async function createServiceOrder() {
    setLoading(true);
    if (cart.length > 0) {
      const cli = await api.get(`client_byemail/${data.email}`);
      try {
        const response = await api.post(`serviceorder`, {
          situation: 'Emitido',
          describe: '[PEDIDO EFETUADO PELO SITE]',
          value: total,
          client_id: cli.data.id,
        });
        updateOrders(response.data.id);
      } catch (err) {
        toast.error('Falha ao finalizar pedido, tente novamente mais tarde', {
          position: 'bottom-center',
        });
        setLoading(false);
      }
    } else {
      toast.info('É necessário ter pelo menos um item no carrinho!', {
        position: 'bottom-center',
      });
    }
  }

  async function updateOrders(id: number) {
    try {
      for (let i = 0; i < cart.length; i++) {
        await api.put(`order/${cart[i]}`, {
          serviceorder_id: id,
        });
      }
      store.store.dispatch({
        type: CartTypes.CART_CLEAN,
      });
      setLoading(false);
      history.push(`/checkout/${id}`);
      window.location.reload();
    } catch (err) {
      await api.delete(`serviceorder/${id}`);
      toast.error('Falha ao finalizar pedido, tente novamente mais tarde', {
        position: 'bottom-center',
      });
    }
  }

  return (
    <>
      <LojaNavbar />
      <MandeUmZap />
      <Slider />
      <Container>
        <ItemBody>
          <Title>
            <FaTruck className="iconTitle" />
            <span>Endereço de entrega</span>
          </Title>
          <Subtitle>
            <FaCheck className="iconSubtitle" />
            <span>ENTREGAMOS EM TODO O BRASIL</span>
          </Subtitle>
          <Body>
            {address ? (
              <Address>
                <div className="title">
                  <span>{address.street}</span>
                  <span className="editButton">EDITAR ENDEREÇO</span>
                </div>
                <span>{`CEP ${address.zipcode},`}</span>
                <span>{`Número ${address.number},`}</span>
                <span>{`${address.neighborhood} - ${address.state}`}</span>
              </Address>
            ) : (
              <Address>
                <span className="register">CADASTRAR ENDEREÇO</span>
              </Address>
            )}
            <span className="alert">
              <b>ATENÇÃO</b>: Alguns pedidos podem sofrer alterações na data de
              entrega, caso ocorra será avisado com antecedência.
            </span>
          </Body>
        </ItemBody>

        <ItemBody>
          <Title>
            <FaCartPlus className="iconTitle" />
            <span>Produtos adicionados ao carrinho</span>
          </Title>
          <Subtitle>
            <FaCheck className="iconSubtitle" />
            <span>LISTAGEM DE PRODUTOS</span>
          </Subtitle>
          <BodyCart>
            {cart.length > 0 ? (
              <>
                {cart.map(item => (
                  <Product item={item} />
                ))}
              </>
            ) : (
              <Vazio>
                <Lottie options={cartOptions} width="200px" height="auto" />
                <span>CARRINHO VAZIO</span>
              </Vazio>
            )}
          </BodyCart>
        </ItemBody>

        <ItemBody>
          <Title>
            <FaDonate className="iconTitle" />
            <span>Financeiro</span>
          </Title>
          <Subtitle>
            <FaCheck className="iconSubtitle" />
            <span>CONTROLE DO PEDIDO</span>
          </Subtitle>
          <BodyCart>
            <ItemFinance>
              <div>
                <span>TOTAL DOS ITEMS:</span>
                <span>{`${cart.length} item(s)`}</span>
              </div>
              <div>
                <span>FRETE:</span>
                <span>A CALCULAR</span>
              </div>
              <div>
                <span>VALOR TOTAL:</span>
                <span>{`R$${Number(total).toFixed(2)}`}</span>
              </div>
            </ItemFinance>
            <ItemFinance>
              <ButtonFinish type="button" onClick={createServiceOrder}>
                <FaCheck className="icon" />
                <span>{loading ? 'CARREGANDO...' : 'FINALIZAR PEDIDO'}</span>
              </ButtonFinish>
              <BackShop onClick={handleShop}>CONTINUAR COMPRANDO</BackShop>
            </ItemFinance>
          </BodyCart>
        </ItemBody>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth, cart }: IApplicationState) => ({
  data: auth.data,
  cart: cart.cart,
});

export default connect(mapStateToProps)(Cart);
