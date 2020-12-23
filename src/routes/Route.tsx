import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';

interface IProps {
  component: React.FC;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  isRegister?: boolean;
}

const PrivateRoute: React.FC<IProps> = ({
  path,
  exact,
  component: Component,
  isPrivate,
  isRegister,
}: IProps) => {
  const { signed } = store.store.getState().auth;

  if (signed && isRegister) {
    return <Redirect to="/" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/sign-up" />;
  }

  return <Route path={path} exact={exact} component={Component} />;
};

PrivateRoute.defaultProps = {
  isPrivate: false,
  isRegister: false,
  exact: false,
};

export default PrivateRoute;
