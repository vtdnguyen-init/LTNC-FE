"use client";
import React from "react";
import DemoPage from "./export";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "@/components/Context/UserContext";
import Loader from "@/components/common/Loader";
interface PropsDetailMedicine {
  onclose: () => void;
  dataInitial: any;
}
export const ListMedicine: React.FC<PropsDetailMedicine> = ({
  onclose,
  dataInitial,
}) => {
  const [change, setChange] = useState(false);
  const [demoPage, setDemoPage] = useState<React.ReactElement | undefined>(
    <div className="h-auto">
      <Loader />
    </div>,
  );
  const reloadData = useCallback(() => {
    fetchDemoPage();
  }, [dataInitial]);

  const fetchDemoPage = async () => {
    const result = await DemoPage(reloadData, dataInitial);
    setDemoPage(result);
  };

  useEffect(() => {
    fetchDemoPage();
  }, [dataInitial]);
  const [updateTreatment, setUpdateTreatment] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-999 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-1/2 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-3/4">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            List Medicine
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
        {demoPage}
      </div>
      <div className="sticky  bottom-0  z-99999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-3/4 ">
        <button
          className=" delay-50  w-full rounded-lg border-2 border-black bg-blue-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-blue-400 hover:shadow-md
                      hover:drop-shadow-xl "
          onClick={() => {
            onclose();
          }}
        >
          <span className="font-bold">Confirm</span>
        </button>
      </div>
    </div>
  );
};
