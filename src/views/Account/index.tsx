import React from 'react';

/** Icons */
import { FaHome } from 'react-icons/fa';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Components */
import Navbar from '../../components/Navbar';
import Destaques from '../../components/Destaques';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import MandeUmZap from '../../components/ZapPlugin';
import Slider from '../../components/Slider';
import TabPerfil from './TabPerfil';

/** Styled Components */
import { Container, Title, Subtitle } from './styles';

interface IProps {
  data: IAuth;
}

const Perfil: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <>
      <Navbar />
      <MandeUmZap />
      <Slider />

      <Container>
        <Title>
          <FaHome className="titleIcon" />
          Minha Conta
        </Title>
        <Subtitle>
          {`Olá, ${data.name}, bem vindo(a) à sua conta Art Cópias.`}
        </Subtitle>
        <TabPerfil />
        <Destaques />
      </Container>

      <Card />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(Perfil);
