/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

/** Icons */
import { FaCoins, FaShoppingBasket, FaStopwatch } from 'react-icons/fa';

/** Services */
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import api from '../../services/api';
import history from '../../services/history';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Template from './Template';

/** Styled Components */
import {
  Container,
  Left,
  Title,
  Prazo,
  Imagem,
  Gabarito,
  Right,
  Resumo,
  BodyResumo,
  LottieContainer,
} from './styles';

/** Lottie */
import loadingLottie from '../../assets/json/loading.json';

/** Components */
import SizeQnt from './SizeQnt';
import Arte from './Arte';
import Acabamento from './Acabamento';
import Info from './Info';

/** Interfaces */
interface IParams {
  id: string;
}

export interface IProduct {
  name: string;
  unit: number;
  value: number;
  provider_value: number;
  minvalue: number;
  minsize: number;
  width: number;
  estoque: number;
  info: string;
  photo: string;
  template: number;
  deadline: number;
  finishing: string;
}

const ProductDetails: React.FC = () => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const params = useParams<IParams>();

  const [product, setProduct] = useState<IProduct | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const [valueFinishing, setValueFinishing] = useState<number>(0);

  /** States */
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [menu, setMenu] = useState<number>(1);
  const [obs, setObs] = useState<string>('');
  const [art, setArt] = useState<boolean | null>(false);
  const [finishing, setFinishing] = useState<string>('');

  async function loadProduct() {
    const response = await api.get(`product/${params.id}`);
    setProduct(response.data);
    setLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      {loading ? (
        <LottieContainer>
          <Lottie options={loadingOptions} height="100px" width="100px" />
        </LottieContainer>
      ) : (
        <Container>
          <Left>
            <Title>
              <FaShoppingBasket className="iconTitle" />
              <span>{String(product?.name).toUpperCase()}</span>
            </Title>
            <Prazo>
              <FaStopwatch className="icon" />
              <span>PRAZO DE PRODUÇÃO: </span>
              <b>{`${product?.deadline} DIAS ÚTEIS`}</b>
            </Prazo>
            <Imagem>
              <img src={product?.photo} alt={product?.name} />
            </Imagem>
            <Gabarito>
              <Template template={product?.template} />
            </Gabarito>
            <Resumo>
              <Title>
                <FaCoins className="iconTitle" />
                <span>RESUMO DA COMPRA</span>
              </Title>
              <BodyResumo>
                <div>
                  <span className="title">SUBTOTAL:</span>
                  <span>{`R$${Number(0).toFixed(2)}`}</span>
                </div>
                <div>
                  <span className="title">ARTE:</span>
                  {art ? (
                    <span>{`R$${Number(35).toFixed(2)}`}</span>
                  ) : (
                    <span>{`R$${Number(0).toFixed(2)}`}</span>
                  )}
                </div>
                <div>
                  <span className="title">ACABAMENTO:</span>
                  <span>{`R$${0}`}</span>
                </div>
                <div>
                  <span className="title">FRETE:</span>
                  <span>À CALCULAR</span>
                </div>
                <div>
                  <span className="title">PEDIDO MÍNIMO:</span>
                  {product?.unit === 2 || product?.unit === 3 ? (
                    <span>{`R$${Number(product?.minvalue).toFixed(2)}`}</span>
                  ) : (
                    <span>{`${Number(product?.minvalue)} und.`}</span>
                  )}
                </div>
                <div>
                  <span className="title">TOTAL:</span>
                  {(product?.unit === 2 || product?.unit === 3) &&
                  product.minvalue > total ? (
                    <span>
                      {`R$${product.minvalue + valueFinishing.toFixed(2)}`}
                    </span>
                  ) : (
                    <span>
                      {`R$${Number(total + valueFinishing).toFixed(2)}`}
                    </span>
                  )}
                </div>
              </BodyResumo>
            </Resumo>
          </Left>
          <Right>
            {menu === 1 && (
              <SizeQnt
                height={height}
                product={product}
                quantity={quantity}
                setHeight={setHeight}
                setMenu={setMenu}
                setQuantity={setQuantity}
                setWidth={setWidth}
                width={width}
              />
            )}
            {menu === 2 && (
              <Arte
                art={art}
                obs={obs}
                product={product}
                setArt={setArt}
                setMenu={setMenu}
                setObs={setObs}
              />
            )}
            {menu === 3 && (
              <Acabamento
                product={product}
                setFinishing={setFinishing}
                setMenu={setMenu}
              />
            )}
            <Info product={product} />
          </Right>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;
