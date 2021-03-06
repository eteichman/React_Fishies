import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, toggleModal }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <button class="close" onClick={toggleModal}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
