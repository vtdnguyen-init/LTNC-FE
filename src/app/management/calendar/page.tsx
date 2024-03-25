import Calendar from "@/components/Management/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title: "Calendar | BK Hospital",
  description: "This is app for managing a hospital",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
