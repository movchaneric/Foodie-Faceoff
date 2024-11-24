import { useEffect, useRef } from "react";

const AddModal = ({ width, height, children, modalIsOpen, setModalIsOpen }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (modalIsOpen) {
      dialog?.showModal(); // Opens the modal
    } else {
      dialog?.close(); // Closes the modal
    }
  }, [modalIsOpen]);
  return (
    <dialog className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Add restuarant</h3>

        <div className="modal-action">
          <form method="dialog">
            {children}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddModal;
