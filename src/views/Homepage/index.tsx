/* eslint-disable no-restricted-globals */
import React from 'react';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HiperDestaque from '../../components/HiperDestaque';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import InfoNav from '../../components/InfoNav';
import MobileNav from '../../components/MobileNav';
import Destaques from '../../components/Destaques';

/** Styled Components */
import { Container, Body } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <InfoNav />
      {screen.width < 800 && <MobileNav />}
      <Container>
        {screen.width > 700 && <Sidebar />}
        <Body>
          <Destaques />
        </Body>
      </Container>
      <HiperDestaque />
      <Footer />
    </>
  );
};

export default HomePage;
