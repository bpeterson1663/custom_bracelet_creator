import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GemListContainer from './components/GemListContainer/GemListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GemListContainer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
