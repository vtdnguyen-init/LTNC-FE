import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { DetailTool } from "./DetailTools/detailtool";
import { IoEyeOutline } from "react-icons/io5";
export type ToolData = {
  id: string;
  name: string;
  warranty_expiration_date: string;
  status: string;
  purchase_price: string;
  warranty_history: [];
};
type DetailCellProps = {
  row: any;
  reloadData: () => void;
  info: any;
};
function DetailCell({ row, reloadData, info }: DetailCellProps) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative mr-2  flex">
      <Button
        onClick={openModal}
        className="min-h-8 min-w-10 border-gray-600 rounded-lg border bg-transparent px-[0.65rem] py-1 font-bold hover:border-transparent hover:bg-slate-700 hover:text-white"
      >
        <IoEyeOutline />
      </Button>
      {ModalIsOpen && (
        <DetailTool
          onclose={closeModal}
          dataInitial={row.original}
          reloadData={reloadData}
          info={info}
        />
      )}
    </div>
  );
}
export default DetailCell;
