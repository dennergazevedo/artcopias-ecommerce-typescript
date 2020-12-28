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
  setFinishing: (finishing: string) => {};
  setMenu: (menu: number) => {};
  product: IProduct;
}

const Finishing: React.FC<IProps> = ({
  setFinishing,
  setMenu,
  product,
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
    setFinishing('SEM ACABAMENTO');
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
                onChange={e => setFinishing(e.target.value)}
                value="SEM ACABAMENTO"
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

            {product.finishing.indexOf('Corte Especial') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Corte Especial"
                  name="acabamento"
                  id="corteesp"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Laminação') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Laminação"
                  name="acabamento"
                  id="laminacao"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Resina') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Resina"
                  name="acabamento"
                  id="resina"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Bastão') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Bastão"
                  name="acabamento"
                  id="bastao"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Ilhós') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="ILHÓS"
                  name="acabamento"
                  id="ilhos"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Calha') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Calha"
                  name="acabamento"
                  id="calha"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Esqueleto') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="ESQUELETO"
                  name="acabamento"
                  id="esqueleto"
                  type="radio"
                />
                <label
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

            {product.finishing.indexOf('Silk') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="Silk"
                  name="acabamento"
                  id="silk"
                  type="radio"
                />
                <label
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
            {product.finishing.indexOf('Transfer') !== -1 && (
              <div>
                <input
                  onChange={e => setFinishing(e.target.value)}
                  value="TRANSFER"
                  name="acabamento"
                  id="transfer"
                  type="radio"
                />
                <label
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
          <Next>
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
