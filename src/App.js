import React, { Component } from 'react';
import NewForm from './components/NewForm/NewForm';
import GemList from './components/GemList/GemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewForm></NewForm>
        <GemList></GemList>
      </div>
    );
  }
}


export default App;
