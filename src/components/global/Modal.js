import React from "react";

export const Modal = ({ showModal, setShowModal, modalTitle, modalBody }) => {
  return (
    <div
      style={{ display: `${showModal ? "block" : "none"}`, zIndex: "30" }}
      className="modal"
    >
      <div className="modal-content bg-white">
        <div className="modal-header flex justify-between align-items-center bg-regal-blue-dark text-white p-5">
          <h4 className="h4 text-lg">{modalTitle}</h4>
          <span
            onClick={() => setShowModal(false)}
            className="modal-close text-rose-500 text-hover-rose-300"
          >
            ×
          </span>
        </div>
        <div className="modal-body p-5">{modalBody}</div>
      </div>
    </div>
  );
};
