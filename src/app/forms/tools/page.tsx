import React from "react";
import ToolsForm from "@/components/Forms/ToolsForm";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const MedicineFormPage = () => {
  return (
    <DefaultLayout>
      <ToolsForm />
    </DefaultLayout>
  );
};

export default MedicineFormPage;
