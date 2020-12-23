/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

/** Services */
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';

/** Icons */
import { FaUnlockAlt } from 'react-icons/fa';

/** Components */
import Slider from '../../components/Slider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** Styled Components */
import { Container, Form, Title, FormPassword } from './styles';

/** Redux */
import store from '../../store';
import { ClientTypes } from '../../store/ducks/client/types';

interface IParams {
  token: string;
  email: string;
}

const ResetPassword: React.FC = () => {
  const params: IParams = useParams<IParams>();

  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  useEffect(() => {
    setToken(params.token);
    setEmail(params.email);
  }, [params]);

  const handleResetPass = () => {
    event?.preventDefault();
    if (password === passwordConf) {
      if (validator.isEmail(email)) {
        toast.info('Aguarde, processando...', { position: 'bottom-center' });
        store.store.dispatch({
          type: ClientTypes.CLIENT_RESETPASS,
          data: {
            email,
            token,
            password,
          },
        });
      } else {
        toast.error('Insira um e-mail válido!');
      }
    } else {
      toast.error('As senhas devem ser iguais!');
    }
  };

  return (
    <>
      <Navbar />
      <Slider />

      <Container>
        <Form onSubmit={handleResetPass}>
          <Title>
            <span className="title">
              <FaUnlockAlt className="icon" />
              Recuperar senha
            </span>
            <span className="subTitle">Preencha os dados com atenção.</span>
          </Title>
          <span className="descricao">
            Para redefinir a sua senha, basta preencher os campos abaixo com sua
            nova senha e clicar em REDEFINIR.
          </span>
          <input
            placeholder="exemplo@email.com"
            type="email"
            value={email}
            disabled
            onChange={e => setEmail(e.target.value)}
          />
          <FormPassword>
            <input
              placeholder="Nova senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirme sua senha"
              type="password"
              value={passwordConf}
              onChange={e => setPasswordConf(e.target.value)}
            />
          </FormPassword>
          <button type="submit">
            <FaUnlockAlt className="iconButton" />
            REDEFINIR
          </button>

          <span onClick={() => window.history.back()} className="buttonBack">
            VOLTAR
          </span>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default ResetPassword;
