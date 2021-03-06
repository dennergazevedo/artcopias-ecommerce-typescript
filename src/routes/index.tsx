import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

/** Pages */
import Homepage from '../views/Homepage';
import Social from '../views/Social';
import Contact from '../views/Contact';
import ForgotPassword from '../views/ForgotPassword';
import Information from '../views/Information';
import PrivacyPolicy from '../views/PrivacyPolicy';
import UserTerms from '../views/UserTerms';
import DeliveryTime from '../views/DeliveryTime';
import ResetPassword from '../views/ResetPassword';
import WorkWithUs from '../views/WorkWithUs';
import SendCurriculum from '../views/SendCurriculum';
import Budget from '../views/Budget';
import AllProducts from '../views/ProductMap/AllProducts';
import MenuProduct from '../views/ProductMap/MenuProduct';
import SearchProduct from '../views/ProductMap/SearchProduct';
import SearchMenu from '../views/ProductMap/SearchMenu';
import ProductDetails from '../views/ProductDetails';

import Cart from '../views/Cart';
import Checkout from '../views/Checkout';
import Account from '../views/Account';

import Register from '../views/Register';

import NotFound from '../views/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/social" exact component={Social} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/information" exact component={Information} />
    <Route path="/politica-de-privacidade" exact component={PrivacyPolicy} />
    <Route path="/termos-de-uso" exact component={UserTerms} />
    <Route path="/prazos-de-entrega" exact component={DeliveryTime} />
    <Route
      path="/reset-password/:email/:token"
      exact
      component={ResetPassword}
    />
    <Route path="/work-with-us" exact component={WorkWithUs} />
    <Route path="/send-curriculum" exact component={SendCurriculum} />
    <Route path="/budget" exact component={Budget} />
    <Route path="/all-products" exact component={AllProducts} />
    <Route path="/menu-product/:menu/:name" exact component={MenuProduct} />
    <Route path="/search-product/:name" exact component={SearchProduct} />
    <Route path="/search-bymenu/:menu" exact component={SearchMenu} />
    <Route path="/product-details/:id" exact component={ProductDetails} />

    <Route path="/cart" exact component={Cart} isPrivate />
    <Route path="/checkout/:id" exact component={Checkout} isPrivate />
    <Route path="/profile" exact component={Account} isPrivate />

    <Route path="/sign-up" exact component={Register} isRegister />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
