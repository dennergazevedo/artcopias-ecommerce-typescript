/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

/** Services */
import { toast } from 'react-toastify';

/** Icons */
import { FaEdit } from 'react-icons/fa';

/** Components */
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import Modal from '../../../components/Modal';
import store, { IApplicationState } from '../../../store';
import { IAuth, IUser } from '../../../store/ducks/auth/types';

/** Styles Components */
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
import { ClientTypes } from '../../../store/ducks/client/types';

interface IProps {
  data: IAuth;
}

const ModalPessoal: React.FC<IProps> = ({ data }: IProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [profile, setProfile] = useState<IUser>();

  async function loadData() {
    const response = await api.get(`client_byemail/${data.email}`);
    setProfile(response.data);
    setPhone(response.data.phone);
  }

  useEffect(() => {
    loadData();
  }, []);

  const toggle = () => setModal(!modal);

  const confirmOk = () => {
    event?.preventDefault();
    if (window.confirm(`Deseja trocar seu telefone para ${phone}?`)) {
      toast.info(`Aguarde, processando...`, { position: 'bottom-center' });
      store.store.dispatch({
        type: ClientTypes.CLIENT_UPDATE,
        data: {
          id: profile?.id,
          phone,
        },
      });
    }
  };

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
                <span>*Nome</span>
                <input value={data.name} disabled />
              </div>

              <div className="divItem">
                <span>*Documento</span>
                <input value={profile?.document} disabled />
              </div>
            </div>

            <div className="doubleDiv">
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

export default connect(mapStateToProps)(ModalPessoal);
