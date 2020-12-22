import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Homepage from '../views/Homepage';
import Register from '../views/Register';
import NotFound from '../views/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/sign-up" exact component={Register} />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
