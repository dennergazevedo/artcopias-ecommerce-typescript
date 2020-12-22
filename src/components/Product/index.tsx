/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

// SERVICES
import api from '../../services/api';
import history from '../../services/history';

// ASSETS
import circle from '../../assets/img/circle.png';

// STYLED COMPONENTS
import { Container, ImgDiv, Nome, Price, Unidade } from './styles';

/** Interfaces */
interface IProps {
  profile: IAuth;
  product: IProduct;
}

interface IProduct {
  id: number;
  unit: number;
  photo: string;
  name: string;
  value: number;
  provider_value: number;
}

function Product({ product, profile }: IProps) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [url, setUrl] = useState('');

  async function loadPhoto() {
    const { data } = await api.get(`file/${product.photo}`);
    setUrl(data.url);
  }

  useEffect(() => {
    loadPhoto();
  }, []);

  const handleDetails = () => {
    history.push(`/product-details/${product.id}`);
  };

  return (
    <Container onClick={handleDetails}>
      <ImgDiv
        onClick={handleDetails}
        onMouseOver={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        {mouseEnter ? (
          <>
            <img src={url} alt="PRODUTO" className="imgOn" />
            <img src={circle} alt="FUNDO" className="circle" />
          </>
        ) : (
          <img src={url} alt="PRODUTO" className="imgOff" />
        )}
      </ImgDiv>

      <Nome onClick={handleDetails}>{product.name}</Nome>

      <Price>
        <span style={{ fontSize: '12px' }}>R$</span>

        {Number(profile.provider) ===
        Number(process.env.REACT_APP_PROVIDER_DEALER) ? (
          <span>{product.provider_value.toFixed(2)}</span>
        ) : (
          <span>{product.value.toFixed(2)}</span>
        )}
      </Price>

      <Unidade onClick={handleDetails}>
        {(product.unit === 1 || product.unit === 4) && <span>( Unidade )</span>}
        {product.unit === 2 && <span>( Metro Quadrado )</span>}
        {product.unit === 3 && <span>( Metro Linear )</span>}
      </Unidade>
    </Container>
  );
}

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(Product);
