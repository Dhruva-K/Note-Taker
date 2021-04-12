import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDTIQmqSd36HxsaNQ3QUzbDIAnY15KF2pw",
  authDomain: "notespro-ac318.firebaseapp.com",
  projectId: "notespro-ac318",
  storageBucket: "notespro-ac318.appspot.com",
  messagingSenderId: "847411286202",
  appId: "1:847411286202:web:3f71931f603d091f687283",
  measurementId: "G-YN2RF539J4"
});


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
