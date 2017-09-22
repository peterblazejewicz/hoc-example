import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
        <div className="card">
          <div className="card-body">
            <Button label="Click Me" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
