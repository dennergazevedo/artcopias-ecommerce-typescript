/* eslint-disable no-return-assign */
import React from 'react';

import { Container, Logomarca, Body } from './styles';

import logo from '../../assets/logo.png';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Logomarca src={logo} alt="Logo" />

      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>

      <span className="notFound">PÁGINA NÃO ENCONTRADA</span>
      <button
        type="button"
        className="back"
        onClick={() => (window.location.href = '/')}
      >
        VOLTAR PARA PÁGINA INICIAL
      </button>
    </Container>
  );
};

export default NotFound;
