import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

/** Pages */
import Homepage from '../views/Homepage';
import Social from '../views/Social';
import Contact from '../views/Contact';

import Register from '../views/Register';

import NotFound from '../views/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/social" exact component={Social} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/sign-up" exact component={Register} isRegister />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
