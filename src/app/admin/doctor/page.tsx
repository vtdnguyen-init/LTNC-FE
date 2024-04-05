import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Doctor from "@/components/Admin_Management/Doctor";

export const metadata: Metadata = {
  title: "Patient Care | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientDashPage = () => {
  return (
    <DefaultLayout>
      <Doctor />
    </DefaultLayout>
  );
};

export default PatientDashPage;