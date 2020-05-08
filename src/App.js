import React from 'react';

import { Banner, Button, Modal } from "./components/common";
import { DimensionsContext, ModalContext } from "./contexts";
import logo from './logo.svg';

import 'styles/App.css';
import "styles/Header.css";

function App() {
  return (
    <DimensionsContext.Provider>
      <ModalContext.Provider>
        <ModalContext.Consumer>
          {({ showModal, toggleModal }) => (
            <>
              <Modal
                showModal={showModal}
                toggleModal={toggleModal}
              >
                <Button
                  text="Show Alert"
                  color="red"
                  onClick={() => { alert("Hide the goods, popos are coming!") }}
                />
              </Modal>

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
                      text="Show Modal"
                      color="red"
                      onClick={toggleModal}
                    />
                  </div>
                </header>

                <section>
                  <DimensionsContext.Consumer>
                    {dimensions => (
                      <>
                        <p>width: {dimensions.width}</p>
                        <p>height: {dimensions.height}</p>
                      </>
                    )}
                  </DimensionsContext.Consumer>
                </section>
              </div>

            </>
          )}
        </ModalContext.Consumer>
      </ModalContext.Provider>
    </DimensionsContext.Provider>
  );
}

export default App;
