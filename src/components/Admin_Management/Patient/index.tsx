"use client";
import React from "react";
import DemoPage from "./export";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "@/components/Context/UserContext";
import Loader from "@/components/common/Loader";
import { Staff } from "@/api_library/managehospital";
const Patient: React.FC = () => {
  const [demoPage, setDemoPage] = useState<React.ReactElement | undefined>(
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
  // const [staff, setStaff] = useState("");
  // const API = new Staff();
  // useEffect(() => {
  //   const fetchStaff = async () => {
  //     const res = await API.findAllStaff();
  //     console.log("staff", res);
  //   };
  //   fetchStaff();
  // }, []);

  useEffect(() => {
    fetchDemoPage();
  }, [info]);
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-4xl font-bold text-sky-700 ">PATIENT</h2>
      <div className="w-full flex-auto">
        <div className="dark:bg-dark-card mb-8 flex flex-col overflow-hidden rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          {demoPage}
        </div>
      </div>
    </div>
  );
};

export default Patient;
