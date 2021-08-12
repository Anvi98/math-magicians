/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import Buttons from './Buttons.js';
import Input from './Input.js';
import calculate from '../logic/calculate.js';
import operate from '../logic/operate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.addToInput = this.addToInput.bind(this);
  }

  addToInput = (val) => {
    calculate(this.state, val);
    const { next, total, operation } = calculate(this.state, val);
    if (next !== undefined) {
      this.setState({ next });
    }

    if (total !== undefined) {
      this.setState({ total });
    }

    if (operation !== undefined) {
      this.setState({ operation });
    }
  }

  render() {
    return (
      <div className='calculator'>
        <div className="input-calc">
        <Input input={this.state}/>
        </div>
      <div className='row'>
          <Buttons handleClick={this.addToInput}>AC</Buttons>
          <Buttons handleClick={this.addToInput}>+/-</Buttons>
          <Buttons handleClick={this.addToInput}>%</Buttons>
          <Buttons handleClick={this.addToInput}>÷</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={this.addToInput}>7</Buttons>
          <Buttons handleClick={this.addToInput}>8</Buttons>
          <Buttons handleClick={this.addToInput}>9</Buttons>
          <Buttons handleClick={this.addToInput}>x</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={this.addToInput}>4</Buttons>
          <Buttons handleClick={this.addToInput}>5</Buttons>
          <Buttons handleClick={this.addToInput}>6</Buttons>
          <Buttons handleClick={this.addToInput}>-</Buttons>
        </div>
        <div className='row'>
          <Buttons handleClick={this.addToInput}>1</Buttons>
          <Buttons handleClick={this.addToInput}>2</Buttons>
          <Buttons handleClick={this.addToInput}>3</Buttons>
          <Buttons handleClick={this.addToInput}>+</Buttons>
        </div>
        <div className='last-row'>
          <div className='hey'>
          <Buttons handleClick={this.addToInput}>0</Buttons>
          </div>
          <Buttons handleClick={this.addToInput}>.</Buttons>
          <Buttons handleClick={this.addToInput}>=</Buttons>
        </div>
      </div>
    );
  }
}

export default Calculator;