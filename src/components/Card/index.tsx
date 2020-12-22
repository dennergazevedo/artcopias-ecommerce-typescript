/*eslint-disable*/
import React from "react";

// LOTTIE
import Lottie from 'react-lottie';
import Whatsapp from '../../assets/json/whatsapp.json';
import Facebook from '../../assets/json/facebook.json';
import Insta from '../../assets/json/instagram.json';

// STYLED COMPONENTS
import {
    Container,
    Item,
    Social
} from './styles.js';

const Card: React.FC = () => {

    const wppOptions = {
        loop: false,
        autoplay: true,
        animationData: Whatsapp,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const faceOptions = {
        loop: false,
        autoplay: true,
        animationData: Facebook,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const instaOptions = {
        loop: false,
        autoplay: true,
        animationData: Insta,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Container>
            <Item>
                <h4>
                    Sobre nós
                </h4>
                <span>
                    A Art Cópias é um modelo inovador de Gráfica Online com
                    impressão digital e de alta qualidade a preços acessíveis,
                    Banners, Plotagens, Placas, Acabamentos, Publicidade, Cortes
                    Especiais e muito mais. Temos como missão ajudar e inspirar
                    as empresas e pessoas a terem uma comunicação de sucesso,
                    através de nossos materiais de qualidade.
                </span>
            </Item>

            <Item>
                <h4>
                    Mídias Sociais
                </h4>
                <Social>
                    <a
                        rel="noopener noreferrer"
                        href="https://bit.ly/artcopias"
                        target='_blank'>
                        <Lottie options={wppOptions} height={'40px'} width={'40px'} />
                    </a>

                    <a
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/art.copias/"
                        target='_blank'>
                        <Lottie options={faceOptions} height={'40px'} width={'40px'} />
                    </a>

                    <a
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/artcopiasjm/"
                        target='_blank'>
                        <Lottie options={instaOptions} height={'40px'} width={'40px'} />
                    </a>
                </Social>
            </Item>

            <Item>
                <h4>
                    Institucional
                </h4>
                <div>
                    <a rel="noopener noreferrer" href='/prazos-de-entrega'>
                        • Política de Entrega
                    </a>
                    <a rel="noopener noreferrer" href='/politica-de-privacidade'>
                        • Política de Privacidade
                    </a>
                    <a rel="noopener noreferrer" href='/termos-de-uso'>
                        • Termos de Uso
                    </a>
                </div>
            </Item>
        </Container>
    );
}

export default Card;
