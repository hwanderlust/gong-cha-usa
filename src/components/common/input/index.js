import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

function Input(props) {
  const {
    placeholder,
    value,
    isValid,
    onChange,
    type = "text",
    textAlign = "center",
    borderStyle = false
  } = props;

  let className = "form__input";

  if (borderStyle) {
    className = className.concat(" form__input--border");

    if (!isValid && value.length) {
      className = className.concat(" form__input--failed-border");
    }
  } else {
    className = className.concat(" form__input--borderless");

    if (!isValid && value.length) {
      className = className.concat(" form__input--failed-borderless");
    }
  }

  return (
    <input
      type={type}
      className={className}
      style={{ textAlign }}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "email"]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  borderStyle: PropTypes.bool,
}

export default Input;