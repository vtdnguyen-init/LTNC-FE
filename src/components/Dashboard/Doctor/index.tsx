"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DemoPage from "./export";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "@/components/Context/UserContext";
import Loader from "@/components/common/Loader";
const Doctor: React.FC = () => {
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
      <Breadcrumb pageName="Doctor" />

      <div className="w-full flex-auto">
        <div className=" mb-8 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:border-strokedark dark:bg-boxdark">
          <div className="flex-auto p-6">
            {demoPage}
            <p className="text-gray-500 mb-4 text-base dark:text-yellow-900">
              Be careful when editing, or{" "}
              <span className="text-pink-500">deleting</span> anything because
              it can&apos;t be undone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
