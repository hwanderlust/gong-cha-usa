import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import "./styles/Header.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-section">
        <p>Testing Testing Testing 123</p>
        <p className="App-section-two">Testing Testing Testing 123</p>
        <p className="App-section-three">Testing Testing Testing 123</p>
      </div>
    </div>
  );
}

export default App;
