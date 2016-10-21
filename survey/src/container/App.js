import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
