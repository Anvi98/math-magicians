import React from 'react';
import Buttons from './Buttons.js';
import Input from './Input.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div className='calculator'>
        <Input input={this.state.input}/>
      <div className='row'>
          <Buttons>AC</Buttons>
          <Buttons>+/-</Buttons>
          <Buttons>%</Buttons>
          <Buttons>+</Buttons>
        </div>
        <div className='row'>
          <Buttons>7</Buttons>
          <Buttons>8</Buttons>
          <Buttons>9</Buttons>
          <Buttons>x</Buttons>
        </div>
        <div className='row'>
          <Buttons>4</Buttons>
          <Buttons>5</Buttons>
          <Buttons>6</Buttons>
          <Buttons>-</Buttons>
        </div>
        <div className='row'>
          <Buttons>1</Buttons>
          <Buttons>2</Buttons>
          <Buttons>3</Buttons>
          <Buttons>+</Buttons>
        </div>
        <div className='last-row'>
          <div className='hey'>
          <Buttons>0</Buttons>
          </div>
          <Buttons>.</Buttons>
          <Buttons>=</Buttons>
        </div>
      </div>
    );
  }
}

export default Calculator;