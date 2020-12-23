import React from 'react';

// STYLED COMPONENTS
import { Container } from './styles';

const Prazo: React.FC = () => {
  return (
    <Container>
      <p>
        Todos as compras realizadas pelo site www.artcopias.com.br são entregues
        através dos CORREIOS via Sedex/PAC. O valor do Sedex/PAC fica a cargo do
        cliente.
      </p>

      <p>
        Os pedidos são postados nos CORREIOS via Sedex/PAC até 1 dia útil após a
        confirmação de produção. Recomendamos observar com atenção o prazo de
        produção de cada produto e o prazo só começará a contar após a
        confirmação do pagamento.
      </p>

      <p>
        Após a postagem, enviaremos um e-mail contendo o código do objeto
        postado para o rastreamento da entrega junto ao site dos correios, tais
        como as normas para o recebimento da mercadoria.
      </p>

      <p>Prazo de entrega dos Correios após a postagem:</p>

      <p>PAC (03 a 10 dias úteis, depende da localidade).</p>

      <p>
        Caso haja eventual atraso por motivo de força maior na postagem por
        parte da ArtCópias, o cliente será informado da situação por e-mail ou
        telefone.
      </p>

      <p>
        Enviaremos a mercadoria para o endereço de entrega preenchido no pedido,
        caso o cliente tenha preenchido o endereço errado e a mercadoria nos
        seja devolvida pelo Correio, será necessário o pagamento de uma nova
        postagem pelo cliente para que possamos reenviar a mercadoria com o
        endereço correto.
      </p>

      <p>
        Não podemos nos responsabilizar por atrasos do CORREIO, pois não temos
        controle sobre a mercadoria uma vez postada. No caso de extravio
        comprovado por parte dos CORREIOS, a ArtCópias só enviará outra
        mercadoria, ou reembolsará a mesma, conforme o que ficar decidido entre
        ambas as partes via e-mail ou telefone.
      </p>

      <p>
        A ArtCópias somente efetua troca de mercadoria ou reembolso da mesma
        caso o produto apresente defeito de fabricação, desde que seja nos
        comunicado por e-mail ou telefone no prazo da garantia. Para troca ou
        reembolso, é indispensável nos devolver o produto em questão para
        análise JUNTO COM A EMBALAGEM. Para o ressarcimento do mesmo, a postagem
        de devolução e a postagem do novo produto será por conta da ArtCópias.
      </p>

      <p style={{ marginTop: 30 }}>
        <b style={{ fontSize: '14px' }}>A ArtCópias agradece sua atenção.</b>
      </p>
    </Container>
  );
};

export default Prazo;
