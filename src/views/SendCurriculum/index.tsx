/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
import React, { useState } from 'react';

/** Services */
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import Video from 'react-player';
import { FaHandshake } from 'react-icons/fa';
import api from '../../services/api';

/** Assets */
import check from '../../assets/json/check.json';
import loadingLottie from '../../assets/json/loading.json';
import VideoIntro from '../../assets/videos/initpage.mp4';
import WorkWithUs from '../../assets/img/workwithus.png';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** Styled Components */
import {
  Container,
  Title,
  Subtitle,
  Nota,
  ButtonSend,
  ProgressDiv,
} from './styles';

const EnvieCurriculo: React.FC = () => {
  const [pdfSelect, setPdfSelect] = useState<any>('');
  const [loading, setLoading] = useState<number>(0);
  const [send, setSend] = useState<boolean>(false);

  const checkOptions = {
    loop: false,
    autoplay: true,
    animationData: check,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  async function handleUpload() {
    toast.info('Aguarde, processando...', { position: 'bottom-center' });
    setLoading(20);
    if (pdfSelect?.size > 1048576) {
      toast.error('Tamanho máximo permitido 1 mb', {
        position: 'bottom-center',
      });
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    } else {
      try {
        const data = new FormData();
        data.append('file', pdfSelect);
        const response = await api.post(`upload_curriculum`, data);
        mailSend(response.data.path);
        setLoading(40);
      } catch (err) {
        setLoading(0);
        setSend(false);
        toast.error('Falha ao enviar Currículo!', {
          position: 'bottom-center',
        });
      }
    }
  }

  async function mailSend(local: string) {
    try {
      toast.info('Aguarde, este processo pode levar alguns segundos...', {
        position: 'bottom-center',
      });
      setLoading(60);
      await api.post(`send_curriculum`, {
        pathName: local,
      });
      toast.success('Currículo enviado com sucesso!', {
        position: 'bottom-center',
      });
      setLoading(100);
      setSend(true);
    } catch (err) {
      toast.error(
        'Oops! Erro ao enviar currículo, tente novamente mais tarde.',
        { position: 'bottom-center' },
      );
    }
  }

  return (
    <>
      <Navbar />
      <Video url={VideoIntro} playing width="100%" height="auto" />

      <Container>
        <Title>
          <FaHandshake className="titleIcon" />
          Trabalhe Conosco
        </Title>
        <Subtitle>Envie-nos o seu currículo para avaliação</Subtitle>
        <Nota style={{ width: 'auto' }}>
          *O tamanho máximo do arquivo é de 1mb.
        </Nota>

        <div className="msgItem">
          {send ? (
            <div className="divCheck">
              <Lottie options={checkOptions} width="100px" />
              <span>Arquivo enviado com sucesso!</span>
            </div>
          ) : (
            <>
              {loading > 0 ? (
                <div className="divCheck">
                  <Lottie options={loadingOptions} width="100px" />
                </div>
              ) : (
                <ProgressDiv>
                  <input
                    onChange={e =>
                      setPdfSelect(e.target.files ? e.target.files[0] : null)
                    }
                    type="file"
                  />
                  <ButtonSend onClick={handleUpload}>
                    Enviar Currículo
                  </ButtonSend>
                </ProgressDiv>
              )}
            </>
          )}
        </div>
      </Container>

      <img src={WorkWithUs} alt="Trabalhe Conosco" width="100%" />
      <Footer />
    </>
  );
};

export default EnvieCurriculo;
