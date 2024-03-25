import React from "react";
import MedicineForm from "@/components/Forms/MedicineForm";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const MedicineFormPage = () => {
  return (
    <DefaultLayout>
      <MedicineForm />
    </DefaultLayout>
  );
};

export default MedicineFormPage;
