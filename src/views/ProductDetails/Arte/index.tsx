/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** Icons */
import {
  FaSketch,
  FaCommentDots,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';

/** Styled Components */
import { toast } from 'react-toastify';
import {
  Container,
  Title,
  Body,
  Size,
  TitleSize,
  ArteCreate,
  SubTitleSize,
  Observacoes,
  Next,
  Back,
} from './styles';

/** Components */
import ModalCreate from './ModalCreate';
import ModalSend from './ModalSend';

/** Services */

/** Interfaces */
import { IProduct } from '../index';

interface IProps {
  setArt: React.Dispatch<React.SetStateAction<boolean | null>>;
  art: boolean | null;
  setMenu: React.Dispatch<React.SetStateAction<number>>;
  product: IProduct | undefined;
  obs: string;
  setObs: React.Dispatch<React.SetStateAction<string>>;
}

const ArteAcab: React.FC<IProps> = ({
  art,
  setArt,
  setMenu,
  product,
  obs,
  setObs,
}: IProps) => {
  const [createArte, setCreateArte] = useState(false);
  const [sendArte, setSendArte] = useState(false);

  const toggleCreateArte = () => setCreateArte(!createArte);
  const toggleSendArte = () => setSendArte(!sendArte);

  function handleArte(e: string) {
    setArt(false);
    if (e === 'true') {
      toggleCreateArte();
    } else {
      toggleSendArte();
    }
  }

  function handleCloseModal() {
    if (
      window.confirm(
        'Deseja fechar o termo de aprovação? Sua escolha será anulada.',
      )
    ) {
      const create = document.getElementById('create') as HTMLInputElement;
      create.checked = false;
      const send = document.getElementById('send') as HTMLInputElement;
      send.checked = false;
      setCreateArte(false);
      setSendArte(false);
      setArt(null);
    }
  }

  function handleNext() {
    if (art !== null) {
      setMenu(3);
    } else {
      toast.error('O campo de ARTE não foi selecionado.', {
        position: 'bottom-center',
      });
    }
  }

  function handleBack() {
    setMenu(1);
  }

  function handleChecked() {
    if (art === true) {
      const create = document.getElementById('create') as HTMLInputElement;
      create.checked = true;
    } else if (art === false) {
      const send = document.getElementById('send') as HTMLInputElement;
      send.checked = true;
    }
  }

  useEffect(() => {
    handleChecked();
  }, []);

  return (
    <Container>
      <Title>
        ARTE E CRIAÇÃO
        <FaSketch className="iconTitle" />
      </Title>
      <Body>
        <Size>
          <TitleSize>
            <FaSketch className="icon" />
            ARTE E CRIAÇÃO
          </TitleSize>

          <SubTitleSize>
            <span>ESCOLHA A MELHOR OPÇÃO PARA SEU PEDIDO.</span>
          </SubTitleSize>
          {product && product.unit !== 4 ? (
            <ArteCreate>
              <div>
                <input
                  value="true"
                  onChange={e => handleArte(e.target.value)}
                  name="arte"
                  id="create"
                  type="radio"
                />
                <label htmlFor="create">
                  CONTRATAR UM DESIGNER
                  <span>(+ R$35,00)</span>
                </label>
              </div>

              <div>
                <input
                  value="false"
                  onChange={e => handleArte(e.target.value)}
                  name="arte"
                  id="send"
                  type="radio"
                />
                <label htmlFor="send">ENVIAR MINHA ARTE</label>
              </div>
            </ArteCreate>
          ) : (
            <ArteCreate>
              <span>ESTE PRODUTO É PADRONIZADO</span>
            </ArteCreate>
          )}

          <ModalCreate
            modal={createArte}
            toggle={toggleCreateArte}
            handleCloseModal={handleCloseModal}
            setArt={setArt}
          />

          <ModalSend
            modal={sendArte}
            toggle={toggleSendArte}
            handleCloseModal={handleCloseModal}
            setArt={setArt}
          />
        </Size>

        <Size>
          <TitleSize>
            <FaCommentDots className="icon" />
            OBSERVAÇÕES
          </TitleSize>
          <SubTitleSize>
            <span>DEIXE AQUI OBSERVAÇÕES EXTRAS.</span>
          </SubTitleSize>
          <Observacoes>
            <textarea
              placeholder="Ex.: Repetir arte do último pedido."
              value={obs}
              onChange={e => setObs(e.target.value)}
            />
          </Observacoes>

          <Next onClick={handleNext}>
            <FaAngleDoubleRight className="icon" />
            CONTINUAR
          </Next>

          <Back onClick={handleBack}>
            <FaAngleDoubleLeft className="icon" />
            VOLTAR
          </Back>
        </Size>
      </Body>
    </Container>
  );
};

export default ArteAcab;
