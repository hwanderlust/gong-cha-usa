import React from 'react';

import { ButtonPair } from "./components/common";
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

        <ButtonPair
          primaryButton={{
            text: "Learn React",
            onClick: "https://reactjs.org"
          }}
          secondaryButton={{
            text: "Click Secondary",
            onClick: () => { alert("Navigate to an internal route") }
          }}
        />
      </header>
    </div>
  );
}

export default App;
