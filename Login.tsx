import React, { Component } from 'react';
import CardNFTU from './CardNFTU';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h2 className="txt">Admin</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <label for="basic-url" class="form-label">
              <strong className="txt">Nombre</strong>
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="row">
              <label for="basic-url" class="form-label">
                <strong className="txt">Tipo</strong>
              </label>
              <div className="col-lg-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Precio Fijo
                </label>
              </div>

              <div className="col-lg-6">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Precio Variable
                </label>
              </div>
              <div className="col-lg-6">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardNFTU />
      </div>
    );
  }
}

export default Login;
