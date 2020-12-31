/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

/** Services */
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

/** Icons */
import { FaEdit } from 'react-icons/fa';

/** Components */
import Modal from '../../../components/Modal';

/** Redux */
import store, { IApplicationState } from '../../../store';
import { IAuth } from '../../../store/ducks/auth/types';
import { ClientTypes } from '../../../store/ducks/client/types';

/** Styled Components */
import {
  Button,
  Header,
  Title,
  Subtitle,
  Form,
  ModalFooter,
  Divider,
  ModalBody,
} from './styles';

/** Services */
import api from '../../../services/api';

interface IProps {
  data: IAuth;
}

const ModalCadastro: React.FC<IProps> = ({ data }: IProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordc, setPasswordC] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');

  async function confirmOk() {
    event?.preventDefault();
    if (window.confirm('Deseja realmente alterar a sua senha?')) {
      if (oldPassword) {
        if (password.length >= 8) {
          if (password === passwordc) {
            toast.info('Aguarde, processando...', {
              position: 'bottom-center',
            });
            const response = await api.get(`client_byemail/${data.email}`);
            store.store.dispatch({
              type: ClientTypes.CLIENT_UPDATE_PASS,
              data: {
                id: response.data.id,
                password,
                oldPassword,
              },
            });
            toggle();
            setTimeout(function () {
              window.location.reload();
            }, 3000);
          } else {
            toast.error('As senhas não conferem!');
          }
        } else {
          toast.error('Sua senha deve ter no mínimo 8 caracteres!');
        }
      } else {
        toast.error('É necessário preencher a sua senha antiga!');
      }
    }
  }

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle}>Editar</Button>
      <Modal isToggled={modal}>
        <ModalBody>
          <Header>
            <Title>
              <FaEdit className="iconTitle" />
              Editar dados pessoais
            </Title>
            <Subtitle>
              *Mantenha seu telefone sempre atualizado e edite com atenção!
            </Subtitle>
          </Header>

          <Form>
            <div className="doubleDiv">
              <div className="divItem">
                <span>*Email</span>
                <input value={data.email} disabled />
              </div>

              <div className="divItem">
                <span>*Senha antiga</span>
                <input
                  placeholder="*********"
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                  type="password"
                />
              </div>
            </div>

            <div className="doubleDiv">
              <div className="divItem">
                <span>*Nova senha</span>
                <input
                  placeholder="*********"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                />
              </div>

              <div className="divItem">
                <span>*Confirmar senha</span>
                <input
                  placeholder="*********"
                  value={passwordc}
                  onChange={e => setPasswordC(e.target.value)}
                  type="password"
                />
              </div>
            </div>

            <Divider />

            <ModalFooter>
              <button type="button" onClick={toggle} className="cancel">
                Cancelar
              </button>
              <button type="button" onClick={confirmOk} className="confirm">
                Confirmar
              </button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(ModalCadastro);
