/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-globals */

import React from 'react';
import './Calculator.css';

const isOperator = (val) => {
  return !isNaN(val) || val === '.';
};

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className = {`button-wrapper ${
          isOperator(this.props.children) ? null : 'operator'}`}
          onClick= {() => {
            this.props.handleClick(this.props.children);
          }
          }>
        { this.props.children }
      </div>
    );
  }
}

export default Buttons;