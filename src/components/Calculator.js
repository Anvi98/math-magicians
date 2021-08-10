import React from 'react';
import './Calculator.css';
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-globals */

const isOperator = (val) => {
  return !isNaN(val) || val === '.' || val === '=';
};

const Calculator = (props) => (
    <div
      className = {`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}>
      {props.children}
    </div>
);
export default Calculator;