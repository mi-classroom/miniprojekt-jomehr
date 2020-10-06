import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './css/App.css';
import Content from './components/Content'

class App extends Component {

  state = {
    language: "de",
    id: 0
  }

  tmpId = 0

  handleLangChange= (event) => {    
    this.setState({language: event.target.value});  
  }

  handleInputChange = (event) => {
    this.tmpId = event.target.value
  }

  submitInput = (event) => {
    event.preventDefault();
    this.setState({id: this.tmpId})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <h1 className="header-title">CDA_</h1> 
            <form className="header-input" onSubmit={this.submitInput}>
              <input type="number" placeholder=" :id" onChange={this.handleInputChange}/> 
              <input type="submit" value="go" />
            </form>
            <select className="header-lang-select" value={this.state.language} onChange={this.handleLangChange}>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>
        </header>
        <div className="App-main">
          <Content language = {this.state.language} id={this.state.id}/>
        </div>
        <footer className="App-footer">made by <a href="https://github.com/jomehr">Jan Mehr</a></footer>
      </div>
    );
  } 
}

export default App;
