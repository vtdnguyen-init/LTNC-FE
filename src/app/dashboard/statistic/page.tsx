import React from "react";
import { Metadata } from "next";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Statistic | BK Hospital",
  description: "This is app for managing a hospital",
};

const StatDashPage = () => {
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
};

export default StatDashPage;
