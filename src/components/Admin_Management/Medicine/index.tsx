"use client";
import React from "react";
import DemoPage from "./export";
import DemoPage2 from "./exportExpiration";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "@/components/Context/UserContext";
import Loader from "@/components/common/Loader";
const Patient: React.FC = () => {
  const [change, setChange] = useState(false);
  const [demoPage, setDemoPage] = useState(
    <div className="h-auto">
      <Loader />
    </div>,
  );
  const [demoPage2, setDemoPage2] = useState(
    <div className="h-auto">
      <Loader />
    </div>,
  );
  const { info } = useContext(UserContext);
  const reloadData = useCallback(() => {
    fetchDemoPage();
  }, [info]);
  const reloadData2 = useCallback(() => {
    fetchDemoPage2();
  }, [info]);

  const fetchDemoPage2 = async () => {
    const result = await DemoPage2(reloadData2, info);
    setDemoPage2(result);
  };

  const fetchDemoPage = async () => {
    const result = await DemoPage(reloadData, info);
    setDemoPage(result);
  };

  useEffect(() => {
    fetchDemoPage();
    fetchDemoPage2();
  }, [info]);
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-4xl font-bold text-sky-700 ">MEDICINE</h2>
      <div
        className="mt-3
flex        w-full place-content-center"
      >
        <button
          className="
        focus:shadow-outline
        dark:focus:shadow-outline
        
        items-center
        justify-center
        self-center

        rounded
        bg-sky-600
        px-4
        py-2
        font-bold
        text-white
        transition
        duration-200
        ease-in-out
        hover:bg-sky-700
        focus:border-sky-300
        focus:outline-none
        dark:bg-sky-500
        dark:text-white
        dark:hover:bg-sky-700
        dark:hover:text-white
        dark:focus:border-sky-300
      "
          onClick={() => {
            setChange(!change);
          }}
        >
          {change ? "Trở về" : "Lọc danh sách thuốc hết hạn"}
        </button>
      </div>
      <div className="w-full flex-auto">
        <div className="dark:bg-dark-card mb-8 flex flex-col overflow-hidden rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          {change ? demoPage2 : demoPage}
        </div>
      </div>
    </div>
  );
};

export default Patient;
