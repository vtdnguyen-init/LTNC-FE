import React, { useState } from "react";

interface DetailCellProps {
  row: any;
  Detail: any;
}
function DetailCell({ row, Detail }: DetailCellProps) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative rounded-lg ">
      <button
        onClick={() => openModal()}
        className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-black"
      >
        +
      </button>
      {ModalIsOpen && <Detail onclose={closeModal} data={row.original} />}
    </div>
  );
}

export default DetailCell;
