import React, { Component } from 'react';
import Selector from './Selector';

class Market extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <Selector />
        </div>
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
