"use client";
import React from "react";
import DemoPage from "./export";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "@/components/Context/UserContext";
import Loader from "@/components/common/Loader";
const Patient: React.FC = () => {
  const [demoPage, setDemoPage] = useState(
    <div className="h-auto">
      <Loader />
    </div>,
  );
  const { info } = useContext(UserContext);
  const reloadData = useCallback(() => {
    fetchDemoPage();
  }, [info]);

  const fetchDemoPage = async () => {
    const result = await DemoPage(reloadData, info);
    setDemoPage(result);
  };

  useEffect(() => {
    fetchDemoPage();
  }, [info]);
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center font-bold text-4xl text-sky-700 ">DOCTOR</h2>
      <div className="w-full flex-auto">
        <div className="dark:bg-dark-card mb-8 flex flex-col overflow-hidden rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          {demoPage}
        </div>
      </div>
    </div>
  );
};

export default Patient;
