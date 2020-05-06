import React from "react";
import PropTypes from "prop-types";

import Button from "./button";
import "../../styles/ButtonPair.css";

/**
 * Render Buttons side-by-side horizontally or vertically with contrasting colors based on the underlying background color
 */
function ButtonPair(props) {
  const {
    backgroundColor = "red",
    layout = "horizontal",
    primaryButton,
    secondaryButton
  } = props;

  return (
    <div className={`button-pair__container button-pair__container--${layout}`}>
      <Button
        text={secondaryButton.text}
        onClick={secondaryButton.onClick}
        color={backgroundColor === "red" ? "white" : "black"}
      />
      <Button
        text={primaryButton.text}
        onClick={primaryButton.onClick}
        color={backgroundColor === "red" ? "black" : "red"}
      />
    </div>
  )
}

ButtonPair.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "red",
    "white"
  ]).isRequired,

  layout: PropTypes.oneOf([
    "horizontal",
    "vertical"
  ]).isRequired,

  primaryButton: PropTypes.exact({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]).isRequired,
  }).isRequired,

  secondaryButton: PropTypes.exact({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]).isRequired,
  }).isRequired,
};

export default ButtonPair;