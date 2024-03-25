import React from "react";
import PatientForm from "@/components/Forms/PatientForm";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const PatientFormPage = () => {
  return (
    <DefaultLayout>
      <PatientForm />
    </DefaultLayout>
  );
};

export default PatientFormPage;
