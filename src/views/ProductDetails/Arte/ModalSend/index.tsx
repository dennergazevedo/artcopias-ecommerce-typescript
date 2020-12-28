/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

/** Icons */
import { FaSketch, FaTimes } from 'react-icons/fa';

/** Components */
import Modal from '../../../../components/Modal';

/** Styled Components */
import { Container, ModalBody, ModalTitle } from './styles';

/** Interface */
interface IProps {
  setArt: React.Dispatch<React.SetStateAction<boolean | null>>;
  toggle: () => void;
  modal: boolean;
  handleCloseModal: () => void;
}

const ModalSend: React.FC<IProps> = ({
  setArt,
  toggle,
  modal,
  handleCloseModal,
}: IProps) => {
  function handleConfirm() {
    setArt(false);
    toggle();
  }

  return (
    <Modal isToggled={modal}>
      <Container>
        <ModalTitle>
          <div>
            <FaSketch className="icon" />
            <span>ENVIAR MINHA ARTE</span>
          </div>
          <FaTimes onClick={handleCloseModal} className="iconClose" />
        </ModalTitle>
        <hr />
        <ModalBody>
          <span>
            • Não nos responsabilizamos por direitos de imagem ou resolução;
          </span>

          <span>• Falsificações ou impressão sem autorização;</span>

          <span>
            • Variações de cores devido paleta de cores diferente de CMYK;
          </span>

          <span>
            • Consulte nossos <a href="/termos-de-uso">Termos de uso</a>
          </span>

          <div>
            <input type="checkbox" id="termos" onChange={handleConfirm} />
            <label htmlFor="termos">Li e concordo com os termos acima.</label>
          </div>
        </ModalBody>
      </Container>
    </Modal>
  );
};

export default ModalSend;
