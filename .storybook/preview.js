import { muiTheme } from 'storybook-addon-material-ui';
import createTheam from '../src/thema';
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

const theam = createTheam();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  muiTheme(theam),
  (Story) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
];
