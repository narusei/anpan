import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { PrivateRoute } from './auth/PrivateRoute';
import { AuthenticatedRoute } from './auth/AuthenticatedRoute';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { MemoListPage } from './pages/my-list/MemoListPage';
import { ThemeProvider } from '@material-ui/core/styles';
import createTheam from './thema';

const theme = createTheam();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <AuthenticatedRoute exact path="/"></AuthenticatedRoute>
          <Route exact path="/signin" component={SignInPage}></Route>
          <Route exact path="/signup" component={SignUpPage}></Route>
          <PrivateRoute
            exact
            path="/my-list"
            component={MemoListPage}
          ></PrivateRoute>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
