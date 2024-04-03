import { DoctorData, createColumns } from "./column";
import { DataTable } from "./datatable";
import https from "https";

async function getData(): Promise<DoctorData[]> {
  // Fetch data from your API here.

  const res = await fetch(
    "https://65a8eb68219bfa371867ef13.mockapi.io/fakeapi/Doctor",
  );
  const data = await res.json();
  return data;
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  const columns = await createColumns(reloadData, info);

  return (
    <DataTable
      columns={columns}
      data={data}
      reloadData={reloadData}
      info={info}
    />
  );
}
