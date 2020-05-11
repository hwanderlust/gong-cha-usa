import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

function Title(props) {
  return (
    <div className="title__container">
      <h1 className="title__text">{props.text}</h1>
      <div className="title__line"></div>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title;