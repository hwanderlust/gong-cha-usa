import React from "react";

const Context = React.createContext();

class ModalProvider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      toggleModal: this.toggleModal
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const ModalContext = {
  Provider: ModalProvider,
  Consumer: Context.Consumer
}
