/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// SERVICES
import api from '../../services/api';

// STYLED COMPONENTS
import { Imagem } from './styles';

/** Interface */
interface IProps {
  slideshow: ISlide;
}

interface ISlide {
  id: number;
  describe: string;
  img_id: number;
  redirect: string;
}

const SliderImg: React.FC<IProps> = ({ slideshow }: IProps) => {
  const [src, setSrc] = useState('');

  async function loadImg() {
    const response = await api.get(`file/${slideshow.img_id}`);
    setSrc(response.data.url);
  }

  function handleRedirect() {
    window.location.href = slideshow.redirect;
  }

  useEffect(() => {
    loadImg();
  }, []);

  return (
    <Imagem src={src} alt={`${slideshow.describe}`} onClick={handleRedirect} />
  );
};

export default SliderImg;
