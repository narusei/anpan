import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme } from './thema';
import { AuthProvider } from './auth/AuthProvider';
import { PrivateRoute } from './auth/PrivateRoute';
import { AuthenticatedRoute } from './auth/AuthenticatedRoute';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { AnpanListPage } from './pages/anpan/AnpanListPage';
import { AnpanDetailPage } from './pages/anpan/AnpanDetailPage';

const theme = createTheme();

function App(): JSX.Element {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <Router>
              <AuthenticatedRoute exact path="/"></AuthenticatedRoute>
              <Route exact path="/signin" component={SignInPage}></Route>
              <Route exact path="/signup" component={SignUpPage}></Route>
              <PrivateRoute
                exact
                path="/my-list"
                component={AnpanListPage}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/my-list/:id"
                component={AnpanDetailPage}
              ></PrivateRoute>
            </Router>
          </AuthProvider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;
