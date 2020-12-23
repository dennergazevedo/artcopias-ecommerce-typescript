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

    <Route path="/sign-up" exact component={Register} isRegister />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
