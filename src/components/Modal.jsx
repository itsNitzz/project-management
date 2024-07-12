import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/70 rounded-md p-4 shadow-md">
      {children}
      <form method="dialog" className="text-right">
        <button className="text-stone-800 hover:text-stone-950 py-2 px-6 rounded-md bg-stone-200 hover:bg-stone-300">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
