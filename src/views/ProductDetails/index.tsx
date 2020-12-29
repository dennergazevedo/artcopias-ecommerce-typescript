/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

/** Icons */
import { FaCoins, FaShoppingBasket, FaStopwatch } from 'react-icons/fa';

/** Services */
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import api from '../../services/api';

/** Redux */
import store, { IApplicationState } from '../../store';
import { IAuth } from '../../store/ducks/auth/types';
import { CartTypes } from '../../store/ducks/cart/types';

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
  id: number;
  name: string;
  unit: number;
  value: number;
  provider_value: number;
  minvalue: number;
  minsize: number;
  width: number;
  height: number;
  estoque: number;
  info: string;
  photo: string;
  template: number;
  deadline: number;
  finishing: string;
}

interface IProps {
  data: IAuth;
  signed: boolean;
}

interface IPricetable {
  up: number;
  value: number;
  provider_value: number;
}

interface IPricetableRequest {
  data: Array<IPricetable>;
}

const ProductDetails: React.FC<IProps> = ({ data, signed }: IProps) => {
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
  const [value, setValue] = useState<number>(0);

  async function loadProduct() {
    const response = await api.get(`product/${params.id}`);
    setProduct(response.data);
    setValue(response.data.value);
    if (response.data.width > 0) setWidth(response.data.width);
    if (response.data.height > 0) setHeight(response.data.height);
    setLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  function handleTotal() {
    let tot = 0;
    if (product?.unit === 1 || product?.unit === 4) {
      tot = value * quantity;
    } else if (product?.unit === 2) {
      const m2 = (width / 100) * (height / 100) * quantity;
      tot = value * m2;
    } else {
      const ml = (height / 100) * Number(quantity);
      tot = value * ml;
    }
    if (art) {
      setTotal(tot + 35);
    } else {
      setTotal(tot);
    }
  }

  useEffect(() => {
    handleTotal();
  }, [width, height, quantity, art, value]);

  async function handlePricetable() {
    const response: IPricetableRequest = await api.get(
      `pricetable_byproduct/${product?.id}`,
    );
    setValue(product?.value || 0);
    for (let i = 0; i < response.data.length; i++) {
      if (product?.unit === 1 || product?.unit === 4) {
        /** UNIDADE */
        if (quantity >= response.data[i].up) {
          if (data.provider === Number(process.env.REACT_APP_PROVIDER_DEALER)) {
            setValue(response.data[i].provider_value);
          } else {
            setValue(response.data[i].value);
          }
        }
      } else if (product?.unit === 2) {
        /** METRO QUADRADO */
        const m2 = (width / 100) * (height / 100) * quantity;
        if (m2 >= response.data[i].up) {
          if (data.provider === Number(process.env.REACT_APP_PROVIDER_DEALER)) {
            setValue(response.data[i].provider_value);
          } else {
            setValue(response.data[i].value);
          }
        }
      } else {
        /** METRO LINEAR */
        const ml = (width / 100) * quantity;
        if (ml >= response.data[i].up) {
          if (data.provider === Number(process.env.REACT_APP_PROVIDER_DEALER)) {
            setValue(response.data[i].provider_value);
          } else {
            setValue(response.data[i].value);
          }
        }
      }
    }
  }

  useEffect(() => {
    handlePricetable();
  }, [quantity, width, height]);

  function handleMinSize() {
    if (product && width < product?.minsize && height < product?.minsize) {
      toast.info(`Medida mínima adicionada automaticamente em largura`, {
        position: 'bottom-center',
      });
      setWidth(product.minsize);
    }
  }

  useEffect(() => {
    handleMinSize();
  }, [width, height]);

  function handleMinimumQuantity() {
    if (product && (product.unit === 1 || product.unit === 4)) {
      if (product.minvalue > quantity) {
        setQuantity(product.minvalue);
        toast.info(`Quantidade alterada para o mínimo do produto!`, {
          position: 'bottom-center',
        });
      }
    }
  }

  useEffect(() => {
    handleMinimumQuantity();
  }, [quantity]);

  function handleFinishing() {
    if (finishing === 'Sem Acabamento') {
      setValueFinishing(0);
    } else if (finishing === 'Corte Especial') {
      if (product?.unit === 2) {
        const m2 = (width / 100) * (height / 100);
        setValueFinishing(m2 * 40 * quantity);
      } else if (product?.unit === 3) {
        const m2 = (product?.height / 100) * (width / 100);
        setValueFinishing(m2 * 40 * quantity);
      } else {
        setValueFinishing(0);
      }
    } else if (finishing === 'Laminação') {
      if (product?.unit === 2) {
        const m2 = (width / 100) * (height / 100);
        setValueFinishing(m2 * 40 * quantity);
      } else if (product?.unit === 3) {
        const m2 = (product.height / 100) * (width / 100);
        setValueFinishing(m2 * 40 * quantity);
      } else {
        setValueFinishing(0);
      }
    } else if (finishing === 'Resina') {
      if (product?.unit === 2) {
        const m2 = (width / 100) * (height / 100);
        setValueFinishing(m2 * 200 * quantity);
      } else if (product?.unit === 3) {
        const m2 = (product.height / 100) * (width / 100);
        setValueFinishing(m2 * 200 * quantity);
      }
      setValueFinishing(0);
    } else if (finishing === 'Bastão') {
      if (product?.unit === 2 || product?.unit === 3) {
        let mult = width;
        if (mult < height) {
          mult = height;
        }
        setValueFinishing((mult / 100) * 8 * quantity);
      } else {
        setValueFinishing(0);
      }
    } else if (finishing === 'Ilhós') {
      let lat = width / 20;
      lat += 1;
      let alt = height / 20;
      alt += 1;
      const n = lat * 2 + alt * 2;
      setValueFinishing(n * 0.5 * quantity);
    } else if (finishing === 'Calha') {
      const larg = (width / 100) * 2 * 60;
      const alt = (height / 100) * 2 * 60;
      setValueFinishing((larg + alt) * quantity);
    } else if (finishing === 'Esqueleto') {
      if (product?.unit === 2) {
        const m2 = (width / 100) * (height / 100);
        setValueFinishing(m2 * 50 * quantity);
      } else if (product?.unit === 3) {
        const m2 = (product.height / 100) * (width / 100);
        setValueFinishing(m2 * 50 * quantity);
      } else {
        setValueFinishing(0);
      }
    } else if (finishing === 'Silk') {
      setValueFinishing(0);
    } else if (finishing === 'Transfer') {
      setValueFinishing(0);
    }
  }

  useEffect(() => {
    handleFinishing();
  }, [finishing]);

  function handleAddCart() {
    let auth = true;
    if (product && (product.unit === 1 || product.unit === 4)) {
      if (quantity < product.minvalue) {
        auth = false;
        toast.error(
          `A quantidade mínima do produto é ${product.minvalue} unidades`,
        );
      }
    } else if (product && product.unit === 2) {
      const m2Value = (width / 100) * (height / 100) * quantity * value;
      if (m2Value < product.minvalue) {
        auth = false;
        const val = Number(product.minvalue) + valueFinishing;
        store.store.dispatch({
          type: CartTypes.CART_ADD,
          data: {
            width,
            height,
            quantity,
            art,
            obs,
            finishing,
            signed,
            product_id: product?.id,
            value: val,
          },
        });
      }
    } else if (product && product.unit === 3) {
      const mlValue = (width / 100) * quantity * value;
      if (mlValue < product.minvalue) {
        auth = false;
        const val = Number(product.minvalue) + valueFinishing;
        store.store.dispatch({
          type: CartTypes.CART_ADD,
          data: {
            width,
            height,
            quantity,
            art,
            obs,
            finishing,
            signed,
            product_id: product?.id,
            value: val,
          },
        });
      }
    }
    if (auth) {
      const val = total + valueFinishing;
      store.store.dispatch({
        type: CartTypes.CART_ADD,
        data: {
          width,
          height,
          quantity,
          art,
          obs,
          finishing,
          signed,
          product_id: product?.id,
          value: val,
        },
      });
    }
  }

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
                  <span>{`R$${Number(total).toFixed(2)}`}</span>
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
                  <span>{`R$${Number(valueFinishing).toFixed(2)}`}</span>
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
                      {`
                      R$${Number(
                        Number(product.minvalue) + Number(valueFinishing),
                      ).toFixed(2)}
                      `}
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
                handleAddCart={handleAddCart}
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

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
  signed: auth.signed,
});

export default connect(mapStateToProps)(ProductDetails);
