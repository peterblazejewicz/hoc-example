import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
        <div className="card">
        <div className="card-body">
            <button className="btn btn-primary btn-lg">Button</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
