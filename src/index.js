import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './config/config'
import {FirebaseContext} from './contexts/FirebaseContext'
import Auth from './contexts/FirebaseContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Auth>
        <App />
        </Auth>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
