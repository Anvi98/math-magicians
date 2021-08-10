/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Calculator from './components/Calculator.js';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
