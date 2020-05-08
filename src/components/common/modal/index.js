import React from "react";
import PropTypes from "prop-types";

import Overlay from "./Overlay";
import "./Modal.css";

function Modal(props) {
  const { showModal, toggleModal, tapOutToDismiss = true } = props;

  if (!showModal) return null;

  return (
    <>
      <Overlay onClick={tapOutToDismiss ? toggleModal : undefined} />
      <div className="modal__container">
        <div className="modal__contents">
          {props.children}
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  tapOutToDismiss: PropTypes.bool,
};

export default Modal;