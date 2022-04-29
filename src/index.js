import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXNUdNkAOTi5uvzEti1n-aqwwxbfnMdzU",
  authDomain: "soul-magic-53e04.firebaseapp.com",
  projectId: "soul-magic-53e04",
  storageBucket: "soul-magic-53e04.appspot.com",
  messagingSenderId: "474784056761",
  appId: "1:474784056761:web:330c61a654160d3926e268"
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
