/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
import React, { useState } from 'react';

/** Icons */
import { FaUnlockAlt } from 'react-icons/fa';

/** Services */
import { toast } from 'react-toastify';
import validator from 'validator';
import history from '../../services/history';

/** Redux */
import store from '../../store';
import { ClientTypes } from '../../store/ducks/client/types';

/** Components */
import Slider from '../../components/Slider';
import Destaques from '../../components/Destaques';
import MandeUmZap from '../../components/ZapPlugin';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** Styled Components */
import { Container, Form, Title } from './styles';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleBack = () => {
    if (
      window.confirm('Todo processo não salvo será perdido, deseja voltar?')
    ) {
      history.push('/');
    }
  };

  const handleResetPass = () => {
    if (validator.isEmail(email)) {
      if (window.confirm(`Um e-mail será enviado para ${email}`)) {
        toast.info('Aguarde, processando...', { position: 'bottom-center' });
        store.store.dispatch({
          type: ClientTypes.CLIENT_FORGOTPASS,
          data: {
            email,
          },
        });
        setEmail('');
      }
    } else {
      toast.error('Oops! Confira os dados e tente novamente!');
    }
  };

  return (
    <>
      <Navbar />
      <Slider />
      <MandeUmZap />

      <Container>
        <Form>
          <Title>
            <span className="title">
              <FaUnlockAlt className="icon" />
              Esqueceu sua senha de acesso?
            </span>
            <span className="subTitle">Nós a reenviaremos para seu e-mail</span>
          </Title>
          <span className="descricao">
            Se você esqueceu sua senha para acesso ao site, não se preocupe.
            Apenas informe no campo a seguir o endereço de e-mail de cadastro
            que você possui no site e reenviaremos um link para o e-mail
            informado para recuperação.
          </span>
          <input
            placeholder="exemplo@email.com"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type="button" onClick={() => handleResetPass()}>
            <FaUnlockAlt className="iconButton" />
            ENVIAR
          </button>

          <span onClick={handleBack} className="buttonBack">
            VOLTAR
          </span>
        </Form>
        <Destaques />
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPassword;
