import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './css/App.css';
import Content from './components/Content'

class App extends Component {

  state = {
    language: "de"
  }

  handleChange = this.handleChange.bind(this);

  handleChange(event) {    
    this.setState({language: event.target.value});  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-title">CDA_</h1> 
          <select className="header-lang-select" value={this.state.language} onChange={this.handleChange}>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
          </select>
        </header>
        <div className="App-main">
          <Content language = {this.state.language}/>
        </div>
        <footer className="App-footer">made by <a href="https://github.com/jomehr">Jan Mehr</a></footer>
      </div>
    );
  } 
}

export default App;
