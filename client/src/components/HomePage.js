import React, { Component } from 'react';
import logo from './logo.svg'


class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the boilerplate! </h1>
        </header>
        <p className="App-intro">
        Check out the README to get started.
        </p>
      </div>
    );
  }
}

export default HomePage;
