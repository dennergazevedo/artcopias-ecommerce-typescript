/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

/** Icons */
import { FaHandshake } from 'react-icons/fa';

/** Services */
import { toast } from 'react-toastify';
import validator from 'validator';
import InputMask from 'react-input-mask';
import Video from 'react-player';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** Assets */
import produto01 from '../../assets/img/produto01.png';
import produto02 from '../../assets/img/produto02.png';
import VideoIntro from '../../assets/videos/initpage.mp4';
import WorkWithUs from '../../assets/img/workwithus.png';

/** Redux */
import store from '../../store';

/** Styled Components */
import { Container, Title, Subtitle, Nota, Imagens, Form } from './styles';
import { ClientTypes } from '../../store/ducks/client/types';

const TrabalheConosco: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [document, setDocument] = useState('');
  const [tipo, setTipo] = useState('1');
  const [city, setCity] = useState('');

  async function mailSend() {
    event?.preventDefault();
    if (validator.isEmail(email)) {
      if (name !== '' && phone !== '' && message !== '' && document !== '') {
        toast.info('Aguarde, processando...', { position: 'bottom-center' });
        store.store.dispatch({
          type: ClientTypes.CLIENT_PARTNER,
          data: {
            name,
            email,
            phone,
            document,
            city,
            message,
          },
        });
      } else {
        toast.error('Preencha todos os dados!', { position: 'bottom-center' });
      }
    } else {
      toast.error('Digite um e-mail válido', { position: 'bottom-center' });
    }
  }

  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="auto" />

      <Container>
        <Title>
          <FaHandshake className="titleIcon" />
          Seja um parceiro da Art Cópias
        </Title>
        <Subtitle>
          Parceiros da Art Cópias tem descontos especiais em todas as compras
          realizadas em nosso site de maneira rápida e fácil!
        </Subtitle>

        <Imagens>
          <img src={produto01} alt="Produto Original" width="250px" />
          <img src={produto02} alt="Produto Original" width="250px" />
        </Imagens>

        <Nota>
          *Este tipo de cadastro é reservado à Designers Gráficos e/ou
          interessados em revender produtos da Art Cópias, cliente final não
          terá acesso à este tipo de cadastro para compras casuais.
        </Nota>

        <Form onSubmit={mailSend}>
          <Title>Ficou interessado(a)?</Title>
          <Subtitle>
            Preencha o formulário abaixo para solicitar uma avaliação. Em breve
            nossa equipe entrará em contato com você!
          </Subtitle>

          <div className="doubleDiv">
            <div className="divItem">
              <span>*Nome</span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome Completo"
              />
            </div>
            <div className="divItem">
              <span>*Telefone</span>
              <InputMask
                mask="(99)9 9999-9999"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                placeholder="(99)9 9999-9999"
              />
            </div>
          </div>

          <div className="doubleDiv">
            <div className="divItem">
              <span>*Email</span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="exemplo@email.com"
              />
            </div>
            <div className="divItem">
              <span>*Cidade</span>
              <input
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Belo Horizonte"
              />
            </div>
          </div>

          <div className="doubleDiv">
            <div className="divItem">
              <span>Tipo de pessoa</span>
              <select value={tipo} onChange={e => setTipo(e.target.value)}>
                <option value={1}>Pessoa Física</option>
                <option value={2}>Pessoa Jurídica</option>
              </select>
            </div>

            {tipo === '1' ? (
              <div className="divItem">
                <span>*CPF</span>
                <InputMask
                  mask="999.999.999-99"
                  onChange={e => setDocument(e.target.value)}
                  value={document}
                  placeholder="999.999.999-99"
                />
              </div>
            ) : (
              <div className="divItem">
                <span>*CNPJ</span>
                <InputMask
                  mask="99.999.999/9999-99"
                  onChange={e => setDocument(e.target.value)}
                  value={document}
                  placeholder="99.999.999/9999-99"
                />
              </div>
            )}
          </div>

          <div className="msgItem">
            <span>*Mensagem</span>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Escreva algo para nós..."
            />
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </Container>

      <img src={WorkWithUs} alt="Trabalhe Conosco" width="100%" />
      <Footer />
    </>
  );
};

export default TrabalheConosco;
