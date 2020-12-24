/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

/** Icons */
import { FaFileInvoiceDollar } from 'react-icons/fa';

/** Components */
import validator from 'validator';
import InputMask from 'react-input-mask';
import Video from 'react-player';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';

// STYLED COMPONENTS
import { Container, Title, Subtitle, Nota, Form } from './styles';
import store from '../../store';
import { MailTypes } from '../../store/ducks/mail/types';

// ICONS

const Orçamento: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [company, setCompany] = useState<string>('');

  async function sendMail() {
    event?.preventDefault();
    if (validator.isEmail(email)) {
      if (name !== '' && phone !== '' && product !== '' && message !== '') {
        toast.info('Aguarde, processando...', { position: 'bottom-center' });
        store.store.dispatch({
          type: MailTypes.MAIL_BUDGET_REQUEST,
          data: {
            name,
            phone,
            email,
            product,
            message,
            company,
          },
        });
        toast.info('Este processo pode levar alguns segundos...', {
          position: 'bottom-center',
        });
        setName('');
        setEmail('');
        setMessage('');
        setCompany('');
        setPhone('');
        setProduct('');
      } else {
        toast.error('Preencha todos os dados e tente novamente!', {
          position: 'bottom-center',
        });
      }
    } else {
      toast.error('Digite um e-mail válido!', { position: 'bottom-center' });
    }
  }

  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="100%" />

      <Container>
        <Title>
          <FaFileInvoiceDollar className="titleIcon" />
          Orçamento Personalizado
        </Title>
        <Subtitle>
          Aqui você pode solicitar orçamento para um produto que não encontrou
          em nosso site.
        </Subtitle>
        <Nota style={{ width: 'auto' }}>
          *O orçamento será respondido através do e-mail enviado no formulário
          abaixo.
        </Nota>

        <Form onSubmit={sendMail}>
          <Subtitle>Preencha todos os dados com atenção e clareza.</Subtitle>

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
              <span>*Empresa</span>
              <input
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Nome da Empresa"
              />
            </div>
          </div>

          <div className="msgItem">
            <span>*Produto</span>
            <input
              value={product}
              onChange={e => setProduct(e.target.value)}
              placeholder="Dê um nome ao produto"
            />
          </div>

          <div className="msgItem" style={{ marginTop: '10px' }}>
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
      <Footer />
    </>
  );
};

export default Orçamento;
