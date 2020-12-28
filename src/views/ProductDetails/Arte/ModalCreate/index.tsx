/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

/** Icons */
import { FaSketch, FaTimes } from 'react-icons/fa';

/** Components */
import Modal from '../../../../components/Modal';

/** Styled Components */
import { Container, ModalBody, ModalTitle } from './styles';

/** Interfaces */
interface IProps {
  setArt: (art: boolean) => {};
  toggle: () => void;
  modal: boolean;
  handleCloseModal: () => void;
}

const ModalCreate: React.FC<IProps> = ({
  setArt,
  modal,
  toggle,
  handleCloseModal,
}: IProps) => {
  function handleConfirm() {
    setArt(true);
    toggle();
  }

  return (
    <Modal isToggled={modal}>
      <Container>
        <ModalTitle>
          <div>
            <FaSketch className="icon" />
            <span>CONTRATAR UM DESIGNER</span>
          </div>
          <FaTimes onClick={handleCloseModal} className="iconClose" />
        </ModalTitle>
        <hr />
        <ModalBody>
          <span>
            • Contratando nosso serviço de criação, um designer profissional
            desenvolverá a sua arte. O prazo para o desenvolvimento da arte é de
            3 dias úteis. Iniciando assim que o briefing for encaminhado.
          </span>

          <span>
            • Após o processamento do pagamento de seu pedido, você receberá um
            briefing (formulário bem objetivo) no qual colocará as informações
            necessárias para a criação da arte. Esse briefing será enviado por
            e-mail para nossos Designers.
          </span>

          <span>
            • Essa prestação de serviço se refere ao desenvolvimento da arte de
            apenas um item.
          </span>

          <span>
            • O preenchimento do briefing tem prazo de 30 dias. Caso nossos
            profissionais não recebam interação neste período, o pedido será
            cancelado e um e-mail com orientações de como proceder com uma nova
            compra será encaminhado.
          </span>

          <span>
            • Serão permitidas apenas DUAS alterações por arte. A partir da 3ª
            alteração é gerado um custo adicional de R$ 10,00 (para cada nova
            alteração).
          </span>

          <span>
            • Caso seja passado "alterações" que configurem um novo briefing,
            será cobrado novo projeto.
          </span>

          <span>
            • Caso a arte seja enviada pelo cliente, não nos responsabilizamos
            por qualquer problema de direitos de imagem ou resolução da imagem.
            Consulte nossos <a href="/termos-de-uso">Termos de uso</a>.
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

export default ModalCreate;
