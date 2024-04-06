import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Tools from "@/components/Admin_Management/Tools";

export const metadata: Metadata = {
  title: "Tools | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientDashPage = () => {
  return (
    <DefaultLayout>
      <Tools />
    </DefaultLayout>
  );
};

export default PatientDashPage;
