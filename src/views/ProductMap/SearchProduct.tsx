/* eslint-disable func-names */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

/** Icons */
import { FaList, FaAngleDoubleRight } from 'react-icons/fa';

/** Material UI */
import { Pagination } from '@material-ui/lab';

/** Redux */
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';

/** Services */
import api from '../../services/api';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/Product';
import InfoNav from '../../components/InfoNav';
import MobileNav from '../../components/MobileNav';
import HiperDestaque from '../../components/HiperDestaque';
import NotResult from '../../components/NotResult';

/** Styled Components */
import { Body, Title, Container, Item, ListItems } from './styles';

/** Interfaces */
interface IProduct {
  id: number;
  unit: number;
  photo: string;
  name: string;
  value: number;
  provider_value: number;
}

interface IProductRequest {
  data: IProduct[];
}

interface IProps {
  data: IAuth;
}

interface IParams {
  name: string;
}

const MenusMap: React.FC<IProps> = ({ data }: IProps) => {
  const params = useParams<IParams>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ordenacao, setOrdenacao] = useState<string>('Menor Preço');
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    loadProducts('Menor Preço');
  }, []);

  async function loadProducts(orden: string) {
    const { data }: IProductRequest = await api.get(
      `/product_name/${params.name}`,
    );
    handleTotalPages(data);
    handleOrder(data, orden);
  }

  async function handleTotalPages(data: IProduct[]) {
    const soma = data.length / 12 + 1;
    setTotalPages(soma);
  }

  const handleOrder = (data: IProduct[], e: string) => {
    if (e === 'Menor Preço') {
      setProducts(
        data.sort(function (a, b) {
          if (a.value > b.value) {
            return 1;
          }
          if (a.value < b.value) {
            return -1;
          }
          return 0;
        }),
      );
    } else if (e === 'Maior Preço') {
      setProducts(
        data.sort(function (a, b) {
          if (a.value > b.value) {
            return -1;
          }
          if (a.value < b.value) {
            return 1;
          }
          return 0;
        }),
      );
    }
  };

  function handleOrdenar(e: string) {
    setOrdenacao(e);
    setProducts([]);
    loadProducts(e);
  }

  function handlePage(page: number) {
    let array = [];
    if (page === 0) {
      const map = Array.from(products).slice(0, 12);
      array = map;
    } else if (page === 1) {
      const end = 12 + 12;
      const map = Array.from(products).slice(12, end);
      array = map;
    } else {
      let end = 12 * page;
      end += 12;
      const map = Array.from(products).slice(12 * page, end);
      array = map;
    }
    setProducts(array);
  }

  // PAGINATION
  const handleChangePage = (event: object, page: number) => {
    setPage(page);
    handlePage(page);
  };

  return (
    <>
      <Navbar />
      <Slider />
      <InfoNav />
      {screen.width < 800 && <MobileNav />}
      <Container>
        {screen.width > 700 && <Sidebar />}
        <Body>
          <Title>
            <span style={{ width: '350px' }}>
              <FaAngleDoubleRight className="iconTitle" />
              {`Busca: ${params.name}`}
            </span>
            <div>
              <span>
                <FaList className="icon" />
                Listar por:
              </span>
              <select
                value={ordenacao}
                onChange={e => handleOrdenar(e.target.value)}
              >
                <option value="Menor Preço">Preço crescente</option>
                <option value="Maior Preço">Preço decrescente</option>
              </select>
            </div>
          </Title>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            size="small"
          />
          {products ? (
            <ListItems>
              {products.map(item => (
                <Item key={item.id}>
                  <Product product={item} profile={data} />
                </Item>
              ))}
            </ListItems>
          ) : (
            <NotResult search="Todos produtos" />
          )}
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            size="small"
          />
        </Body>
      </Container>
      <HiperDestaque />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
});

export default connect(mapStateToProps)(MenusMap);
