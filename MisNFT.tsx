import React, { Component } from 'react';
import CardNFTPay from './CardNFTPay';
import Selector from './Selector';

class MiNFT extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Selector />
        </div>
        <div className="row justify-content-center">
          <CardNFTPay />
        </div>
      </div>
    );
  }
}

export default MiNFT;
