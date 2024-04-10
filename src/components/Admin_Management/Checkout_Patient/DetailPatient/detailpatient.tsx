import React, { ReactEventHandler,useEffect } from "react";
import { useState } from "react";
import { ImCool } from "react-icons/im";
import { Rating ,RoundedStar} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
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
const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#f1f1f2'
}
export const DetailPatient: React.FC<PropsDetailPatient> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [state, setState] = useState({
    review: '',
    rating: 0 // Initial value
  })
  
  const handleClick = () => {
    // Update the state when the button is clicked
    setIsModalOpen(true);
    setClicked(true);
  };
  const handleConfirm = () => {
    console.log("BENH NHAN DANH GIA DICH VU: " ,state.rating ," SAO");
    // Send data to the API here :
    
    // Close the modal
    setIsModalOpen(false);
    setClicked(true);
  };
  const handleChange = (selectedValue : number) => {

    // 2. Do something with or without the value...

    // 3. Update Rating UI
    setState((prevState) => ({
      ...prevState,
      rating: selectedValue
    }))
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
          <>
        <div className="pt-10">
          <p className="italic font-light text-center">(Give this screen to customer)</p>
          <div className="text-3xl font-semibold text-center justify-center pb-6">
            <h1  className="inline text-slate-600">LEAVE US A RATE {" "}</h1>
            <ImCool className="inline pb-1 h-full" />
          </div>
        </div>
        <div className="flex justify-center pb-10">
        <Rating onChange={handleChange} value={state.rating} style={{ maxWidth: 400 }}
        itemStyles={myStyles}  />
        </div>
        </>
      )}
      </div>
      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-1/2 ">
          { isClicked ? (
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
              <span className="font-bold">Thank you!</span>
            </button>
             )
          ):(
            <button
            className=" delay-50  w-full rounded-lg border-2 border-black bg-green-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-emerald-400 hover:shadow-md
                      hover:drop-shadow-xl "
            onClick={handleClick}
          >
            <span className="font-bold">Give feedback</span>
          </button>
          )
          }

      </div>
    </div>
  );
};
