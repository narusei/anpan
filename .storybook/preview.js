import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme } from '../src/thema';
import firebase from 'firebase';
import { AuthProvider } from '../src/auth/AuthProvider';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMEIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
firebase.analytics();

const theme = createTheme();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <AuthProvider>
            <Router>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Story {...context} />
            </Router>
          </AuthProvider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export const decorators = [withThemeProvider];
