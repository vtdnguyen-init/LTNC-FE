import { MedicineData,  createColumns } from "./column";
import { DataTable } from "./datatable";
import https from "https";

async function getData(): Promise<MedicineData[]> {
  // Fetch data from your API here.

  const res = await fetch(
    "https://660e53926ddfa2943b366751.mockapi.io/hospital/Medicine",
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
