/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** Icons */
import {
  FaUser,
  FaMailBulk,
  FaAddressCard,
  FaPhone,
  FaAngleDoubleRight,
  FaEnvelope,
  FaAsterisk,
  FaList,
} from 'react-icons/fa';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../../store';
import { IUser, IAuth } from '../../../store/ducks/auth/types';

/** Components */
import ModalPessoal from '../ModalPessoal';
import ModalCadastro from '../ModalCadastro';

/** Services */
import api from '../../../services/api';

/** Styled Components */
import { Container, Left, Right, Title, Item, Divider, Tab } from './styles';

/** Interface */
interface IProps {
  data: IAuth;
}

const TabPerfil: React.FC<IProps> = ({ data }: IProps) => {
  const [menu, setMenu] = useState(1);
  const [user, setUser] = useState<IUser>();

  async function loadData() {
    const response = await api.get(`client_byemail/${data.email}`);
    setUser(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Left>
        <Title>
          <FaList className="iconItem" />
          Menu
        </Title>

        <Item onClick={() => setMenu(1)}>
          <FaUser className="iconItem" />
          Dados Pessoais
        </Item>

        <Item onClick={() => setMenu(2)}>
          <FaMailBulk className="iconItem" />
          Dados Cadastrais
        </Item>
      </Left>

      {global.screen.width > 600 && global.window.innerWidth > 600 ? (
        <Divider />
      ) : null}

      <Right>
        {menu === 1 ? (
          <Tab>
            <span className="tabTitle">
              <FaAngleDoubleRight className="iconTab" />
              Dados Pessoais
            </span>
            <span>
              <FaUser className="iconTab" />
              {user?.name}
            </span>
            <span>
              <FaAddressCard className="iconTab" />
              {user?.document}
            </span>
            <span>
              <FaPhone className="iconTab" />
              {user?.phone}
            </span>
            <ModalPessoal />
          </Tab>
        ) : null}

        {menu === 2 ? (
          <Tab>
            <span className="tabTitle">
              <FaAngleDoubleRight className="iconTab" />
              Dados Cadastrais
            </span>
            <span>
              <FaEnvelope className="iconTab" />
              {user?.email}
            </span>
            <span>
              <FaAsterisk className="iconTab" />
              **********
            </span>
            <ModalCadastro />
          </Tab>
        ) : null}
      </Right>
    </Container>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(TabPerfil);
