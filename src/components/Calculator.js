/* eslint-disable no-unused-vars */
import React from 'react';
import Buttons from './Buttons.js';
import Input from './Input.js';
import operate from '../logic/operate.js';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  }

  render() {
    return (
      <div className='calculator'>
        <div className="input-calc">
        <Input input={this.state.input}/>
        </div>
      <div className='row'>
          <Buttons handleClick={this.addToInput}>AC</Buttons>
          <Buttons handleClick={this.addToInput}>+/-</Buttons>
          <Buttons handleClick={this.addToInput}>%</Buttons>
          <Buttons handleClick={this.addToInput}>+</Buttons>
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