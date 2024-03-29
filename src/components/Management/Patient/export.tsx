import { PatientData, columns } from "./column";
import { DataTable } from "./datatable";
import https from "https";

async function getData(): Promise<PatientData[]> {
  // Fetch data from your API here.

  const res = await fetch(
    "https://65a8eb68219bfa371867ef13.mockapi.io/fakeapi/Patient",
  );
  const data = await res.json();
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
