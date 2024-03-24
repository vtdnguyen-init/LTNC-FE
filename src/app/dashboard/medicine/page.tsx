import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Medicine from "@/components/Dashboard/Medicine";

export const metadata: Metadata = {
    title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const MedicineDashPage = () => {
  return (
    <DefaultLayout>
      <Medicine/>
    </DefaultLayout>
  );
};

export default MedicineDashPage;
