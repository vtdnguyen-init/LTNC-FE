import { ToolsData, createColumns } from "./column";
import { DataTable } from "./datatable";

async function getData(): Promise<ToolsData[]> {
  // Fetch data from your API here.

  const res = await fetch(
    "https://66152b5c2fc47b4cf27e2ef6.mockapi.io/Tools",
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
