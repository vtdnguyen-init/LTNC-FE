import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { DetailDoctor } from "./DetailDoctor/detaildoctor";
import { IoEyeOutline } from "react-icons/io5";

export type DoctorData = {
  id: number;
  Name: string;
  Gender: string;
  CCCD: string;
  SDT: string;
  Position: string;
  Age: string;
  Salary: string;
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
        className="min-h-7 border-gray-600 rounded-full border bg-transparent px-[0.65rem] py-1 font-bold hover:border-transparent hover:bg-slate-800 hover:text-white"
      >
        <IoEyeOutline />
      </Button>
      {ModalIsOpen && (
        <DetailDoctor
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
