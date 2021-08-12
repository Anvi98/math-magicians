/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
  const { total, next } = props.input;
  let display = '0';
  if (total) {
    display = total;
  }
  if (next) {
    display = next;
  }

  return (
    <div className='input'><div className='input-t'>{ display }</div></div>
  );
};
export default Input;