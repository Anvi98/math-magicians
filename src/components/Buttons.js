/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-globals */

import React from 'react';
import './Calculator.css';

const isOperator = (val) => {
  return !isNaN(val) || val === '.';
};

const Buttons = (props) => {
  return (
    <div
      className = {`button-wrapper ${
        isOperator(props.children) ? null : 'operator'}`}
        onClick= {() => {
          props.handleClick(props.children);
        }
        }>
      { props.children }
    </div>
  );
};

export default Buttons;