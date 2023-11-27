import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../context/Store";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.modal);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  // Add styles to disable scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "visible";

    // Cleanup: Remove styles when the component is unmounted or when the modal is closed
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modal]);

  return (
    modal && (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="w-1/2 h-1/2 bg-white rounded-lg">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Modal</h1>
            <button className="text-2xl font-bold" onClick={closeModal}>
              &times;
            </button>
          </div>

          <div className="flex justify-center items-center p-4">
            <p className="text-xl">Modal content</p>
          </div>

          <div className="flex justify-center items-center p-4">
            <button className="text-xl" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
