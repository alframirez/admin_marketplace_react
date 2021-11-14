import React, { Component } from 'react';
import CardNFT from './CardNFT';
import CardNFTV from './CardNFTV';
import Selector from './Selector';

class Market extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Selector />
        </div>
        <div className="row">
          <CardNFT />
        </div>
        <div className="row justify-content-center">
          <CardNFTV />
        </div>
      </div>
    );
  }
}

export default Market;
