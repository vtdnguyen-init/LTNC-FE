import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Medicine from "@/components/Admin_Management/Medicine";

export const metadata: Metadata = {
  title: "Patient Care | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientDashPage = () => {
  return (
    <DefaultLayout>
      <Medicine />
    </DefaultLayout>
  );
};

export default PatientDashPage;