import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Doctor from "@/components/Dashboard/Doctor"

export const metadata: Metadata = {
    title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const DoctorDashPage = () => {
  return (
    <DefaultLayout>
      <Doctor/>
    </DefaultLayout>
  );
};

export default DoctorDashPage;
