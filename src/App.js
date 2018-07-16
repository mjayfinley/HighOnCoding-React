import React, { Component } from 'react';
import {Menu} from './components/Menu';
import {Feature} from './components/Feature';
import {Article} from './components/Article';
import './App.css';
import './styles.css';

class App extends Component {
  render() {
    return (

      <div id='container'>

        <Menu />

        <Feature />

        <Article />

      </div>

    );
  }
}

export default App;
