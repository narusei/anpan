import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { LandingPage } from '../pages/LandingPage';
import { AnpanListPage } from '../pages/anpan/AnpanListPage';

export const AuthenticatedRoute = (props: RouteProps): JSX.Element => {
  const auth = useAuth();
  const Component = auth.currentUser ? AnpanListPage : LandingPage;

  return <Route {...props} component={Component}></Route>;
};
