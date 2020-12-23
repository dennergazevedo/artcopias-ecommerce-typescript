import React from 'react';

// COMPONENTS
import Video from 'react-player';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Prazo from '../../components/Text/PrazoEntrega';
import MandeUmZap from '../../components/ZapPlugin';

// ASSETS
import VideoIntro from '../../assets/videos/initpage.mp4';

// STYLED COMPONENTS
import { Container } from './styles';

const PrazoEntrega: React.FC = () => {
  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="100%" />
      <MandeUmZap />

      <Container>
        <h2>POLÍTICA DE ENTREGA</h2>
        <Prazo />
      </Container>
      <Footer />
    </>
  );
};

export default PrazoEntrega;
