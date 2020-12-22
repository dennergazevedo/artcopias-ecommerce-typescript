/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

/** Services */
import axios from 'axios';
import validator from 'validator';
import { toast } from 'react-toastify';

/** Styles */
import './style.css';

/** Components */
import InputMask from 'react-input-mask';
import Lottie from 'react-lottie';
import Modal from '../Modal';

/** Assets */
import whatsIcon from '../../assets/json/whatsapp.json';
import checkIcon from '../../assets/json/check.json';
import logo from '../../assets/img/logosemnome.png';

const ZapPlugin: React.FC = () => {
  const mandeUmZap = {
    loop: false,
    autoplay: true,
    animationData: whatsIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const check = {
    loop: false,
    autoplay: true,
    animationData: checkIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState('');
  const [phone, setPhone] = useState('');
  const [campos, setCampos] = useState(false);
  const [msg, setMsg] = useState('');
  const [send, setSend] = useState(false);
  const toggle = () => setModal(!modal);

  async function handleSendMessage() {
    if (validator.isEmail(msg)) {
      if (nome.length > 3 && phone !== null && msg !== '') {
        let numberstr = phone.replace('(', '');
        numberstr = numberstr.replace(')', '');
        numberstr = numberstr.replace('+', '');
        numberstr = numberstr.replace(` `, '');
        numberstr = numberstr.replace(` `, '');
        numberstr = numberstr.replace('-', '');
        const number = parseInt(numberstr, 10);

        const headers = {
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_TOKEN_ZAP,
        };

        try {
          await axios.post(
            `https://artcopias-api.mandeumzap.com.br/v1/messages`,
            {
              number,
              serviceId: process.env.REACT_APP_SERVICEID_ZAP,
              text: `Olá ${nome}, tudo bem? Esse é o Atendimento Virtual da Art Cópias, como podemos ajudá-lo(a)?`,
            },
            { headers },
          );
          setSend(true);
        } catch (err) {
          toast.error(`Não foi possível entregar sua mensagem!`, {
            position: 'bottom-right',
          });
        }
      } else {
        setCampos(true);
      }
    } else {
      toast.error('Digite um e-mail válido', { position: 'bottom-right' });
    }
  }

  return (
    <>
      <div className="mainContainerZapPlugin" onClick={toggle}>
        <Lottie options={mandeUmZap} width="60px" />
      </div>
      <Modal isToggled={modal}>
        {send ? (
          <div className="sendMessageZapPlugin">
            <Lottie options={check} width="200px" />
            <span className="spanSendZapPlugin">
              Mensagem Enviada com Sucesso!
            </span>
            <span className="span2SendZapPlugin">
              Iremos responder pelo Whatsapp.
            </span>
            <button onClick={toggle} type="button" className="buttonClose">
              FECHAR
            </button>
          </div>
        ) : (
          <div className="modalContainer">
            <div className="modalHeaderZapPlugin">
              <img src={logo} alt="LOGO" width="50px" />
              <span className="spanHeaderZapPlugin">
                Olá! Preencha os campos abaixo para iniciar aconversa no
                WhatsApp conosco!
              </span>
            </div>
            <div className="modalBodyZapPlugin">
              <input
                placeholder="Nome*"
                className="inputZapPlugin"
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <input
                placeholder="Email*"
                className="inputZapPlugin"
                type="email"
                value={msg}
                onChange={e => setMsg(e.target.value)}
              />
              <InputMask
                mask="+55 (99)9 9999-9999"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                className="inputZapPlugin"
                placeholder=" +55 (31)9 8765-4321"
              />
            </div>
            {campos && (
              <span className="spanCamposZapPlugin">
                Preencha todos os campos!
              </span>
            )}
            <button
              type="button"
              className="sendButtonZapPlugin"
              onClick={handleSendMessage}
            >
              Iniciar Conversa
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ZapPlugin;
