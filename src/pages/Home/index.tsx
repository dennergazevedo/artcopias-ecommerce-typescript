import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import { Container, Logomarca, Body, Icons } from './styles';

const Home: React.FC = () => {
  const gitHubLink = 'https://github.com/pedrovasalmeida';
  const linkedInLink =
    'https://www.linkedin.com/in/pedro-vasconcellos-a272851a0/';

  return (
    <Container>
      <Logomarca src={logo} alt="Logo" />

      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>

      <Icons>
        <FaGithub className="icon" onClick={() => window.open(gitHubLink)} />
        <FaLinkedinIn
          className="icon"
          onClick={() => window.open(linkedInLink)}
        />
      </Icons>
    </Container>
  );
};

export default Home;
