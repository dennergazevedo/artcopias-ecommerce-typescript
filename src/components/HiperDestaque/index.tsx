/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

/** Components */
import { useSwipeable } from 'react-swipeable';

/** Icons */
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

/** Styled Components */
import {
  Carousel,
  Container,
  ButtonNext,
  ButtonBack,
  Body,
  ItemDescribe,
  ItemPhoto,
  Title,
  Cod,
  Text,
  Button,
} from './styles';

/** Services */
import api from '../../services/api';

/** Interface */
interface IStar {
  name: string;
  cod: number;
  info: Text;
  photo: string;
}

const Destaque: React.FC = () => {
  const [products, setProducts] = useState<IStar[]>([]);
  const [sliding, setSliding] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  async function handleLoad() {
    const response = await api.get(`search_star`);
    const array = [];
    for (let i = 0; i < response.data.length; i++) {
      const item = {
        name: response.data[i].name,
        info: response.data[i].info,
        cod: response.data[i].id,
        photo: response.data[i].photo,
      };
      array.push(item);
    }
    setProducts(array);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  function handleNext() {
    if (sliding !== products.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }

  function handleBack() {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(products.length - 1);
    }
  }

  return (
    <Carousel {...handlers} style={{ cursor: 'grab' }}>
      {products.map(item => (
        <Container sliding={sliding} key={item.name}>
          <Body>
            <ItemDescribe>
              <Title>{item.name}</Title>
              <Cod>
                cod.:
                {`000000${item.cod}`.slice(-6)}
              </Cod>
              <Text>{item.info}</Text>
              <Button>Saiba mais...</Button>
            </ItemDescribe>
            <ItemPhoto>
              <img src={item.photo} alt={item.name} />
            </ItemPhoto>
          </Body>
        </Container>
      ))}
      {products.length > 1 && (
        <>
          <ButtonNext>
            <IoIosArrowForward onClick={handleNext} className="icon" />
          </ButtonNext>
          <ButtonBack>
            <IoIosArrowBack onClick={handleBack} className="icon" />
          </ButtonBack>
        </>
      )}
    </Carousel>
  );
};
export default Destaque;
