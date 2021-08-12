/* eslint-disable no-unused-vars */
import React from 'react';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { total, next } = this.props.input;
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
  }
}
export default Input;