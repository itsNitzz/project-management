import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ getNewProjectDetailsHandler, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const openModal = useRef();

  const onAddProjectHandler = () => {
    if (
      !(
        titleRef.current.value.trim() &&
        descRef.current.value.trim() &&
        dateRef.current.value.trim()
      )
    ) {
      openModal.current.open();
      return;
    }

    const details = {
      title: titleRef.current.value,
      description: descRef.current.value,
      date: dateRef.current.value,
    };

    getNewProjectDetailsHandler(details);
  };

  return (
    <>
      <Modal ref={openModal}>
        <h2 className="font-bold text-stone-700 text-xl">Invalid Inputs</h2>
        <p className="text-stone-500 mt-3">All fields are mandatory.</p>
        <p className="text-stone-500 mb-3">
          Please make sure to enter the valid value.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 py-2 px-6 rounded-md bg-stone-200 hover:bg-stone-300">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={onAddProjectHandler}
              className="bg-stone-800 hover:bg-stone-950 py-2 px-6 text-stone-50 rounded-md">
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={titleRef} label="Title" textarea={false} />
          <Input ref={descRef} label="Description" textarea={true} />
          <Input type="date" ref={dateRef} label="Due Date" textarea={false} />
        </div>
      </div>
    </>
  );
}
