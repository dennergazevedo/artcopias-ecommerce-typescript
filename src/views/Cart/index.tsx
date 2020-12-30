/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

/** Icons */
import {
  FaCartPlus,
  FaCheckCircle,
  FaTruck,
  FaDonate,
  FaTimes,
  FaSave,
} from 'react-icons/fa';

/** Util */
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import cepPromise from 'cep-promise';
import InputMask from 'react-input-mask';

/** Redux */
import { connect } from 'react-redux';
import store, { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';
import { CartTypes } from '../../store/ducks/cart/types';

/** Components */
import LojaNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import MandeUmZap from '../../components/ZapPlugin';
import Modal from '../../components/Modal';
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
  BodyModal,
  TitleModal,
  Divider,
  Edit,
  ItemEdit,
  Confirm,
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

  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<IAddress>();
  const [total, setTotal] = useState<number>();
  const [modalAddress, setModalAddress] = useState<boolean>(false);
  const [zipcode, setZipcode] = useState<string>('');
  const [number, setNumber] = useState<number>();
  const [state, setState] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');

  const toggle = () => setModalAddress(!modalAddress);

  async function loadData() {
    try {
      if (data.address_id) {
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
      }
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
          address_id: address?.id,
        });
        let stock = true;
        for (let i = 0; i < cart.length; i++) {
          const order = await api.get(`order/${cart[i]}`);
          const product = await api.get(`product/${order.data.product_id}`);
          if (
            product.data.stock !== -1 &&
            product.data.stock < order.data.quantity
          ) {
            stock = false;
            toast.error(
              `O produto ${product.data.name} não possui estoque disponível.`,
              { position: 'bottom-center' },
            );
            await api.delete(`serviceorder/${response.data.id}`);
            setLoading(false);
            break;
          }
        }
        if (stock) updateOrders(response.data.id);
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

  async function handleCep() {
    let numCep: string = zipcode;
    numCep = numCep.replace('.', '');
    numCep = numCep.replace('-', '');
    numCep = numCep.replace('_', '');
    if (numCep.length === 8) {
      const aux = await cepPromise(zipcode);
      setStreet(aux.street);
      setNeighborhood(aux.neighborhood);
      setState(aux.state);
      setCity(aux.city);
    }
  }

  useEffect(() => {
    handleCep();
  }, [zipcode]);

  async function handleConfirmAddress() {
    if (window.confirm('Salvar endereço de entrega?')) {
      if (zipcode !== '' && number) {
        try {
          const addressResponse: IAddressRequest = await api.post('address', {
            zipcode,
            state,
            city,
            neighborhood,
            street,
            number,
          });
          setAddress(addressResponse.data);
          toast.success('Endereço salvo com sucesso!', {
            position: 'bottom-center',
          });
          toggle();
        } catch (err) {
          toast.error('Falha ao atualizar endereço!', {
            position: 'bottom-center',
          });
        }
      } else {
        toast.error('Número é obrigatório!', { position: 'bottom-center' });
      }
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
            <FaCheckCircle className="iconSubtitle" />
            <span>ENTREGAMOS EM TODO O BRASIL</span>
          </Subtitle>
          <Body>
            {address ? (
              <Address>
                <div className="title">
                  <span>{address.street}</span>
                  <span className="editButton" onClick={toggle}>
                    EDITAR ENDEREÇO
                  </span>
                </div>
                <span>{`CEP ${address.zipcode},`}</span>
                <span>{`Número ${address.number},`}</span>
                <span>{`${address.neighborhood} - ${address.state}`}</span>
              </Address>
            ) : (
              <Address onClick={toggle}>
                <span className="register" onClick={toggle}>
                  CADASTRAR ENDEREÇO
                </span>
              </Address>
            )}
            <span className="alert">
              <b>ATENÇÃO</b>: Alguns pedidos podem sofrer alterações na data de
              entrega, caso ocorra será avisado com antecedência.
            </span>
            <Modal isToggled={modalAddress}>
              <BodyModal>
                <TitleModal>
                  <span>EDITAR ENDEREÇO</span>
                  <FaTimes className="iconTitle" onClick={toggle} />
                </TitleModal>
                <Divider />
                <Edit>
                  <ItemEdit>
                    <div>
                      <span>CEP</span>
                      <InputMask
                        mask="99.999-999"
                        onChange={e => setZipcode(e.target.value)}
                        value={zipcode}
                        placeholder="Ex: 35.930-004"
                      />
                    </div>
                    <div>
                      <span>Número</span>
                      <input
                        placeholder="Ex: 100"
                        value={number}
                        onChange={e => setNumber(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <span>Rua</span>
                      <input
                        placeholder="Ex: Av. Getúlio Vargas"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                      />
                    </div>
                    <div>
                      <span>Bairro</span>
                      <input
                        placeholder="Ex: Carneirinhos"
                        value={neighborhood}
                        onChange={e => setNeighborhood(e.target.value)}
                      />
                    </div>
                    <div>
                      <span>Cidade</span>
                      <input
                        placeholder="Ex: João Monlevade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                    </div>
                    <div>
                      <span>Estado</span>
                      <input
                        placeholder="Ex: MG"
                        value={state}
                        onChange={e => setState(e.target.value)}
                      />
                    </div>
                  </ItemEdit>
                  <Confirm onClick={handleConfirmAddress}>
                    <FaSave className="icon" />
                    <span>SALVAR</span>
                  </Confirm>
                </Edit>
              </BodyModal>
            </Modal>
          </Body>
        </ItemBody>

        <ItemBody>
          <Title>
            <FaCartPlus className="iconTitle" />
            <span>Produtos adicionados ao carrinho</span>
          </Title>
          <Subtitle>
            <FaCheckCircle className="iconSubtitle" />
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
            <FaCheckCircle className="iconSubtitle" />
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
                <FaCheckCircle className="icon" />
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
