import React from "react";
import DoctorForm from "@/components/Forms/DoctorForm";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const DoctorFormPage = () => {
  return (
    <DefaultLayout>
      <DoctorForm />
    </DefaultLayout>
  );
};

export default DoctorFormPage;
