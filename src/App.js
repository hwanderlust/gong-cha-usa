import React from 'react';

import { Button } from "./components/common";
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

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "500px" }}>
          <Button
            text="Learn React"
            color="black"
            onClick="https://reactjs.org"
          />
          <Button
            text="Show Alert"
            color="white"
            onClick={() => { alert("Navigate to an internal route") }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
