/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

/** Icons */
import { FaCartPlus, FaCheck, FaTruck } from 'react-icons/fa';

/** Lottie */
import Lottie from 'react-lottie';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Components */
import LojaNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import MandeUmZap from '../../components/ZapPlugin';
import Product from './Product';

/** Services */
import api from '../../services/api';

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
} from './styles';

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

  const [address, setAddress] = useState<IAddress>();

  async function loadData() {
    const response: IAddressRequest = await api.get(
      `address/${data.address_id}`,
    );
    setAddress(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

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
