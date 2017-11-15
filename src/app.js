import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
