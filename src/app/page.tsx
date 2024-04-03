import HomePage from "@/components/HomePage/HomePage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignIn from "./auth/signin/page";
export const metadata: Metadata = {
  title: "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
