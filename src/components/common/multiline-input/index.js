import React from "react";
import PropTypes from "prop-types";

import "./MultilineInput.css";

function MultilineInput(props) {
  const { placeholder, value, onChange } = props;

  return (
    <textarea
      className="form__multiline-input"
      placeholder={placeholder}
      onChange={onChange}
      maxLength={500}
    >
      {value}
    </textarea>
  );
}

MultilineInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MultilineInput;