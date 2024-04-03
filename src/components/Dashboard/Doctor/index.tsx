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
        <div className="dark:bg-dark-card mb-8 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
          {demoPage}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
