import React, { Component } from 'react';
import logo from '../static/images/logo.svg';

import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header">
          {this.props.children}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
