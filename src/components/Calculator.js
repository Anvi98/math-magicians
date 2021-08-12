/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { React, useEffect, useState } from 'react';
import Buttons from './Buttons.js';
import Input from './Input.js';
import calculate from '../logic/calculate.js';
import operate from '../logic/operate.js';

const Calculator = () => {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });

  const addToInput = (val) => {
    let { next, total, operation } = calculate(obj, val);
    if (next === undefined) {
      next = obj.next;
    }

    if (total === undefined) {
      total = obj.total;
    }

    if (operation === undefined) {
      operation = obj.operation;
    }
    setObj({ total, next, operation });
  };

  return (
    <div className='calculator'>
      <div className="input-calc">
      <Input input={obj}/>
      </div>
    <div className='row'>
        <Buttons handleClick={addToInput}>AC</Buttons>
        <Buttons handleClick={addToInput}>+/-</Buttons>
        <Buttons handleClick={addToInput}>%</Buttons>
        <Buttons handleClick={addToInput}>÷</Buttons>
      </div>
      <div className='row'>
        <Buttons handleClick={addToInput}>7</Buttons>
        <Buttons handleClick={addToInput}>8</Buttons>
        <Buttons handleClick={addToInput}>9</Buttons>
        <Buttons handleClick={addToInput}>x</Buttons>
      </div>
      <div className='row'>
        <Buttons handleClick={addToInput}>4</Buttons>
        <Buttons handleClick={addToInput}>5</Buttons>
        <Buttons handleClick={addToInput}>6</Buttons>
        <Buttons handleClick={addToInput}>-</Buttons>
      </div>
      <div className='row'>
        <Buttons handleClick={addToInput}>1</Buttons>
        <Buttons handleClick={addToInput}>2</Buttons>
        <Buttons handleClick={addToInput}>3</Buttons>
        <Buttons handleClick={addToInput}>+</Buttons>
      </div>
      <div className='last-row'>
        <div className='hey'>
        <Buttons handleClick={addToInput}>0</Buttons>
        </div>
        <Buttons handleClick={addToInput}>.</Buttons>
        <Buttons handleClick={addToInput}>=</Buttons>
      </div>
    </div>
  );
};

export default Calculator;