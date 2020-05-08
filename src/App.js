import React from 'react';

import { Banner, ButtonPair } from "components/common";
import { Consumer, Provider } from "contexts";
import logo from './logo.svg';

import 'styles/App.css';
import "styles/Header.css";

function App() {
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

          <ButtonPair
            backgroundColor="white"
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
