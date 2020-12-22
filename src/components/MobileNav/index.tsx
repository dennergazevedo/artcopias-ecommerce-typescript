/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

// STYLED COMPONENTS
import { Container } from './styles';

// SERVICES
import history from '../../services/history';

const MobileNav: React.FC = () => {
  return (
    <Container>
      <span onClick={() => history.push('/products_menu/Covid')}>COVID 19</span>
      <span onClick={() => history.push('/products_menu/Adesivos')}>
        ADESIVOS
      </span>
      <span onClick={() => history.push('/products_menu/Lonas')}>
        LONAS / BANNER
      </span>
      <span onClick={() => history.push('/products_menu/Brindes')}>
        BRINDES
      </span>
      <span onClick={() => history.push('/products_menu/Festa')}>
        FAÇA SUA FESTA
      </span>
      <span onClick={() => history.push('/products_menu/Empresarial')}>
        EMPRESARIAL
      </span>
    </Container>
  );
};

export default MobileNav;
