import React, { Component } from 'react';

class Selector extends Component {
  render() {
    return (
      <div class="container">
        {
          //Selector de componente
        }
        <div class="row">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <label class="btn btn-d" for="btnradio1">
              <input
                type="checkbox"
                class="btn-check"
                id="btnradio1"
                autocomplete="off"
              ></input>
              Market
            </label>
            <label class="btn btn-d" for="btnradio2">
              Mi NFT
            </label>
            <label class="btn btn-d" for="btnradio3">
              Login
            </label>
          </div>
        </div>

        {
          // Dropdown de seleccion
        }

        <div className="row justify-content-center">
          <div className="col text-center">
            <div class="dropdown">
              <button
                class="btn btn-dd dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleccionar Colección
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selector;
