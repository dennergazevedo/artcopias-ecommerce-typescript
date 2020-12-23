import React from 'react';

import Lottie from 'react-lottie';

import notFoundLottie from '../../assets/json/404page.json';
import logo from '../../assets/img/logo.png';

/** Style Components */
import { Container } from './styles';

const NotFound: React.FC = () => {
  const pageOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <img src={logo} alt="LOGO" />
      <Lottie options={pageOptions} width="70%" height="auto" />
      <h1>Página não encontrada!</h1>
      <a href="/">← Voltar para página inicial</a>
    </Container>
  );
};

export default NotFound;
