import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

function Banner({ children }) {
  return (
    <div className="banner-container">
      {children}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Banner;