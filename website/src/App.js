import React, { Component } from 'react';
import './css/App.css';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">WebDev Frontend</header>
        <Content/>
        <footer className="App-footer">made by <a href="https://github.com/jomehr">Jan Mehr</a></footer>
      </div>
    );
  } 
}

export default App;
