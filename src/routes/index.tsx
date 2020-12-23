import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
/** Pages */
import Homepage from '../views/Homepage';
import Register from '../views/Register';
import NotFound from '../views/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Homepage}
      isPrivate={false}
      isRegister={false}
    />
    <Route
      path="/sign-up"
      exact
      component={Register}
      isPrivate={false}
      isRegister
    />

    <Route
      path="/"
      exact={false}
      component={NotFound}
      isPrivate={false}
      isRegister={false}
    />
  </Switch>
);

export default Routes;
