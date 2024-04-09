import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Checkout_Patient from "@/components/Admin_Management/Checkout_Patient";

export const metadata: Metadata = {
  title: "Patient Care | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientDashPage = () => {
  return (
    <DefaultLayout>
      <Checkout_Patient />
    </DefaultLayout>
  );
};

export default PatientDashPage;