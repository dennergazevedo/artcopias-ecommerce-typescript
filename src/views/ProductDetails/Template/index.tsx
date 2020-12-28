/* eslint-disable func-names */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

/** Icons */
import { FaDownload } from 'react-icons/fa';

/** Components */
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';

/** Redux */
import { connect } from 'react-redux';
import { IApplicationState } from '../../../store';

/** Assets */
import loadingLottie from '../../../assets/json/loading.json';

/** Services */
import api from '../../../services/api';

/** Styled Components */
import {
  Container,
  ButtonDownload,
  Icon,
  TextDiv,
  Title,
  Subtitle,
} from './styles';

/** Interfaces */
interface IProps {
  template: number | undefined;
  signed: boolean;
}

const ArtDownload: React.FC<IProps> = ({ template, signed }: IProps) => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    if (signed) {
      setLoading(true);
      await api.get(`download_drive/${template}`);
      authDownload();
    } else {
      toast.error('É necessário estar logado para realizar o download!', {
        position: 'bottom-center',
      });
    }
  }

  async function authDownload() {
    try {
      const resp = await api.get(`file/${template}`);
      if (Number(resp.data.auth) === 1) {
        window.open(
          `${process.env.REACT_APP_API_URL}download_open/${template}`,
        );
        await api.put(`download_auth/${resp.data.url}`, {
          auth: null,
        });
        setLoading(false);
        api.delete(`delete_file/${resp.data.url}`);
      } else {
        setTimeout(function () {
          authDownload();
        }, 3000);
      }
    } catch (err) {
      toast.error('Falha no download!', { position: 'bottom-center' });
    }
  }

  return (
    <Container>
      {loading ? (
        <div>
          <Lottie options={loadingOptions} height="50px" width="50px" />
        </div>
      ) : (
        <ButtonDownload onClick={handleDownload}>
          <Icon>
            <FaDownload />
          </Icon>
          <TextDiv>
            <Title>BAIXAR GABARITO</Title>
            <Subtitle>APENAS PARA USUÁRIOS CADASTRADOS</Subtitle>
          </TextDiv>
        </ButtonDownload>
      )}
    </Container>
  );
};

const mapStateToProps = ({ auth }: IApplicationState) => ({
  signed: auth.signed,
});

export default connect(mapStateToProps)(ArtDownload);
