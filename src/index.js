import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzE2vDijXS3SqvnN24nz1-f23AIt1pLIQ",
  authDomain: "soul-magic-db606.firebaseapp.com",
  projectId: "soul-magic-db606",
  storageBucket: "soul-magic-db606.appspot.com",
  messagingSenderId: "78786758406",
  appId: "1:78786758406:web:72c734b5001559af688087"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
