/*eslint-disable*/
import React from "react";

/** Styled Components */
import {
  Container,
  ItemIcon,
  Bandeiras
} from './styles';

import Visa from '../../assets/img/bandeiras/VISA.png'
import Soro from '../../assets/img/bandeiras/SORO.png'
import Agiplan from '../../assets/img/bandeiras/AGIPLAN.png'
import American from '../../assets/img/bandeiras/AMERICAN.png'
import Banes from '../../assets/img/bandeiras/BANES.png'
import Cabal from '../../assets/img/bandeiras/CABAL.png'
import Credsystem from '../../assets/img/bandeiras/CREDSYSTEM.png'
import Credz from '../../assets/img/bandeiras/CREDZ.png'
import Diners from '../../assets/img/bandeiras/DINERS.png'
import Elo from '../../assets/img/bandeiras/ELO.png'
import Hipercard from '../../assets/img/bandeiras/HIPERCARD.png'
import JCB from '../../assets/img/bandeiras/JCB.png'
import Master from '../../assets/img/bandeiras/MASTER.png'
import Boleto from '../../assets/img/bandeiras/BOLETO.png'
import MercadoPago from '../../assets/img/bandeiras/MERCADOPAGO.png'
import Cielo from '../../assets/img/bandeiras/cielo.png'

/** Icons */
import {
  MdAddShoppingCart
} from 'react-icons/md';

const Payment = () => {
    return (
      <Container>
        <ItemIcon>
          <div className="icon">
            <MdAddShoppingCart />
          </div>
          <span className="title">Formas de <br />Pagamento</span>
        </ItemIcon>
        { screen.width > 800 && <hr className="divider" />}
        <Bandeiras>
          <img src={Visa} alt="Visa" />
          <img src={Master} alt="Master" />
          <img src={American} alt="American" />
          <img src={Elo} alt="Elo" />
          <img src={Hipercard} alt="Hipercard" />
          <img src={Cabal} alt="Cabal" />
          <img src={Soro} alt="Soro" />
          <img src={Agiplan} alt="Agiplan" />
          <img src={Banes} alt="Banes" />
          <img src={Credsystem} alt="Credsystem" />
          <img src={Credz} alt="Credz" />
          <img src={Diners} alt="Diners" />
          <img src={JCB} alt="JCB" />
          <img src={Boleto} alt="Boleto" />
          <img src={MercadoPago} alt="MercadoPago" />
          <img src={Cielo} alt="Cielo" />
        </Bandeiras>
      </Container>
    );
}

export default Payment;
