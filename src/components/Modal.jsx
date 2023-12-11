import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? 'block' : 'hidden';

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 rounded-md ${modalClasses}`}
      onClick={onClose}
    >
      <div className="absolute top-1/2 left-1/2 rounded-md transform-translate-x-1/2 -translate-y-1/2 bg-white p-8">
        {children}
      </div>
    </div>
  );
};

export default Modal;
