import React, { Component } from 'react';
{
  //import logoDogma from 'assets/img/logoDogma.png';
}
class CardNFTV extends Component {
  render() {
    var priceNFT = 500;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h2 className="txt">NFT Precio Variable</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div className="card mb-3">
              <img
                src="assets/img/logoDogma.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NFT 1</h5>

                <p className="card-text">
                  <strong className="txt priceNFT"> {priceNFT} DMA </strong>
                </p>
                <div className="col-12">
                  <input type="number" />
                </div>
                <div className="col-12">
                  <button className="btn btn-dd">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNFTV;
