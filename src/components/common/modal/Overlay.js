import React from "react";
import PropTypes from "prop-types";

import "./Overlay.css";

function Overlay(props) {
  return (
    <div className="overlay" onClick={props.onClick}></div>
  )
}

Overlay.propTypes = {
  onClick: PropTypes.func
}

export default Overlay;