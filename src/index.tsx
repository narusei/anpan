import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const config = {
  apiKey: process.env.ANPAN_FIREBASE_API_KEY,
  authDomain: process.env.ANPAN_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.ANPAN_FIREBASE_DATEBASE_URL,
  projectId: process.env.ANPAN_FIREBASE_PROJECT_ID,
  storageBucket: process.env.ANPAN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.ANPAN_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.ANPAN_FIREBASE_APP_ID,
  measurementId: process.env.ANPAN_FIREBASE_MEASUREMENT_ID,
}

firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
