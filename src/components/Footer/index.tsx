/*eslint-disable*/
import React from "react";

// COMPONENTS
import Payment from '../Payment';
import ZapPlugin from '../ZapPlugin';

// STYLED-COMPONENTS
import {
  Container
} from './styles';

const Footer: React.FC = () => {
    return (
      <>
      <Payment />
      <Container>
        <span>
          © ArtCópias {new Date().getFullYear()} - Todos os direitos reservados -
          Art Cópias Copiadora Boroni LTDA - CNPJ: 07.471.796/0001-00
        </span>
        <span>
        Avenida Getúlio Vargas, 4786 - Carneirinhos - CEP: 35930-004 -
        João Monlevade/MG - Criado por{" "}
          <a
            href="https://www.instagram.com/dennergazevedo/"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp;dnr
          </a>
        </span>
      </Container>
      <ZapPlugin />
      </>
    );
}

export default Footer;
