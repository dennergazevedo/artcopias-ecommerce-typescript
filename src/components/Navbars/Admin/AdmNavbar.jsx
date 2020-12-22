/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

// ASSETS
import { toast } from 'react-toastify';
import Logo from "../../assets/img/logosemnome.png"

// SERVICES
import history from '../../../services/history';
import api from '../../../services/api';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

// ICONS
import {
  FaHome,
  FaBoxes,
  FaTools,
  FaCode,
  FaImage,
  FaSketch,
  FaLink,
  FaBoxOpen,
  FaFileAlt,
  FaUserSecret,
  FaUserTag,
  FaUserFriends,
} from 'react-icons/fa';

// STYLED COMPONENTS
import { Navbar, Left, Right, ItemDrop, DropButton } from './admStyles.js';

const LojaNavbar = () => {
  const dispatch = useDispatch();

  const profileRedux = useSelector(state => state.user.user);
  const profileToken = useSelector(state => state.auth.token);

  const [profile] = useState(profileRedux);
  const [token] = useState(profileToken);
  const [tools, setTools] = useState(false);
  const [admin, setAdmin] = useState(false);

  const toggleAdmin = () => setAdmin(!admin);
  const toggleTools = () => setTools(!tools);

  async function handleAdmin() {
    if (profile) {
      const response = await api.get(`user_comum/${profile.id}`);
      if (
        Number(response.data.provider) !==
        Number(process.env.REACT_APP_PROVIDER_ADM)
      ) {
        window.location.href = '/';
        toast.error(
          'É necessário ser administrador para acessar este painel.',
          { position: 'bottom-right' },
        );
      }
    } else {
      window.location.href = '/';
      toast.error('É necessário ser administrador para acessar este painel.', {
        position: 'bottom-right',
      });
    }
  }

  const handleSignOut = () => {
    dispatch(signOut());
  };

  async function verifyToken() {
    try {
      if (profile.email)
        await api.post('verify_token', {
          token,
          email: profile.email,
          id: profile.id,
        });
    } catch (err) {
      toast.error(`Seu login expirou, entre novamente!`, {
        position: 'bottom-right',
      });
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      handleSignOut();
    }
  }

  function blurTools() {
    if (tools) {
      setTools(false);
    }
  }

  function blurAdmin() {
    if (admin) {
      setAdmin(false);
    }
  }

  useEffect(() => {
    handleAdmin();
  }, []);

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <Navbar>
        <Left onClick={() => history.push('/adm-home')}>
          <img src={Logo} alt="LOGOMARCA" />
          <span>PAINEL DE CONTROLE</span>
        </Left>
        <Right>
          <ItemDrop onClick={toggleAdmin} onBlur={blurAdmin}>
            <FaUserSecret className="icon" />
            ADMIN
              {
                admin? (
                <DropButton>
                  <div onClick={() => history.push('/adm-search-admin')}>
                    <FaUserSecret className="icon"/>
                    PESQUISAR ADMIN
                  </div>
                  <div onClick={() => history.push('/adm-register')}>
                    <FaUserSecret className="icon"/>
                    CADASTRAR ADMIN
                  </div>
                  <div onClick={() => history.push('/adm-search-revendedor')}>
                    <FaUserTag className="icon"/>
                    PESQUISAR REVENDEDOR
                  </div>
                  <div onClick={() => history.push('/adm-register-revendedor')}>
                    <FaUserTag className="icon"/>
                    CADASTRAR REVENDEDOR
                  </div>
                  <div onClick={() => history.push('/adm-search-users')}>
                    <FaUserFriends className="icon"/>
                    USUÁRIOS CADASTRADOS
                  </div>
                </DropButton>
              )
            ) : null}
          </ItemDrop>
          <ItemDrop onClick={toggleTools} onBlur={blurTools}>
            <FaTools className="icon" />
            FERRAMENTAS
            {tools ? (
              <DropButton>
                <div onClick={() => history.push('/adm-register-product')}>
                  <FaBoxes className="icon" />
                  CADASTRAR PRODUTO
                </div>

                <div onClick={() => history.push('/adm-search-product')}>
                  <FaBoxes className="icon" />
                  PESQUISAR PRODUTO
                </div>

                <div onClick={() => history.push('/adm-register-script')}>
                  <FaCode className="icon" />
                  CADASTRAR SCRIPT
                </div>

                <div onClick={() => history.push('/adm-update-script')}>
                  <FaCode className="icon" />
                  EDITAR / APAGAR SCRIPT
                </div>
                <div onClick={() => history.push('/adm-register-slideshow')}>
                  <FaImage className="icon" />
                  CADASTRAR SLIDE
                </div>
                <div onClick={() => history.push('/adm-update-slideshow')}>
                  <FaImage className="icon" />
                  EDITAR / APAGAR SLIDE
                </div>
                <div onClick={() => history.push('/adm-cadastro-destaque')}>
                  <FaSketch className="icon" />
                  CADASTRAR SUPER DESTAQUE
                </div>
                <div onClick={() => history.push('/adm-super-destaque')}>
                  <FaSketch className="icon" />
                  EDITAR / APAGAR SUPER DESTAQUE
                </div>
                <div onClick={() => history.push('/adm-select-destaque')}>
                  <FaSketch className="icon" />
                  SELECIONAR SUPER DESTAQUE
                </div>
                <div onClick={() => history.push('/adm-stock-box')}>
                  <FaBoxOpen className="icon" />
                  CAIXAS DE ENVIO
                </div>
                <div onClick={() => history.push('/adm-stock')}>
                  <FaFileAlt className="icon" />
                  CONTROLE DE ESTOQUE
                </div>
                <div onClick={() => history.push('/adm-link')}>
                  <FaLink className="icon" />
                  LINK DE PAGAMENTO
                </div>
              </DropButton>
            ) : null}
          </ItemDrop>
          <div className="buttonDiv" onClick={() => history.push('/adm-all-orders')}>
          >
            <FaBoxes />
            <span>PEDIDOS</span>
          </div>
          <div className="buttonDiv" onClick={() => history.push('/')}>
            <FaHome />
            <span>LOJA</span>
          </div>
        </Right>
      </Navbar>
    </>
  );
};

export default LojaNavbar;
