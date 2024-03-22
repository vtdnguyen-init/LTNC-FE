import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableFour from "@/components/Tables/TableFour";

export const metadata: Metadata = {
  title:
    "Hospital Management | BK Hospital",
  description: "This is app for managing a hospital",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
        <TableFour/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
