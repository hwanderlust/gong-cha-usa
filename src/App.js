import React from 'react';

import { Banner, Button } from "./components/common";
import logo from './logo.svg';

import './styles/App.css';
import "./styles/Header.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner>
          <>
            <img
              src={logo}
              className="App-logo"
              alt="react logo"
              width={200}
              height={200}
            />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </>
        </Banner>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "500px", marginTop: "50px" }}>
          <Button
            text="Learn React"
            color="black"
            onClick="https://reactjs.org"
          />
          <Button
            text="Show Alert"
            color="red"
            onClick={() => { alert("Navigate to an internal route") }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
