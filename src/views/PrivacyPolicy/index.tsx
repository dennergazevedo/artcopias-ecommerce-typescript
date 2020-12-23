import React from 'react';

/** Components */
import Video from 'react-player';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Privacidade from '../../components/Text/PoliticaPrivacidade';
import MandeUmZap from '../../components/ZapPlugin';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';

/** Styled Components */
import { Container } from './styles';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="100%" />
      <MandeUmZap />
      <Container>
        <h1>POLÍTICA DE PRIVACIDADE</h1>
        <Privacidade />
      </Container>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidade;
