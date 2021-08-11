/* eslint-disable no-unused-vars */
import React from 'react';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.input.total);

    const { total, next, operation } = this.props.input;
    let display = '0';
    if (total) {
      display = total;
    }
    if (next) {
      display = next;
    }
    // if (operation) {
    //   display = operation;
    // }

    return (
      <div className='input'><div className='input-t'>{ display }</div></div>
    );
  }
}
export default Input;