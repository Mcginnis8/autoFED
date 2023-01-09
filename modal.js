import React, { useState } from 'react';
import { Helmet } from "react-helmet";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <link rel="preload" href="/ModelViz.png" as="image" />
      <button className="open" onClick={handleOpen}>Model Info</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img id="modalIMG" src="/ModelViz.png" alt="Model visualization" />
            <button className="close" onClick={handleClose}>
              &times;
            </button>
            {children}
            
          </div>
        </div>
      )}
    </>
  );
};


export default Modal;
