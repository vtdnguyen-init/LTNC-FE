import { ToolsData, createColumns } from "./column";
import { DataTable } from "./datatable";
import { medicalEquipment } from "@/api_library/managehospital"

async function getData(): Promise<any> {
  // const res = await fetch(
  //   "https://66152b5c2fc47b4cf27e2ef6.mockapi.io/Tools",
  // );
  try {
    const API = new medicalEquipment();
    const res = await API.getData();
    // const CCCD: queryPatient = {
    //   cccd: "052204002805",
    // };
    // const res2 = await API.findPatient(CCCD);
    console.log("response data", res);
    // console.log("response data2", res2);
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  const columns = await createColumns(reloadData, info);
  if (data?.error) {
    return (
      <div className="bg-white text-center text-xl font-bold">
        EMPTY
      </div>
    );
  }
  if (!data?.error) {
    return (
      <DataTable
        columns={columns}
        data={data.data}
        reloadData={reloadData}
        info={info}
      />
    );
  }
} 
