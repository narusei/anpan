import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { LandingPage } from '../pages/LandingPage';
import { MemoListPage } from '../pages/my-list/MemoListPage';

export const AuthenticatedRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const auth = useAuth();
  const Component = auth.currentUser ? MemoListPage : LandingPage;

  return <Route {...props} component={Component}></Route>;
};
