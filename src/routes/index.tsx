import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Homepage from '../views/Homepage';
import NotFound from '../views/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
