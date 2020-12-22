/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

// STYLED COMPONENTS
import { Container } from './styles';

// SERVICES
import history from '../../services/history';

const MobileNav: React.FC = () => {
  function handleRedirect(local: string) {
    history.push(`/products_menu/${local}`);
    window.location.reload();
  }

  return (
    <Container>
      <span onClick={() => handleRedirect('Covid')}>COVID 19</span>
      <span onClick={() => handleRedirect('Adesivos')}>ADESIVOS</span>
      <span onClick={() => handleRedirect('Lonas')}>LONAS / BANNER</span>
      <span onClick={() => handleRedirect('Brindes')}>BRINDES</span>
      <span onClick={() => handleRedirect('Festa')}>FAÇA SUA FESTA</span>
      <span onClick={() => handleRedirect('Empresarial')}>EMPRESARIAL</span>
    </Container>
  );
};

export default MobileNav;
