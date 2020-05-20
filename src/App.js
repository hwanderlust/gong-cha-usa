import React, { useState } from 'react';

import { Banner, Button, Input } from "./components/common";
import { Consumer, Provider } from "./contexts";
import { validate } from "./helpers";
import logo from './logo.svg';

import 'styles/App.css';
import "styles/Header.css";

function App() {
  const [inputValue, onChange] = useState("");

  return (
    <Provider>
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

        <form style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", width: "90vmin" }}>
            <label style={{ marginRight: "1rem", alignSelf: "center" }}>
              Email Address
          </label>
            <Input
              type="email"
              placeholder="customerservice@gongcha.com"
              value={inputValue}
              isValid={validate("email", inputValue)}
              borderStyle
              onChange={onChange}
            />
          </div>
        </form>

        <section>
          <Consumer>
            {dimensions => (
              <>
                <p>width: {dimensions.width}</p>
                <p>height: {dimensions.height}</p>
              </>
            )}
          </Consumer>
        </section>
      </div>
    </Provider>
  );
}

export default App;
