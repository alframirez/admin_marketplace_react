import React, { Component } from 'react';

class Selector extends Component {
  render() {
    return (
      <div className="container">
        {
          //Selector de componente
        }
        <div className="row">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <label className="btn btn-d" for="btnradio1">
              <input
                type="checkbox"
                className="btn-check"
                id="btnradio1"
                autocomplete="off"
              />
              Market
            </label>
            <label className="btn btn-d" for="btnradio2">
              Mi NFT
            </label>
            <label className="btn btn-d" for="btnradio3">
              Login
            </label>
          </div>
        </div>

        {
          // Dropdown de seleccion
        }
        {/*

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
        
        */}

        {
          //prueba
        }
        <select
          className="form-select  btn-dd"
          aria-label="Default select example"
        >
          <option selected>Seleccionar Colección</option>
          <option value="1">Colección 1</option>
          <option value="2">Colección 2</option>
          <option value="3">Colección 3</option>
        </select>

        {
          //fin de la prueba
        }
      </div>
    );
  }
}

export default Selector;
