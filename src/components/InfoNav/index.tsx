import React from 'react';

// ICONS
import { FaShippingFast, FaRegComments, FaRegCreditCard } from 'react-icons/fa';

// STYLED COMPONENTS
import { Container, Item } from './styles';

const InfoNav: React.FC = () => {
  return (
    <Container>
      <Item>
        <FaShippingFast className="iconItem" />
        <span>
          Fique tranquilo, o seu pedido está em boas mãos! Contamos com
          PAC/SEDEX para nos auxiliar a te entregar o seu produto na qualidade
          que você merece.
        </span>
      </Item>

      <Item>
        <FaRegComments className="iconItem" />
        <span>
          Está com dúvidas? Isso não é problema, nosso Suporte Online está às
          ordens para te ajudar com qualquer que seja a sua dúvida.
        </span>
      </Item>

      <Item>
        <FaRegCreditCard className="iconItem" />
        <span>
          Vai comprar no Cartão de Crédito? Fique tranquilo(a), seus dados estão
          à salvo com a gente, contamos com o Certificado SSL para sua proteção
          e confiança!
        </span>
      </Item>
    </Container>
  );
};

export default InfoNav;
