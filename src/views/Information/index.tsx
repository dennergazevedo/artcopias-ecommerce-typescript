/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

/** Icons */
import {
  FaCartArrowDown,
  FaNewspaper,
  FaPaintRoller,
  FaCut,
} from 'react-icons/fa';

/** Components */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MandeUmZap from '../../components/ZapPlugin';

/** Assets */
import comocomprar from '../../assets/img/comocomprar.png';
import typeprint from '../../assets/img/typeprint.png';
import downloadbutton from '../../assets/img/downloadbutton2.png';
import finishinfo from '../../assets/img/finishinfo.png';
import corteesp from '../../assets/img/acabamentos/corteesp.png';
import laminacao from '../../assets/img/acabamentos/laminacao.png';
import resina from '../../assets/img/acabamentos/resina.png';
import bastao from '../../assets/img/acabamentos/bastao.png';
import ilhos from '../../assets/img/acabamentos/ilhos.png';
import calha from '../../assets/img/acabamentos/calha.png';
import esqueleto from '../../assets/img/acabamentos/esqueleto.png';

/** Styled Component */
import { Container, Menu, Item } from './styles';

const Information: React.FC = () => {
  const [menu, setMenu] = useState(1);

  const handleDownloadManual = () => {
    event?.preventDefault();
    window.open(
      'https://drive.google.com/file/d/1ErKxrfF0vZrOWgBQmzWV2inBBQorLnPL/view',
      '_blank',
    );
  };

  return (
    <>
      <Navbar />
      <MandeUmZap />
      <Container>
        <Menu>
          <div onClick={() => setMenu(1)}>
            <FaCartArrowDown className="iconMenu" />
            <span>Como Comprar</span>
          </div>

          <div onClick={() => setMenu(2)}>
            <FaNewspaper className="iconMenu" />
            <span>Tipos de Impressão</span>
          </div>

          <div onClick={() => setMenu(3)}>
            <FaPaintRoller className="iconMenu" />
            <span>Acabamentos</span>
          </div>
        </Menu>

        {menu === 1 && (
          <Item>
            <img src={comocomprar} alt="comocomprar" />
            <span>
              Com tantas ferramentas que surgem à cada dia no mercado, fica
              difícil de acompanhar todas elas. Pensando nisso a Art Cópias
              desenvolveu e deixou disponível um tutorial ilustrativo de como é
              o processo de compra em nossa plataforma de forma rápida, fácil e
              segura.
            </span>
            <img
              className="buttonDownload"
              src={downloadbutton}
              alt="Download"
              onClick={handleDownloadManual}
            />
          </Item>
        )}

        {menu === 2 && (
          <Item>
            <img src={typeprint} alt="tipoimpressao" />

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Eco solvente
            </span>
            <span>
              A tecnologia Eco Solvente garante impressões de qualidade superior
              e ameniza os problemas que envolvem cheiro e insalubridade na
              produção ao comparar com as solventes convencionais e as Mild
              solventes. Além das aplicações já utilizadas em impressões
              solventes, a Eco Solvente pode ser aplicada em ambientes internos,
              como restaurantes e clínicas, por conta do seu baixo odor exalado.
              Porém a impressão Eco Solvente agride a mídia onde está sendo
              impressa, pois ela necessita que o papel absorva a tinta, causando
              perda de luminosidade no papel. Outra recomendação é que para
              melhor qualidade as impressões realizadas em adesivos devem ser
              colocadas em descanso por no 24 horas.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Impressão UV
            </span>
            <span>
              Possibilita a impressão sobre os mais diferentes tipos de
              materiais, proporcionando alta produtividade e qualidade
              excepcional, incluindo detalhes finos, como uma reprodução mais
              nítida, proporcionando cores intensas sobre diversos tipos de
              materiais.É importante citar que quando falamos de impressão
              gráfica, recomenda-se que de acordo com as especificações para que
              seu material esteja em boa qualidade é que ele possua no mínimo
              300dpi, ou seja que ele esteja em alta qualidade e seus elementos
              estejam em sua totalidade convertidos em CMYK. Essa impressão
              também tem diversas vantagens, como a secagem rápida, durabilidade
              que podemos afirmar ser consideravelmente superior, e cores mais
              brilhantes, vivas e com muito mais intensidade.
              <br />
              <br />
              Por esse motivos, a impressão UV tem se destacado no mercado
              gráfico como uma grande aposta devido seu grande diferencial de
              secagem de tinta que é acelerado através da exposição de raios UV
              emitido pelas lâmpadas contidas em sua “cabeça” de impressão.
              <br />
              <br />
              Além disso, a impressão UV tem como diferencial sua capacidade de
              se adaptar a qualquer superfície em sua grande maioria rígida, e
              substratos diferentes disponíveis no mercado.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Serigrafia
            </span>
            <span>
              É um método que utiliza uma placa de tela (um estêncil) para
              impressão. O estêncil é utilizado para aplicar camadas de tinta na
              superfície de impressão. Para cada cor é usado um estêncil
              diferente, um de cada vez, para garantir o produto final.
              <br />
              <br />
              Com este método é possível imprimir em materiais de maior
              espessura, como: vidro, metal, tecido ou outros materiais e
              dimensões, mas não é possível adicionar um preenchimento com
              gradação de cores. Portanto, como é necessário usar diferentes
              telas para cada cor, este método de impressão não é destinado a
              produção em baixo volume, com alto mix e de entrega rápida.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Offset
            </span>
            <span>
              A impressão offset é o processo mais utilizado na impressão
              comercial. Além disso, a impressão offset é o padrão mais
              utilizado na indústria gráfica pela capacidade de imprimir em alta
              qualidade, conferindo ao produto final uma apresentação superior.
              <br />
              <br />A impressão offset é um processo que consiste da interação
              interação interação entre água e gordura (a tinta offset é de
              consistência gordurosa). O processo de impressão offset é
              indireto, ou seja, a imagem é transferida da matriz para um rolo
              de impressão (blanqueta) e somente depois é passada ao papel. Por
              isso a matriz (chapa offset) é legível mesmo antes da impressão,
              diferentemente dos processos diretos onde a matriz é espelhada
              (texto escritos invertidos).
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Sublimação
            </span>
            <span>
              A sublimação utiliza o calor para transferir a tinta sob a forma
              de gás para um papel especial, com cobertura de plástico, ou para
              materiais como alumínio, aço inox ou tecidos com no mínimo 90% de
              <br />
              <br />
              Impressoras de sublimação utilizam cartuchos de tinta
              independentes, que são como fitas; essas fitas transferem através
              de calor, as imagens para o papel que está sendo impresso. Cada
              uma das quatro cores básicas (ciano, magenta, amarelo e preto) são
              impressas uma de cada vez, ou seja, toda a folha é impressa
              utilizando o preto, depois a folha é recolhida e é impresso o
              amarelo, e assim por diante. Isso eleva um pouco o tempo da
              impressão.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Laser
            </span>
            <span>
              O princípio de funcionamento do modelo a laser é a eletricidade
              estática. Primeiramente uma carga elétrica positiva é aplicada em
              toda a extensão do cilindro fotorreceptor, que é rotativo. Ele
              então começa a girar, enquanto o raio laser descarrega pontos
              específicos correspondentes à imagem ou texto. Dessa forma, o
              laser cria um desenho eletrostático no cilindro a partir das
              informações armazenadas na memória da impressora, transmitidas
              pelo computador.
              <br />
              <br />
              É a partir daí que o toner entra. Ele consiste em um pó fino,
              composto de carbono e polímero, que tem carga elétrica positiva.
              Por causa disso, ele fica depositado nas áreas descarregadas pelo
              laser, que têm carga negativa, e é repelido pela área restante, de
              carga positiva.
              <br />
              <br />
              Nesse momento o papel sai da bandeja, recebe uma carga negativa
              mais forte que a da imagem eletrostática e passa pelo cilindro. Ao
              entrar em contato com a peça, o papel atrai o pó e assim fica com
              a imagem gravada. O tambor cilíndrico é então descarregado para
              que o papel não fique preso a ele.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Impressão por termo transferência
            </span>
            <span>
              Impressões feitas por transferência térmica necessitam utilizar
              ribbons. Este tipo de impressão pode ser aplicada a etiquetas de
              diversos tipos de materiais, como couché, BOPP e até mesmo o nylon
              resinado. As impressões feitas por transferência térmica são mais
              resistentes e, dependendo do ribbon utilizado e do material da
              etiqueta, podem ser expostas a altas e baixas temperaturas, podem
              ser expostas a umidade e a poeira. Etiquetas impressas por
              transferência térmica são ideais para precificação, identificação
              de produtos, controle de estoque, etiquetagem de roupas, jóias e
              caixas em geral, pois, além de possuírem uma maior resistência ao
              tempo, elas podem aguentar condições climáticas e ambientais que
              as etiqueta e cupons impressos via térmico direto não conseguem.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Recorte eletrônico
            </span>
            <span>
              O recorte eletrônico de vinil é um procedimento de corte realizado
              por uma plotter específica para este trabalho. No processo, os
              vinis são recortados na cor chapada para produção de logotipos
              e/ou textos nos formatos pré estabelecidos.
              <br />
              <br />
              Os arquivos para recorte eletrônico de vinil podem ser criados no
              Corel Draw ou no Ilustrator. Você deve lembrar de sempre
              transformar os textos em curva, sem conter imagens nos arquivos.
              Além disso, os arquivos devem ser salvos com as extensões CDR, EPS
              ou AI.
            </span>

            <span className="title">
              <FaPaintRoller className="iconTitle" />
              Laser de CO²
            </span>
            <span>
              O laser de CO2 possui como principal diferencial o uso de um
              sistema de corte a gás. Este gás é uma mistura gasosa de dióxido
              de carbono, o qual é estimulado eletricamente para o
              funcionamento. Possui ondas que são adequadas para trabalhos em
              materiais diversos, não sendo muito eficaz em materiais metálicos.
              <br />
              <br />
              As máquinas de corte e gravação a laser co2 possuem uma eficiência
              modelo, sendo adequada dentro dos padrões de sua especificação,
              além de contar com uma boa qualidade no eixo, sendo um dos tipos
              de máquina a laser mais utilizada. As máquinas de corte e gravação
              a laser co2 são indicadas para trabalhos em materiais de acrílico,
              madeira, vidro, papel, plástico, couro, MDF e materiais têxteis.
            </span>
          </Item>
        )}

        {menu === 3 && (
          <Item>
            <img src={finishinfo} alt="acabamentos" />
            <span>
              Nossos produtos possuem diversos acabamentos disponíveis, podendo
              ter o mesmo produto de várias formas finais. Acabamento na maioria
              das vezes é questão estética que durável. Abaixo veremos alguns
              possíveis acabamentos disponíveis em nosso site.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Corte Especial
            </span>
            <img className="buttonDownload" src={corteesp} alt="exemplo" />
            <span>
              Procedimento realizado em maquinário apropriado para que o
              material final tome a forma da linha de corte feita anteriormente
              em um programa de edição de vetores, como como por exemplo o
              CorelDRAW ou Illustrator.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Laminação
            </span>
            <img className="buttonDownload" src={laminacao} alt="exemplo" />
            <span>
              Película transparente que impermeabiliza e aumenta
              consideravelmente a durabilidade do material onde aplicada,
              disponível em fosco e brilho e exige conhecimento técnico para
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Resina
            </span>
            <img className="buttonDownload" src={resina} alt="exemplo" />
            <span>
              Resina transparente e rígida para aumentar a proteção e
              durabilidade do material. Ideal para superfícies pequenas para
              muito brilho e aparencia de vidro.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Bastão
            </span>
            <img className="buttonDownload" src={bastao} alt="exemplo" />
            <span>
              Bastão de madeira ou metalon, serve como sustentação para alguns
              materiais como Banners e Papel de Outdoor. A opção de madeira é
              ideal para materiais com peso máximo de 1,5kg, acima disso é
              essencial o bastão de metalon para maior resistência.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Ilhós
            </span>
            <img className="buttonDownload" src={ilhos} alt="exemplo" />
            <span>
              Peça metálica ideal para fazer fissões no material desejado, usado
              para fazer amarrações de sustentação do material. Normalmente
              usado em placas e backdrops.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Calha
            </span>
            <img className="buttonDownload" src={calha} alt="exemplo" />
            <span>
              Quadro feito em alumínio para sustentação e enquadramento,
              normalmente usado em placas empresariais para fachada de lojas.
            </span>

            <span className="title">
              <FaCut className="iconTitle" />
              Esqueleto
            </span>
            <img className="buttonDownload" src={esqueleto} alt="exemplo" />
            <span>
              Esqueleto de madeira para sustentação de quadros decorativos,
              normalmente usado em quadros com CANVAS, ideal para exposição.
              Este material não fica visível após o acabamento final.
            </span>
          </Item>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Information;
