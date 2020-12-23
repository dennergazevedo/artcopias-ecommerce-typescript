/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

/** Components */
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import validator from 'validator';
import validarCPF from 'validar-cpf';

/** Icons */
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';

/** Redux */
import store from '../../store';

/** Styled Components */
import { Container, Left, Right, Title, Form } from './styles';

/** Services */
import history from '../../services/history';

/** Components */
import MandeUmZap from '../../components/ZapPlugin';
import Slider from '../../components/Slider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ClientTypes } from '../../store/ducks/client/types';
import { AuthTypes } from '../../store/ducks/auth/types';

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [emailReg, setEmailReg] = useState<string>('');
  const [passwordReg, setPasswordReg] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleForgotPassword = () => {
    history.push('/forgot-password');
  };

  function handleRegister() {
    if (validator.isEmail(emailReg)) {
      if (passwordReg === passwordConfirm) {
        if (passwordReg.length >= 8) {
          if (validarCPF(cpf)) {
            if (name.length > 4) {
              toast.info('Aguarde, processando...', {
                position: 'bottom-center',
              });
              store.store.dispatch({
                type: ClientTypes.CLIENT_REGISTER_REQUEST,
                data: {
                  name,
                  email: emailReg,
                  password: passwordReg,
                  cpf,
                  phone,
                },
              });
            } else {
              toast.error('Seu nome deve ter no mínimo 4 caracteres!', {
                position: 'bottom-center',
              });
            }
          } else {
            toast.error('Digite um CPF válido!', { position: 'bottom-center' });
          }
        } else {
          toast.error('Sua senha deve ter no mínimo 8 caracteres!', {
            position: 'bottom-center',
          });
        }
      } else {
        toast.error('As senhas não batem!', { position: 'bottom-center' });
      }
    } else {
      toast.error('Digite um e-mail válido!', { position: 'bottom-center' });
    }
  }

  function handleLogin() {
    if (validator.isEmail(email)) {
      if (password.length >= 8) {
        toast.info('Aguarde, processando...', { position: 'bottom-center' });
        store.store.dispatch({
          type: AuthTypes.AUTH_REQUEST,
          data: {
            email,
            password,
          },
        });
      } else {
        toast.error('Sua senha deve ter no mínimo 8 caracteres!', {
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
      <MandeUmZap />
      <Slider />
      <Container>
        <Left>
          <Title>
            <h3>
              <FaUserAlt className="iconTitle" />
              Já está cadastrado?
            </h3>
            <span>Preencha seus dados com atenção.</span>
          </Title>
          <Form>
            <div>
              <span>*E-mail:</span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="email@exemplo.com"
              />
            </div>

            <div>
              <span>*Senha:</span>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="**********"
              />
            </div>

            <div>
              <span className="forgotPass" onClick={handleForgotPassword}>
                Esqueceu sua senha?
              </span>
            </div>

            <button type="button" onClick={handleLogin}>
              Entrar
            </button>
          </Form>
        </Left>
        <Right>
          <Title>
            <h3>
              <FaUserPlus className="iconTitle" />
              Não possui cadastro?
            </h3>
            <span>
              Cadastre-se agora mesmo em nosso site, é rápido e fácil!
            </span>
          </Title>
          <Form>
            <div>
              <span>*Nome:</span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Nome Completo"
              />
            </div>

            <div>
              <span>*E-mail:</span>
              <input
                value={emailReg}
                onChange={e => setEmailReg(e.target.value)}
                type="email"
                placeholder="email@exemplo.com"
              />
            </div>

            <div className="doubleDiv">
              <div>
                <span>*Senha:</span>
                <input
                  value={passwordReg}
                  onChange={e => setPasswordReg(e.target.value)}
                  type="password"
                  placeholder="**********"
                  className="doubleInput"
                />
              </div>

              <div>
                <span>*Confirmar Senha:</span>
                <input
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  type="password"
                  placeholder="**********"
                  className="doubleInput"
                />
              </div>
            </div>

            <div className="doubleDiv">
              <div>
                <span>*CPF:</span>
                <InputMask
                  mask="999.999.999-99"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                  placeholder="999.999.999-99"
                  className="doubleInput"
                />
              </div>

              <div>
                <span>*Telefone / Celular:</span>
                <InputMask
                  mask="(99)9 9999-9999"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="(99)9 9999-9999"
                  className="doubleInput"
                />
              </div>
            </div>

            <button type="button" onClick={handleRegister}>
              Cadastrar
            </button>
          </Form>
        </Right>
      </Container>
      <Footer />
    </>
  );
};

export default Cadastro;
