/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

/** Redux */
import { connect } from 'react-redux';

/** Notify */
import { toast } from 'react-toastify';

/** Icons */
import {
  FaRegEnvelope,
  FaUserAlt,
  FaHome,
  FaAngleDown,
  FaComments,
  FaRegCheckCircle,
  FaSignOutAlt,
  FaHandshake,
  FaAngleRight,
  FaBars,
  FaBox,
  FaFileInvoiceDollar,
  FaInfo,
  FaShoppingCart,
} from 'react-icons/fa';

/** Assets */
import Logo from '../../../assets/img/logo.png';

/** Services */
import store, { IApplicationState } from '../../../store';
import { IAuth, AuthTypes } from '../../../store/ducks/auth/types';
import api from '../../../services/api';
import history from '../../../services/history';

/** Styled Components */
import {
  Navbar,
  Left,
  Right,
  Logomarca,
  ItemNav,
  DropButton,
  ItemDrop,
  Menu,
  ItemNavDiv,
  Divider,
  Profile,
} from './styles';

/** Components */
import Search from '../../Search';

/** Props Interface */
interface IProps {
  signed: boolean;
  data: IAuth;
}

function LojaNavbar({ data, signed }: IProps) {
  const [product, setProduct] = useState<boolean>(true);
  const [work, setWork] = useState<boolean>(true);
  const [user, setUser] = useState<boolean>(true);
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggleProduct = () => setProduct(!product);
  const toggleWork = () => setWork(!work);
  const toggleUser = () => setUser(!user);
  const toggleNavbar = () => setNavbar(!navbar);

  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    if (data.email) {
      try {
        await api.get('verify_token');
      } catch (err) {
        toast.info('Seu login expirou, entre novamente.', {
          position: 'bottom-center',
        });
        handleSignOut();
      }
    }
  }

  function blurNavbar() {
    if (navbar) {
      setNavbar(false);
    }
  }

  function handleSignOut() {
    toast.info('Aguarde, processando...', { position: 'bottom-center' });
    store.store.dispatch({
      type: AuthTypes.AUTH_LOGOUT,
    });
  }

  function handleMenu(menu: string) {
    history.push(`/products_menu/${menu}`);
  }

  return (
    <>
      {screen.width < 800 || window.innerWidth < 800 ? (
        <>
          <Menu>
            <FaBars
              className="iconBar"
              onClick={toggleNavbar}
              onBlur={blurNavbar}
            />
            <Logomarca src={Logo} alt="LOGO" />
          </Menu>
          {navbar ? (
            <Navbar>
              <Search />
              <Left>
                <ItemNav href="/">
                  <FaHome className="icon" />
                  Página Inicial
                </ItemNav>

                <ItemNav href="/all-products">
                  <FaBox className="icon" />
                  Produtos
                </ItemNav>

                <ItemNav href="/budget">
                  <FaFileInvoiceDollar className="icon" />
                  Solicitar Orçamento
                </ItemNav>

                <ItemNav href="/information">
                  <FaInfo className="icon" />
                  Informações
                </ItemNav>

                <ItemNav href="/contact">
                  <FaRegEnvelope className="icon" />
                  Contato
                </ItemNav>

                <ItemNav href="/social">
                  <FaComments className="icon" />
                  Social
                </ItemNav>

                <ItemNav href="/work-with-us">
                  <FaHandshake className="icon" />
                  Seja um Parceiro
                </ItemNav>

                <ItemNav href="/send-curriculum">
                  <FaHandshake className="icon" />
                  Enviar Currículo Profissional
                </ItemNav>
              </Left>

              <Divider />

              {data ? (
                <Profile>
                  <span>{data.name}</span>
                  <span>{data.email}</span>
                </Profile>
              ) : null}

              <Right>
                {signed ? (
                  <>
                    <ItemNav href="/orders">
                      <FaRegCheckCircle className="icon" />
                      Meus Pedidos
                    </ItemNav>

                    <ItemNav href="/profile">
                      <FaRegCheckCircle className="icon" />
                      Minha Conta
                    </ItemNav>

                    <ItemNavDiv onClick={handleSignOut}>
                      <FaSignOutAlt className="icon" />
                      Sair
                    </ItemNavDiv>
                  </>
                ) : (
                  <ItemNav href="/sign-up">
                    <FaUserAlt className="icon" />
                    Login/Cadastre-se
                  </ItemNav>
                )}
              </Right>
            </Navbar>
          ) : null}
        </>
      ) : (
        <Navbar>
          <Left>
            <Logomarca src={Logo} alt="LOGO" />

            <ItemNav href="/">
              <FaHome className="icon" />
              Página Inicial
            </ItemNav>

            <ItemDrop
              onClick={toggleProduct}
              onBlur={() => (!product ? setProduct(true) : null)}
            >
              <FaAngleDown className="icon" />
              Produtos
              {!product ? (
                <DropButton>
                  <div onClick={() => handleMenu('Adesivos')}>
                    <FaAngleRight className="icon" />
                    Adesivos
                  </div>

                  <div onClick={() => handleMenu('Lonas')}>
                    <FaAngleRight className="icon" />
                    Lonas / Banners
                  </div>

                  <div onClick={() => handleMenu('Brindes')}>
                    <FaAngleRight className="icon" />
                    Brindes
                  </div>

                  <div onClick={() => handleMenu('Festa')}>
                    <FaAngleRight className="icon" />
                    Faça sua Festa
                  </div>

                  <div onClick={() => handleMenu('Empresarial')}>
                    <FaAngleRight className="icon" />
                    Empresarial
                  </div>

                  <div onClick={() => history.push('/all-products')}>
                    <FaAngleRight className="icon" />
                    Todos Produtos
                  </div>

                  <div onClick={() => history.push('/budget')}>
                    <FaAngleRight className="icon" />
                    Solicitar Orçamento
                  </div>

                  <div onClick={() => history.push('/information')}>
                    <FaAngleRight className="icon" />
                    Informações
                  </div>
                </DropButton>
              ) : null}
            </ItemDrop>

            <ItemNav href="/contact">
              <FaRegEnvelope className="icon" />
              Contato
            </ItemNav>

            <ItemNav href="/social">
              <FaComments className="icon" />
              Social
            </ItemNav>

            <ItemDrop
              onClick={toggleWork}
              onBlur={() => (!work ? setWork(true) : null)}
            >
              <FaHandshake className="icon" />
              Trabalhe Conosco
              {!work ? (
                <DropButton>
                  <div onClick={() => history.push('/work-with-us')}>
                    <FaAngleRight className="icon" />
                    Seja um Parceiro
                  </div>

                  <div onClick={() => history.push('/send-curriculum')}>
                    <FaAngleRight className="icon" />
                    Enviar Currículo Profissional
                  </div>
                </DropButton>
              ) : null}
            </ItemDrop>
          </Left>
          <Right>
            {screen.width > 990 && window.innerWidth > 990 ? <Search /> : null}

            {signed ? (
              <>
                <ItemNav
                  href="/cart"
                  style={{ marginLeft: '20px', marginTop: '5px' }}
                >
                  <FaShoppingCart className="icon" />
                </ItemNav>
                <ItemDrop
                  onClick={toggleUser}
                  onBlur={() => (!user ? setUser(true) : null)}
                >
                  <FaUserAlt className="iconNav" />
                  {!user ? (
                    <DropButton style={{ right: 30 }}>
                      <div onClick={() => history.push('/orders')}>
                        <FaRegCheckCircle className="icon" />
                        Meus Pedidos
                      </div>

                      <div onClick={() => history.push('/profile')}>
                        <FaUserAlt className="icon" />
                        Minha Conta
                      </div>

                      <div onClick={() => handleSignOut()}>
                        <FaSignOutAlt className="icon" />
                        Sair
                      </div>
                    </DropButton>
                  ) : null}
                </ItemDrop>
              </>
            ) : (
              <ItemNav href="/sign-up">
                <FaUserAlt className="icon" />
                Login/Cadastre-se
              </ItemNav>
            )}
          </Right>
        </Navbar>
      )}
    </>
  );
}

const mapStateToProps = ({ auth }: IApplicationState) => ({
  data: auth.data,
  signed: auth.signed,
});

export default connect(mapStateToProps)(LojaNavbar);
