/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

/** Icons */
import {
  FaPaintRoller,
  FaPallet,
  FaCartPlus,
  FaAngleDoubleLeft,
} from 'react-icons/fa';

/** Reactstrap */
import { PopoverHeader, Popover, PopoverBody } from 'reactstrap';

/** Styled Components */
import {
  Container,
  Title,
  Body,
  Size,
  TitleSize,
  Acabamentos,
  SubTitleSize,
  Next,
  Back,
} from './styles';

/** Interface */
import { IProduct } from '../index';

interface IProps {
  setFinishing: React.Dispatch<React.SetStateAction<string>>;
  setMenu: React.Dispatch<React.SetStateAction<number>>;
  product: IProduct | undefined;
  handleAddCart: () => void;
}

const Finishing: React.FC<IProps> = ({
  setFinishing,
  setMenu,
  product,
  handleAddCart,
}: IProps) => {
  const [noacab, setNoacab] = useState(false);
  const [corteesp, setCorteesp] = useState(false);
  const [laminacao, setLaminacao] = useState(false);
  const [resina, setResina] = useState(false);
  const [bastao, setBastao] = useState(false);
  const [ilhos, setIlhos] = useState(false);
  const [calha, setCalha] = useState(false);
  const [esqueleto, setEsqueleto] = useState(false);
  const [silk, setSilk] = useState(false);
  const [transfer, setTransfer] = useState(false);

  useEffect(() => {
    const element = document.getElementById('noacab') as HTMLInputElement;
    element.checked = true;
    setFinishing('Sem Acabamento');
  }, []);

  function handleBack() {
    setMenu(2);
  }

  return (
    <Container>
      <Title>
        ACABAMENTOS
        <FaPaintRoller className="iconTitle" />
      </Title>
      <Body>
        <Size>
          <TitleSize>
            <FaPallet className="icon" />
            ACABAMENTO
          </TitleSize>

          <SubTitleSize>
            <span>
              Para mais informações posicione o mouse ou clique em cima do nome
              do acabamento desejado.
            </span>
          </SubTitleSize>

          <Acabamentos>
            <div>
              <input
                onChange={() => setFinishing('Sem Acabamento')}
                name="acabamento"
                id="noacab"
                type="radio"
              />
              <label
                htmlFor="noacab"
                onMouseEnter={() => setNoacab(true)}
                onMouseLeave={() => setNoacab(false)}
              >
                SEM ACABAMENTO
              </label>
              <Popover placement="bottom" isOpen={noacab} target="noacab">
                <PopoverHeader>Sem acabamento especial</PopoverHeader>
                <PopoverBody>
                  Produto sem nenhum tipo de acabamento especial.
                  <br />
                  <br />
                  <b>Acabamento padrão:</b>
                  Consulte na parte inferior do site na aba Acabamento.
                </PopoverBody>
              </Popover>
            </div>

            {product && product.finishing.indexOf('Corte Especial') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Corte Especial')}
                  name="acabamento"
                  id="corteesp"
                  type="radio"
                />
                <label
                  htmlFor="corteesp"
                  onMouseEnter={() => setCorteesp(true)}
                  onMouseLeave={() => setCorteesp(false)}
                >
                  CORTE ESPECIAL
                </label>
                <Popover placement="bottom" isOpen={corteesp} target="corteesp">
                  <PopoverHeader>CORTE ESPECIAL</PopoverHeader>
                  <PopoverBody>
                    Permite cortes personalizados ao produto.
                    <br />
                    <br />
                    <b>Corte padrão:</b>
                    Quadrado / Retângulo.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Laminação') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Laminação')}
                  name="acabamento"
                  id="laminacao"
                  type="radio"
                />
                <label
                  htmlFor="laminacao"
                  onMouseEnter={() => setLaminacao(true)}
                  onMouseLeave={() => setLaminacao(false)}
                >
                  LAMINAÇÃO
                </label>
                <Popover
                  placement="bottom"
                  isOpen={laminacao}
                  target="laminacao"
                >
                  <PopoverHeader>Laminação</PopoverHeader>
                  <PopoverBody>
                    Película adesiva protetora e impermeabilizante, ajuda a
                    conservar a integridade do material.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Resina') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Resina')}
                  name="acabamento"
                  id="resina"
                  type="radio"
                />
                <label
                  htmlFor="resina"
                  onMouseEnter={() => setResina(true)}
                  onMouseLeave={() => setResina(false)}
                >
                  RESINA EPOXI
                </label>
                <Popover placement="bottom" isOpen={resina} target="resina">
                  <PopoverHeader>Resina</PopoverHeader>
                  <PopoverBody>
                    Revestimento transparente e rígido com alta resistência
                    química e brilho.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Bastão') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Bastão')}
                  name="acabamento"
                  id="bastao"
                  type="radio"
                />
                <label
                  htmlFor="bastao"
                  onMouseEnter={() => setBastao(true)}
                  onMouseLeave={() => setBastao(false)}
                >
                  BASTÃO DE METAL
                </label>
                <Popover placement="bottom" isOpen={bastao} target="bastao">
                  <PopoverHeader>Bastão de Metalon</PopoverHeader>
                  <PopoverBody>
                    Bastão de aço metalon para exposição, material rígido e de
                    alta resistência, fixado na parte superior do produto.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Ilhós') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Ilhós')}
                  name="acabamento"
                  id="ilhos"
                  type="radio"
                />
                <label
                  htmlFor="ilhos"
                  onMouseEnter={() => setIlhos(true)}
                  onMouseLeave={() => setIlhos(false)}
                >
                  ILHÓS
                </label>
                <Popover placement="bottom" isOpen={ilhos} target="ilhos">
                  <PopoverHeader>Ilhós</PopoverHeader>
                  <PopoverBody>
                    Arco círcular de metal, usado para criar um orifício no
                    orifício no material.
                    <br />
                    <br />
                    <b>Ideal para:</b>
                    Amarração.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Calha') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Calha')}
                  name="acabamento"
                  id="calha"
                  type="radio"
                />
                <label
                  htmlFor="calha"
                  onMouseEnter={() => setCalha(true)}
                  onMouseLeave={() => setCalha(false)}
                >
                  CALHA DE ALUMÍNIO
                </label>
                <Popover placement="bottom" isOpen={calha} target="calha">
                  <PopoverHeader>Calha</PopoverHeader>
                  <PopoverBody>
                    Estrutura de alumínio que serve como moldura para o material
                    <br />
                    <br />
                    <b>Ideal para:</b>
                    Lonas.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Esqueleto') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Esqueleto')}
                  name="acabamento"
                  id="esqueleto"
                  type="radio"
                />
                <label
                  htmlFor="esqueleto"
                  onMouseEnter={() => setEsqueleto(true)}
                  onMouseLeave={() => setEsqueleto(false)}
                >
                  ESQUELETO DE MADEIRA
                </label>
                <Popover
                  placement="bottom"
                  isOpen={esqueleto}
                  target="esqueleto"
                >
                  <PopoverHeader>Esqueleto</PopoverHeader>
                  <PopoverBody>
                    Estrutura de madeira que serve como moldura para o material
                    <br />
                    <br />
                    <b>Ideal para:</b>
                    Quadro Canvas.
                  </PopoverBody>
                </Popover>
              </div>
            )}

            {product && product.finishing.indexOf('Silk') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Silk')}
                  name="acabamento"
                  id="silk"
                  type="radio"
                />
                <label
                  htmlFor="silk"
                  onMouseEnter={() => setSilk(true)}
                  onMouseLeave={() => setSilk(false)}
                >
                  SILK
                </label>
                <Popover placement="bottom" isOpen={silk} target="silk">
                  <PopoverHeader>Silk</PopoverHeader>
                  <PopoverBody>
                    Processo de impressão monocromática, permeográfica de texto
                    ou figura (gravura planográfica) em uma superfície, no qual
                    a tinta é vazada, pela pressão de um rodo ou espátula,
                    através de uma tela preparada.
                    <br />
                    <br />
                    <b>Consulte as cores disponíveis.</b>
                  </PopoverBody>
                </Popover>
              </div>
            )}
            {product && product.finishing.indexOf('Transfer') !== -1 && (
              <div>
                <input
                  onChange={() => setFinishing('Transfer')}
                  name="acabamento"
                  id="transfer"
                  type="radio"
                />
                <label
                  htmlFor="transfer"
                  onMouseEnter={() => setTransfer(true)}
                  onMouseLeave={() => setTransfer(false)}
                >
                  TRANSFER
                </label>
                <Popover placement="bottom" isOpen={transfer} target="transfer">
                  <PopoverHeader>Transfer / Sublimação</PopoverHeader>
                  <PopoverBody>
                    Processo de transferência da tinta no estado sólido para o
                    gasoso sem passar pelo líquido, fixando no material
                    desejado.
                  </PopoverBody>
                </Popover>
              </div>
            )}
          </Acabamentos>
        </Size>

        <Size>
          <Next onClick={handleAddCart}>
            <FaCartPlus className="icon" />
            ADICIONAR AO CARRINHO
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

export default Finishing;
