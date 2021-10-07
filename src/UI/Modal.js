import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Overlay from "../components/Overlay";
import Cart from "../components/Cart";
const portalElement = document.getElementById("overlay");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(<Cart onClose={props.onClose} />, portalElement)}
    </Fragment>
  );
}

export default Modal;
