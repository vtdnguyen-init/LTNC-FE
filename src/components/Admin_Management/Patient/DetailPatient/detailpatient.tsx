import React, { ReactEventHandler,useEffect } from "react";
import { useState } from "react";
interface PatientData {
  id: number;
  Name: string;
  Room: string;
  Gender: string;
  Date: string;
  Age: string;
  CCCD: string;
  SDT: string;
  MedicalHistory: string;
  InditialDis: string;
}
interface PropsDetailPatient {
  onclose: () => void;
  dataInitial: PatientData;
  reloadData: () => void;
  info: any;
}
interface Medicine {
  name: string;
  quantity: number;
}
export const DetailPatient: React.FC<PropsDetailPatient> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isDelete, setDelete] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const handleUpdate = async () => {
    setUpdate(true);
  }
  const completeUpdate = async () => {
    console.log("UPDATE PATIENT");
    setUpdate(false);
  }
  const handleDelete = async () => {
    setDelete(true);
    setClicked(true);
  }

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
  };
  const handleClick = () => {
    setIsModalOpen(true);
    setClicked(true);
  };
  const handleConfirm = () => {
   
    // Send data to the API here : Gui thong tin benh nhan cho bac si o day ->>>>>
    console.log("Bệnh nhân khám dịch vụ id:", selectedOption," nghĩa là: ");

    //FAKEEEE ->>>>>>>>
    if (selectedOption === 1) {
      console.log("General (Da Khoa)");
    } else if (selectedOption === 2) {
      console.log("Otorhinolaryngology (Tai mui hong)");
    } else if (selectedOption === 3) {
      console.log("Ophthalmologist (Mat)");
    } else if (selectedOption === 4){
      console.log("Dermatology (Da Lieu)");
    } else if (selectedOption === 5){
      console.log("Cardiology (Tim mach)");
    } else if (selectedOption === 6){
      console.log("Pediatrician (Nhi)");
    }
    // Close the modal
    setIsModalOpen(false);
    setClicked(true);
  };
  const DeletePatient = () => {
    //Xoa benh nhan khoi database o day ->>>> 
    console.log("DELETE PATIENT")
    setClicked(false);
  }
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-3/4 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-1/2">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            Detail Patient
          </div>
          <button
            className=" absolute right-2 top-0 mb-2 h-8 w-10 rounded-xl
            border-2 font-extrabold 
            text-red drop-shadow-md transition duration-200 ease-in-out 
            hover:bg-red hover:text-white   dark:text-red dark:hover:bg-red dark:hover:text-white"
            id="exit"
            onClick={onclose}
          >
            <label htmlFor="exit">X</label>
          </button>
        </div>
        <div className="mt-5 grid gap-3 px-4 md:grid-cols-2">
          <div className="border-b-2     border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">ID :</span> {dataInitial.id}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Full name:</span>{" "}
            {dataInitial.Name}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Room :</span> {dataInitial.Room}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Gender :</span>{" "}
            {dataInitial.Gender}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Age :</span> {dataInitial.Age}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">CCCD:</span> {dataInitial.CCCD}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Phone number :</span>{" "}
            {dataInitial.SDT}
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Medical history</div>
            <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-20 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {dataInitial.MedicalHistory}
            </div>
          </div>

          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">
              Treatment process
            </div>
            <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-20 w-full rounded-lg  border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {dataInitial.InditialDis}
            </div>
          </div>
        </div>
        {isModalOpen && (
        <div className="">
            <div className="pt-3"></div>
            <h2 className="text-center pt-6 text-title-xl border-t-3 border-indigo-400 duration-500 ease-in-out  hover:transition-all">Choose an option:</h2>
            <div className="grid grid-cols-3 px-3 py-3 min-h-40">
              <div className="flex py-3 justify-center ">
                <button className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(1)}>General (Da Khoa)</button>
              </div>
              <div className="flex py-3 justify-center ">
                <button  className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(2)}>Otorhinolaryngology (Tai mui hong)</button>
              </div>
              <div className="flex py-3 justify-center ">
                <button  className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(3)}>Ophthalmologist (Mat)</button>
              </div>
              <div className="flex py-3 justify-center ">
                <button  className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(4)}>Dermatology (Da Lieu)</button>
              </div>
              <div className="flex py-3 justify-center ">
                <button  className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(5)}>Cardiology (Tim mach)</button>
              </div>
              <div className="flex py-3 justify-center ">
                <button  className="text-black dark:bg-gray-700 dark:border-gray-600 block px-2 rounded-lg  border-2 
                border-indigo-400 bg-gray-3  text-sm focus:border-indigo-500 focus:bg-indigo-400 dark:text-black 
                dark:focus:border-indigo-500 dark:focus:ring-indigo-400 hover:bg-indigo-400" onClick={() => handleOptionSelect(6)}>Pediatrician (Nhi)</button>
              </div>
            </div>
        </div>
      )}
      </div>
      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-1/2 ">
          { isClicked ? (
            isDelete ? (
                  <div>
                  <div
                className="delay-50 -2-blue-700 left-0  w-full border-2 border-black bg-white 
                    py-3 text-white drop-shadow-md border-b-0
                  hover:text-white hover:shadow-md hover:drop-shadow-xl text-center
                  "
              >
                <span className="font-bold text-xl text-black">Are you sure you want to delete this patient?</span>
                </div>
                  <button
                className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-danger
                    py-3 text-white drop-shadow-md
                  transition
                  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-rose-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
                  "
                  onClick={() => DeletePatient()}
              >
                <span className="font-bold">Confirm</span>
              </button>
              </div>
            ):(
             isModalOpen ? (
                <button
                  className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-blue-500
                  py-3 text-white drop-shadow-md
                  transition
                  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
                  "
                  onClick={handleConfirm}
                >
                  <span className="font-bold">Confirm</span>
                </button>
             ):(
              <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-pink-400
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-pink-400 hover:shadow-md
                        hover:drop-shadow-xl "
            >
              <span className="font-bold">Sent to doctor!</span>
            </button>
             )
          )
          ):(
            isUpdate ? (
              <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-lime-600
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-lime-400 hover:shadow-md
                        hover:drop-shadow-xl "
                      onClick={completeUpdate}
            >
              <span className="font-bold">Complete</span>
            </button>
            ):(
            isDelete ? (
              <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-amber-700
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-amber-400 hover:shadow-md
                        hover:drop-shadow-xl "
                        onClick={completeUpdate}
            >
              
              <span className="font-bold">Patient Deleted!</span>
            </button>
            ):(
            <div>
            <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-green-500
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-emerald-400 hover:shadow-md
                        hover:drop-shadow-xl "
              onClick={handleClick}
              >
              <span className="font-bold">Re-Examine</span>
            </button>
            <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-cyan-600
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-cyan-400 hover:shadow-md
                        hover:drop-shadow-xl "
              onClick={handleUpdate}
              >
              <span className="font-bold">Update</span>
            </button>
            <button
            className=" delay-50  w-full rounded-lg border-2 border-black bg-rose-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-rose-400 hover:shadow-md
                      hover:drop-shadow-xl "
                      onClick={() => handleDelete()}
          >
              <span className="font-bold">Delete</span>
            </button>
            </div>
            )
          )
        )
          }

      </div>
    </div>
  );
};
