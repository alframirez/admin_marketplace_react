import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Market from './Market';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNFT from './MisNFT';
import Login from './Login';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
