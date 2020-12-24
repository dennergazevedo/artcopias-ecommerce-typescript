/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

/** Icons */
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

/** Services */
import { Fade } from 'react-slideshow-image';
import api from '../../services/api';

/** Components */
import SliderImg from './SliderImg';

/** Interfaces */
interface ISlide {
  id: number;
  describe: string;
  img_id: number;
  redirect: string;
}

const Slideshow: React.FC = () => {
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    prevArrow: (
      <FaAngleDoubleLeft
        style={{
          fontSize: '35px',
          color: '#FFF',
          padding: '5px',
          backgroundColor: '#0005',
          position: 'absolute',
          zIndex: '-moz-initial',
          cursor: 'pointer',
        }}
      />
    ),
    nextArrow: (
      <FaAngleDoubleRight
        style={{
          fontSize: '35px',
          color: '#FFF',
          padding: '5px',
          backgroundColor: '#0005',
          position: 'absolute',
          zIndex: '-moz-initial',
          cursor: 'pointer',
          right: 0,
        }}
      />
    ),
  };

  const [slides, setSlides] = useState<ISlide[]>([]);

  async function loadSlideshow() {
    const response = await api.get('/slideshow');
    setSlides(response.data);
  }

  useEffect(() => {
    loadSlideshow();
  }, []);

  return (
    <>
      {slides.length > 0 && (
        <Fade {...fadeProperties}>
          {slides.map(item => (
            <div>
              <SliderImg slideshow={item} />
            </div>
          ))}
        </Fade>
      )}
    </>
  );
};

export default Slideshow;
