import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Patient from "@/components/Dashboard/Patient";

export const metadata: Metadata = {
  title: "Patient Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientDashPage = () => {
  return (
    <DefaultLayout>
      <Patient />
    </DefaultLayout>
  );
};

export default PatientDashPage;
