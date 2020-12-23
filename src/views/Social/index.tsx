/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

/** Icons */
import { FaInstagram } from 'react-icons/fa';

/** Components */
import Lottie from 'react-lottie';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MandeUmZap from '../../components/ZapPlugin';

/** Assets */
import wpp from '../../assets/img/WHATS.png';
import insta from '../../assets/img/INSTA.png';
import face from '../../assets/img/FACE.png';
import like from '../../assets/json/socialpage.json';

/** Styled Components */
import { Container, InstaContainer, Title, Main } from './styles';

const Social: React.FC = () => {
  const likeOptions = {
    loop: true,
    autoplay: true,
    animationData: like,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Navbar />
      <MandeUmZap />

      <Container>
        <div>
          <Lottie options={likeOptions} width="auto" height="auto" />
        </div>
        <div className="listIcons">
          <a
            href="https://api.whatsapp.com/send?phone=5531989620800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wpp} alt="WhatsApp" />
          </a>

          <a
            href="https://instagram.com/artcopiasjm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/art.copias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={face} alt="Facebook" />
          </a>
        </div>
      </Container>

      <Main>
        <InstaContainer>
          <Title>
            <FaInstagram className="iconInsta" />
            <span>Conheça nosso instagram</span>
          </Title>
          <div className="elfsight-app-2be7fab3-8c42-4692-b8d3-0b24ab41ac76" />
        </InstaContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Social;
