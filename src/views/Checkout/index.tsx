/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

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

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';
import correiosLogo from '../../assets/img/correios.jpg';

/** Styled Components */
import {
  Container,
  DivBody,
  TitleAddress,
  SubTitle,
  Back,
  ListEntrega,
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

const Checkout: React.FC = () => {
  const [shipping, setShipping] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [address, setAddress] = useState<IAddress>();
  const [zipcode, setZipcode] = useState<string>('');
  const [number, setNumber] = useState<number>();
  const [state, setState] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');

  const toggle = () => setModal(!modal);

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
          <ListEntrega>
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
              style={{ borderColor: shipping ? '#32a852' : '#FFF' }}
              onClick={() => setShipping(true)}
            >
              <div className="titleEdit">
                <span className="title">
                  <FaMapMarkerAlt className="icon" />
                  Entregar no Endereço
                </span>
                <span className="edit" onClick={toggle}>
                  {address ? 'EDITAR ENDEREÇO' : 'CADASTRAR ENDEREÇO'}
                </span>
              </div>
              <Address>
                {address && (
                  <>
                    <span>{`${address?.street}, ${address?.number}`}</span>
                    <span>{`${address?.neighborhood}, ${address?.city} - ${address?.state}`}</span>
                    <span>{`${address?.zipcode}`}</span>
                  </>
                )}
              </Address>
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
          </ListEntrega>
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
                  <span>{`R$${Number(20).toFixed(2)}`}</span>
                )}
              </div>
              <div>
                <b>PRAZO:</b>
                {!shipping ? (
                  <span>Disponível após produção.</span>
                ) : (
                  <span>{`${0} dias úteis após produção`}</span>
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

export default Checkout;
