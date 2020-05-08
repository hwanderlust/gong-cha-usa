import React from "react";

import Overlay from "./Overlay";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Overlay />
      <div className="modal__container">
        <div className="modal__contents">
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Modal;