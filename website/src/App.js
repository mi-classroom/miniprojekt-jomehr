import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './css/App.css';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CDA_</header>
        <div className="App-main">
          <Content/>
        </div>
        <footer className="App-footer">made by <a href="https://github.com/jomehr">Jan Mehr</a></footer>
      </div>
    );
  } 
}

export default App;
