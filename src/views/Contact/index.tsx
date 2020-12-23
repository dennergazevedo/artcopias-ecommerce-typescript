/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

/** Icons */
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaRegEnvelope,
} from 'react-icons/fa';

/** Components */
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import Video from 'react-player';
import validator from 'validator';
import Footer from '../../components/Footer';
import MandeUmZap from '../../components/ZapPlugin';
import Navbar from '../../components/Navbar';

/** Redux */
import store from '../../store';
import { MailTypes } from '../../store/ducks/mail/types';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';

/** Styled Components */
import { Body, Container, Item, Title, Divider, ItemDiv, Form } from './styles';

const Contato: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleArtLocal = () => {
    window.open(
      'https://www.google.com.br/maps/place/Art+Cópias/@-19.8088083,-43.1760004,17z/data=!3m1!4b1!4m5!3m4!1s0xa5077119a0003f:0x5fc87db9ac16f156!8m2!3d-19.8088083!4d-43.1738117',
      '_blank',
    );
  };

  const handleProdLocal = () => {
    window.open(
      'https://www.google.com/maps/place/Produção+-+Art+Cópias/@-19.8110088,-43.1897478,16.5z/data=!4m5!3m4!1s0x0:0x7a60379950911600!8m2!3d-19.8113416!4d-43.1883343',
      '_blank',
    );
  };

  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5531989620800', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+553138522029', '_blank');
  };

  async function handleSendMail() {
    event?.preventDefault();
    if (validator.isEmail(email)) {
      if (name.length > 4) {
        if (subject) {
          if (phone) {
            if (message.length > 15) {
              toast.info('Aguarde, processando...', {
                position: 'bottom-center',
              });
              store.store.dispatch({
                type: MailTypes.MAIL_CONTACT_REQUEST,
                data: {
                  name,
                  email,
                  subject,
                  phone,
                  message,
                },
              });
              toast.info('Este processo pode demorar alguns minutos...', {
                position: 'bottom-center',
              });
            } else {
              toast.error('Sua mensagem deve conter no mínimo 15 caracteres!', {
                position: 'bottom-center',
              });
            }
          } else {
            toast.error('Preencha o campo de telefone', {
              position: 'bottom-center',
            });
          }
        } else {
          toast.error('Informe o assunto do contato!', {
            position: 'bottom-center',
          });
        }
      } else {
        toast.error('Seu nome deve conter no mínimo 4 caracteres!', {
          position: 'bottom-center',
        });
      }
    } else {
      toast.error('Informe um e-mail válido!', { position: 'bottom-center' });
    }
  }

  return (
    <>
      <Navbar />
      <MandeUmZap />
      <Video url={VideoIntro} playing width="100%" height="auto" />
      <Body>
        <Container>
          <Item>
            <Title>
              <FaMapMarkerAlt className="iconTitle" />
              Endereços
            </Title>

            <Divider />

            <ItemDiv onClick={handleArtLocal}>
              <FaMapMarkerAlt className="iconItem" />
              <div>
                <span className="local">Loja Física</span>
                <span>
                  Avenida Getúlio Vargas, 4786 - Carneirinhos, João Monlevade
                </span>
              </div>
            </ItemDiv>

            <ItemDiv onClick={handleProdLocal}>
              <FaMapMarkerAlt className="iconItem" />
              <div>
                <span className="local">Produção</span>
                <span>
                  Avenida Getúlio Vargas, 6460 - Santa Bárbara, João Monlevade
                </span>
              </div>
            </ItemDiv>
          </Item>

          <Item>
            <Title>
              <FaPhone className="iconTitle" />
              Contato
            </Title>

            <Divider />

            <ItemDiv onClick={handlePhone}>
              <FaPhone className="iconItem" />
              <div>
                <span className="local">Loja Física</span>
                <span>(31) 3852-2029</span>
              </div>
            </ItemDiv>

            <ItemDiv onClick={handleWhatsapp}>
              <FaWhatsapp className="iconItem" />
              <div>
                <span className="local">Atendimento Virtual</span>
                <span>(31)9 8962-0800</span>
              </div>
            </ItemDiv>
          </Item>
        </Container>

        <Container>
          <Item>
            <Title>
              <FaRegEnvelope className="iconTitle" />
              Envie-nos uma mensagem!
            </Title>

            <Divider />

            <Form onSubmit={handleSendMail}>
              <div className="doubleDiv">
                <div className="inputDiv">
                  <span>*Nome</span>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nome Completo"
                  />
                </div>
                <div className="inputDiv">
                  <span>*Telefone</span>
                  <InputMask
                    mask="(99)9 9999-9999"
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    placeholder="(99)9 9999-9999"
                    className="doubleInput"
                  />
                </div>
              </div>

              <div style={{ padding: '5px' }}>
                <span>*Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                />
              </div>

              <div style={{ padding: '5px' }}>
                <span>*Assunto</span>
                <input
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Digite o assunto aqui"
                />
              </div>

              <div style={{ padding: '5px' }}>
                <span>*Mensagem</span>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <button type="submit">Enviar mensagem</button>
            </Form>
          </Item>
        </Container>
      </Body>
      <Footer />
    </>
  );
};

export default Contato;
