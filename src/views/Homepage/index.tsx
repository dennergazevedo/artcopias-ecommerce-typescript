/* eslint-disable no-restricted-globals */
import React from 'react';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HiperDestaque from '../../components/HiperDestaque';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';

/** Styled Components */
import { Container, Body } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Container>
        {screen.width > 650 && <Sidebar />}
        <Body>
          <span>teste</span>
        </Body>
      </Container>
      <HiperDestaque />
      <Footer />
    </>
  );
};

export default HomePage;
