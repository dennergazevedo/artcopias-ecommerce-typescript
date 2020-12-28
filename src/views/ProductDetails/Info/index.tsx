/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

/** Icons */
import { FaInfoCircle } from 'react-icons/fa';

/** Styled Components */
import { Container, Title, Body, Item } from './styles';

/** Interfaces */
import { IProduct } from '../index';

interface IProps {
  product: IProduct | undefined;
}

const Info: React.FC<IProps> = ({ product }: IProps) => {
  function insertData() {
    const tec = document.getElementById('info') as HTMLInputElement;
    if (product) tec.innerHTML = product.info;
  }

  useEffect(() => {
    if (product) insertData();
  }, [product]);

  return (
    <Container>
      <Title>
        INFORMAÇÕES EXTRAS
        <FaInfoCircle className="iconTitle" />
      </Title>
      <Body>
        <Item>
          <span id="info" />
        </Item>
      </Body>
    </Container>
  );
};

export default Info;
