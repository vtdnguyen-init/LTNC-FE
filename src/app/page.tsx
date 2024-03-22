import Statistics from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Statistics />
      </DefaultLayout>
    </>
  );
}
