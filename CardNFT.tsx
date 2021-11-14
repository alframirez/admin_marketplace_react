import React, { Component } from 'react';
{
  //import logoDogma from 'assets/img/logoDogma.png';
}
class CardNFT extends Component {
  render() {
    var priceNFT = 500;
    return (
      <div className="container">
        <div className="row">
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
                <button className="btn btn-dd">Comprar</button>
              </div>
            </div>
          </div>

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
                <button className="btn btn-dd">Comprar</button>
              </div>
            </div>
          </div>
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
                <button className="btn btn-dd">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNFT;
