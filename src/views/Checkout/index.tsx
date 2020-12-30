/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

/** Icons */
import { FaTruck, FaCheckCircle, FaArrowCircleLeft } from 'react-icons/fa';

/** Services */
import Video from 'react-player';
import history from '../../services/history';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import MandeUmZap from '../../components/ZapPlugin';

/** Assets */
import VideoIntro from '../../assets/videos/initpage.mp4';

/** Styled Components */
import { Container, DivBody, TitleAddress, SubTitle, Back } from './styles';

const Checkout: React.FC = () => {
  return (
    <>
      <MandeUmZap />
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="auto" />
      <Container>
        <DivBody>
          <TitleAddress>
            <FaTruck className="iconTitle" />
            Selecione a Entrega
          </TitleAddress>
          <SubTitle>
            <FaCheckCircle className="iconTitle" />
            ENTREGAS EM TODO O BRASIL.
          </SubTitle>
        </DivBody>
        <Back onClick={() => history.push('/')}>
          <FaArrowCircleLeft className="icon" />
          VOLTAR ÀS COMPRAS
        </Back>
      </Container>

      <Card />
      <Footer />
    </>
  );
};

export default Checkout;
