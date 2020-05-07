import React from "react";

const dimensionContext = React.createContext();
const Consumer = dimensionContext.Consumer;

class Provider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = (_) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    return (
      <dimensionContext.Provider value={this.state}>
        {this.props.children}
      </dimensionContext.Provider>
    );
  }
}

export { Consumer, Provider }