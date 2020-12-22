import React, { useState, useEffect } from 'react';

/** Icons */
import { FaStar } from 'react-icons/fa';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Services */
import api from '../../services/api';

/** Styled Components */
import { Container, Title, Body } from './styles';

/** Components */
import Product from '../Product';

/** Interfaces */
interface IMapProduct {
  id: number;
  unit: number;
  photo: string;
  name: string;
  value: number;
  provider_value: number;
}

interface IProps {
  data: IAuth;
}

function Destaques({ data }: IProps) {
  useEffect(() => {
    loadProducts();
  }, []);

  const [products, setProducts] = useState<IMapProduct[]>([]);

  async function loadProducts() {
    const response = await api.get('search_star');
    setProducts(response.data);
  }

  return (
    <Container>
      <Title>
        <FaStar className="icon" />
        <span>Destaques</span>
      </Title>

      {products ? (
        <Body>
          {products.map(item => (
            <div key={item.id}>
              <Product product={item} profile={data} />
            </div>
          ))}
        </Body>
      ) : null}
    </Container>
  );
}

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(Destaques);
