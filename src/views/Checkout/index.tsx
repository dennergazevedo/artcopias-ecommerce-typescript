/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/** Icons */
import {
  FaTruck,
  FaCheckCircle,
  FaArrowCircleLeft,
  FaStore,
  FaMapMarkerAlt,
  FaTimes,
  FaSave,
  FaCreditCard,
} from 'react-icons/fa';

/** Services */
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import cepPromise from 'cep-promise';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import Video from 'react-player';
import history from '../../services/history';
import api from '../../services/api';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import MandeUmZap from '../../components/ZapPlugin';
import Modal from '../../components/Modal';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';
import correiosLogo from '../../assets/img/correios.jpg';
import cielo from '../../assets/img/bandeiras/cielo.png';
import market from '../../assets/img/bandeiras/market.png';
import loadingLottie from '../../assets/json/loading.json';

/** Styled Components */
import {
  Container,
  DivBody,
  TitleAddress,
  SubTitle,
  Back,
  List,
  Retirada,
  Address,
  ModalBody,
  ModalTitle,
  Divider,
  ItemEdit,
  Edit,
  Confirm,
  ValorFrete,
  PrecoPrazo,
  Payment,
} from './styles';

/** Interface */
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

interface IParams {
  id: string;
}

interface IServiceOrder {
  situation: string;
  describe: string;
  value: number;
  art: boolean;
  client_id: number;
  address_id: number;
}

interface IReqOS {
  data: IServiceOrder;
}

interface IOrder {
  id: number;
  quantity: number;
  value: number;
  width: number;
  height: number;
  finishing: string;
  shipping: number;
  product_id: number;
  deadline_shipping: number;
}

interface IOrderRequest {
  data: Array<IOrder>;
}

interface IProps {
  data: IAuth;
}

const Checkout: React.FC<IProps> = ({ data }: IProps) => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const params = useParams<IParams>();
  const [serviceOrder, setServiceOrder] = useState<IServiceOrder>();
  const [shipping, setShipping] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [address, setAddress] = useState<IAddress>();
  const [zipcode, setZipcode] = useState<string>('');
  const [number, setNumber] = useState<number>();
  const [state, setState] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [shippingValue, setShippingValue] = useState<number>(0);
  const [deadlineShipping, setDeadlineShipping] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const toggle = () => setModal(!modal);

  async function loadData() {
    const os: IReqOS = await api.get(`serviceorder/${Number(params.id)}`);
    setServiceOrder(os.data);
    if (os.data.address_id) {
      const ads: IAddressRequest = await api.get(
        `address/${os.data.address_id}`,
      );
      setZipcode(ads.data.zipcode);
      setNumber(ads.data.number);
      setState(ads.data.state);
      setNeighborhood(ads.data.neighborhood);
      setCity(ads.data.city);
      setStreet(ads.data.street);
      setAddress(ads.data);
      const orders: IOrderRequest = await api.get(`order_byos/${params.id}`);
      let fr = 0;
      let pr = 0;
      for (let i = 0; i < orders.data.length; i++) {
        fr += Number(orders.data[i].shipping);
        if (Number(orders.data[i].deadline_shipping) > pr) {
          pr = Number(orders.data[i].deadline_shipping);
        }
      }
      if (fr > 0) {
        setShipping(true);
      }
      setShippingValue(fr);
      setDeadlineShipping(pr);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleCielo() {
    setLoading(true);
    let freteCielo = Number(shippingValue) * Number(100);
    if (!shipping) {
      freteCielo = 0;
    }
    if (serviceOrder) {
      const user = await api.get(`client_byemail/${data.email}`);
      const price = Number(serviceOrder.value) * 100;
      const resultado = await api.post('/cielo_payment', {
        orderNumber: params.id,
        price,
        cep: address ? address.zipcode : '35930004',
        fretePrice: freteCielo,
        cpf: user.data.document,
        nome: data.name,
        email: data.email,
        phone: user.data.phone,
      });
      window.location.href = resultado.data;
    }
  }

  async function handleMktPago() {
    setLoading(true);
    let valorMktPg = Number(serviceOrder?.value) + Number(shippingValue);
    if (!shipping) {
      valorMktPg = Number(serviceOrder?.value);
    }
    const response = await api.post('/mkt_payment', {
      id: params.id,
      email: data.email,
      title: `Pedido Nº 000${params.id}`,
      description: 'Pedido Site ArtCópias',
      price: valorMktPg,
    });
    window.location.href = response.data;
  }

  async function handleConfirmAddress() {
    if (window.confirm('Salvar endereço de entrega?')) {
      if (zipcode !== '' && number && street !== '') {
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
        toast.error('Dados incorretos ou faltantes!', {
          position: 'bottom-center',
        });
        setShippingValue(0);
        setDeadlineShipping(0);
        setAddress(undefined);
        toggle();
      }
    }
  }

  async function handleCep() {
    let numCep: string = zipcode;
    numCep = numCep.replace('.', '');
    numCep = numCep.replace('-', '');
    numCep = numCep.replace('_', '');
    if (numCep.length === 8) {
      try {
        const aux = await cepPromise(zipcode);
        setStreet(aux.street);
        setNeighborhood(aux.neighborhood);
        setState(aux.state);
        setCity(aux.city);
      } catch (err) {
        toast.error('Falha ao localizar endereço.', {
          position: 'bottom-center',
        });
        setShippingValue(0);
        setStreet('');
        setNeighborhood('');
        setState('');
        setCity('');
      }
    }
  }

  useEffect(() => {
    handleCep();
  }, [zipcode]);

  async function handleCalculaFrete() {
    const orders: IOrderRequest = await api.get(`order_byos/${params.id}`);
    let frete = 0;
    let prazo = 0;
    for (let i = 0; i < orders.data.length; i++) {
      const product = await api.get(`product/${orders.data[i].product_id}`);
      if (product.data.unit === 2 || product.data.unit === 3) {
        const freteReq = await api.post(`calcula_frete`, {
          cep: address?.zipcode,
          peso: 2,
          comprimento: 15,
          altura: 15,
          largura: orders.data[i].width,
        });
        let fr: string = freteReq.data.Valor;
        fr = fr.replace(',', '.');
        frete = Number(fr);

        let pr: string = freteReq.data.PrazoEntrega;
        pr = pr.replace(',', '.');
        prazo = Number(pr);
      } else {
        const freteReq = await api.post(`calcula_frete`, {
          cep: address?.zipcode,
          peso: 1,
          comprimento: 15,
          altura: product.data.height,
          largura: product.data.width,
        });
        let fr: string = freteReq.data.Valor;
        fr = fr.replace(',', '.');
        frete = Number(fr);

        let pr: string = freteReq.data.PrazoEntrega;
        pr = pr.replace(',', '.');
        prazo = Number(pr);
      }
      frete = Number(frete) + 10;
      setDeadlineShipping(prazo);
      setShippingValue(frete);
    }
  }

  useEffect(() => {
    handleCalculaFrete();
  }, [address]);

  return (
    <>
      <MandeUmZap />
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="auto" />
      <Container>
        <DivBody>
          <TitleAddress>
            <FaTruck className="iconTitle" />
            Selecione a Entrega
          </TitleAddress>
          <SubTitle>
            <FaCheckCircle className="iconTitle" />
            ENTREGAS EM TODO O BRASIL.
          </SubTitle>
          <List>
            <Retirada
              style={{ borderColor: !shipping ? '#32a852' : '#FFF' }}
              onClick={() => setShipping(false)}
            >
              <span className="title">
                <FaStore className="icon" />
                Retirada na Loja Física
              </span>
              <Address>
                <span>Avenida Getúlio Vargas, 4786</span>
                <span>Carneirinhos, João Monlevade - MG</span>
                <span>35.930-003</span>
              </Address>
            </Retirada>

            <Retirada
              style={{
                borderColor: shipping
                  ? `${shippingValue > 20 ? '#32a852' : '#E54'}`
                  : '#FFF',
              }}
              onClick={() => setShipping(true)}
            >
              {shippingValue > 20 ? (
                <div className="titleEdit">
                  <span className="title">
                    <FaMapMarkerAlt className="icon" />
                    Entregar no Endereço
                  </span>
                  <span className="edit" onClick={toggle}>
                    {address ? 'EDITAR ENDEREÇO' : 'CADASTRAR ENDEREÇO'}
                  </span>
                </div>
              ) : (
                <div className="titleEdit">
                  <span className="title">
                    <FaMapMarkerAlt className="icon" />
                    Entregar no Endereço
                  </span>
                  <span className="edit" onClick={toggle}>
                    {address ? 'EDITAR ENDEREÇO' : 'CADASTRAR ENDEREÇO'}
                  </span>
                </div>
              )}
              {address && (
                <Address>
                  <span>{`${address?.street}, ${address?.number}`}</span>
                  <span>{`${address?.neighborhood}, ${address?.city} - ${address?.state}`}</span>
                  <span>{`${address?.zipcode}`}</span>
                </Address>
              )}
            </Retirada>
            <Modal isToggled={modal}>
              <ModalBody>
                <ModalTitle>
                  <span>EDITAR ENDEREÇO</span>
                  <FaTimes className="icon" onClick={toggle} />
                </ModalTitle>
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
              </ModalBody>
            </Modal>
          </List>
          <ValorFrete>
            <img
              src={correiosLogo}
              alt="PAC CORREIOS"
              width="auto"
              height="40px"
            />
            <PrecoPrazo>
              <div>
                <b>FRETE:</b>
                {!shipping ? (
                  <span>R$0,00 (Grátis)</span>
                ) : (
                  <>
                    {shippingValue > 10 && address ? (
                      <span>{`R$${Number(shippingValue).toFixed(2)}`}</span>
                    ) : (
                      <span>NÃO É POSSÍVEL ENTREGAR</span>
                    )}
                  </>
                )}
              </div>
              <div>
                <b>PRAZO:</b>
                {!shipping ? (
                  <span>Disponível após produção.</span>
                ) : (
                  <>
                    {shippingValue > 10 && address ? (
                      <span>{`${deadlineShipping} dias úteis após produção`}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </>
                )}
              </div>
            </PrecoPrazo>
          </ValorFrete>
        </DivBody>

        <DivBody>
          <TitleAddress>
            <FaCreditCard className="iconTitle" />
            Checkout
          </TitleAddress>
          <SubTitle>
            <FaCheckCircle className="iconTitle" />
            ATÉ 3X SEM JUROS.
          </SubTitle>
          <List>
            <Payment>
              <div className="divLeft">
                <div
                  className="barra"
                  style={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                  }}
                />

                <div>
                  <span className="left">Frete:</span>
                  {shipping && shippingValue !== 10 ? (
                    <span className="right">
                      {`R$${Number(shippingValue).toFixed(2)}`}
                    </span>
                  ) : (
                    <span className="right">R$0.00</span>
                  )}
                </div>
                <div>
                  <span className="left">Total do pedido:</span>
                  <span className="right">
                    {`R$${Number(serviceOrder?.value).toFixed(2)}`}
                  </span>
                </div>
                <div>
                  <span className="left">Valor total:</span>
                  {shipping && serviceOrder ? (
                    <span className="right">
                      R$
                      {Number(
                        Number(shippingValue) + Number(serviceOrder.value),
                      ).toFixed(2)}
                    </span>
                  ) : (
                    <span className="right">
                      {`R$${Number(serviceOrder?.value).toFixed(2)}`}
                    </span>
                  )}
                </div>

                <div
                  className="barra"
                  style={{
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                />
              </div>
              <div className="divRight">
                <div className="divFinal">FINALIZAR PAGAMENTO COM:</div>

                {!serviceOrder || loading ? (
                  <div>
                    <Lottie
                      options={loadingOptions}
                      width="80px"
                      height="auto"
                    />
                  </div>
                ) : (
                  <>
                    <button type="button" onClick={handleCielo}>
                      <img src={cielo} alt="CIELO" width="80px" />
                    </button>

                    <button type="button" onClick={handleMktPago}>
                      <img src={market} alt="MERCADO PAGO" width="80px" />
                    </button>
                  </>
                )}
              </div>
            </Payment>
          </List>
        </DivBody>
        <Back onClick={() => history.push('/')}>
          <FaArrowCircleLeft className="icon" />
          VOLTAR ÀS COMPRAS
        </Back>
      </Container>

      <Card />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(Checkout);
