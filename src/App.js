import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import NavigationBar from './components/UI/NavigationBar/NavigationBar';
import GemList from './components/GemList/GemList';
import NewGem from './components/NewGem/NewGem';
import EditGem from './components/EditGem/EditGem';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <NavigationBar/>
            <Route path="/gemstones/:id/edit" exact component={EditGem} />
            <Route path="/gemstones" exact component={GemList} />
            <Route path="/add-gem" exact component={NewGem} />
            <Route path="/" exact component={GemList} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
