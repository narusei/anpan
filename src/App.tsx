import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './auth/AuthProvider';
import { PrivateRoute } from './auth/PrivateRoute';
import { AuthenticatedRoute } from './auth/AuthenticatedRoute';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
function App(): JSX.Element {
  return (
    <div className="App">
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
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </Router>
      </AuthProvider>
  );
}

export default App;
