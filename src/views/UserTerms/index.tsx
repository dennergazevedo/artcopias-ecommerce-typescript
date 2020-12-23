import React from 'react';

/** Components */
import Video from 'react-player';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MandeUmZap from '../../components/ZapPlugin';
import TermosText from '../../components/Text/TermosDeUso';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';

/** Styled Components */
import { Container } from './styles';

const TermosDeUso: React.FC = () => {
  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="100%" />
      <MandeUmZap />
      <Container>
        <h2>TERMOS DE USO</h2>
        <TermosText />
      </Container>
      <Footer />
    </>
  );
};

export default TermosDeUso;
