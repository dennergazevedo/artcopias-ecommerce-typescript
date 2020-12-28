/* eslint-disable func-names */
import React from 'react';

/** Icons */
import {
  FaPencilRuler,
  FaExpandAlt,
  FaArrowsAltH,
  FaArrowsAltV,
  FaSortNumericUpAlt,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaAngleDoubleRight,
} from 'react-icons/fa';

/** Services */
import { toast } from 'react-toastify';

/** Styled Components */
import {
  Container,
  Title,
  Body,
  Size,
  TitleSize,
  Dimensions,
  SubTitleSize,
  Quantidade,
  Next,
} from './styles';

/** Interface */
import { IProduct } from '../index';

interface IProps {
  product: IProduct | undefined;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setMenu: React.Dispatch<React.SetStateAction<number>>;
  height: number;
  width: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}

const SizeQnt: React.FC<IProps> = ({
  product,
  quantity,
  setQuantity,
  setMenu,
  height,
  width,
  setHeight,
  setWidth,
}: IProps) => {
  function handleAddQnt() {
    setQuantity(quantity + 1);
  }

  function handleRemoveQnt() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleNext() {
    if (
      product &&
      product?.minsize > width &&
      product?.minsize > height &&
      (product?.unit === 2 || product?.unit === 3)
    ) {
      toast.error(
        `Pelo menos uma das dimensões devem ser maiores do que
                o tamanho mínimo de ${product?.minsize}cm para este produto.`,
        { position: 'bottom-center' },
      );
      setTimeout(function () {
        if (product?.name === 'Adesivo Vinil') {
          toast.info(`Para Adesivos menores utilize o produto ETIQUETA.`, {
            position: 'bottom-center',
          });
        }
      }, 2000);
    } else {
      setMenu(2);
    }
  }

  return (
    <Container>
      <Title>
        DIMENSÕES E QUANTIDADE
        <FaPencilRuler className="iconTitle" />
      </Title>
      <Body>
        <Size>
          <TitleSize>
            <FaExpandAlt className="icon" />
            DIMENSÕES
          </TitleSize>
          <SubTitleSize>
            <span>TAMANHO EM CENTÍMETROS</span>
            <span>EXEMPLO: 100 x 200 (1 METRO x 2 METROS)</span>
          </SubTitleSize>
          <Dimensions>
            <div>
              <span>
                <FaArrowsAltV className="icon" />
                {product && product.unit === 3 ? 'COMPRIMENTO' : 'ALTURA'}
              </span>
              {product && (product.unit === 1 || product.unit === 4) ? (
                <input disabled value="TAMANHO FIXO" />
              ) : (
                <input
                  placeholder="Ex.: 100"
                  value={height}
                  onChange={e => setHeight(Number(e.target.value))}
                  type="number"
                />
              )}
            </div>
            <div>
              <span>
                <FaArrowsAltH className="icon" />
                LARGURA
              </span>
              {product && product.unit === 2 && (
                <input
                  placeholder="Ex.: 100"
                  value={width}
                  onChange={e => setWidth(Number(e.target.value))}
                  type="number"
                />
              )}
              {product && (product?.unit === 1 || product.unit === 4) && (
                <input disabled value="TAMANHO FIXO" />
              )}

              {product && product.unit === 3 && (
                <input disabled value={`FIXA: ${product.width}`} />
              )}
            </div>
          </Dimensions>
        </Size>

        <Size>
          <TitleSize>
            <FaSortNumericUpAlt className="icon" />
            QUANTIDADE
          </TitleSize>

          <SubTitleSize>
            <span>QUANTIDADE DEVE SER INTEIRA</span>
            <span>EXEMPLO: 10</span>
          </SubTitleSize>

          <Quantidade>
            <FaArrowAltCircleLeft className="icon" onClick={handleRemoveQnt} />
            <input
              placeholder="Ex.: 100"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              type="number"
            />
            <FaArrowAltCircleRight className="icon" onClick={handleAddQnt} />
          </Quantidade>

          <Next onClick={handleNext}>
            <FaAngleDoubleRight className="icon" />
            CONTINUAR
          </Next>
        </Size>
      </Body>
    </Container>
  );
};

export default SizeQnt;
