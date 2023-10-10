import React from 'react';
import './Modal.css';

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        {children}
        <button onClick={onClose} className="modalCloseButton">Close</button>
      </div>
    </div>
  );
}

export default Modal;