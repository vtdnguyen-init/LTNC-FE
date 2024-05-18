import { MedicineData, createColumns } from "./column";
import { DataTable } from "./datatable";
import https from "https";
import { MedicalManage } from "@/api_library/managehospital";
async function getData(): Promise<any> {
  // Fetch data from your API here.

  const a = new MedicalManage();
  try {
    const response = await a.getData();
    if (response.error) {
      alert(response.message);
      return null;
    } else {
      return response;
    }
  } catch (error) {
    console.log("error", error);
  }
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  // console.log("data", data);
  const columns = await createColumns(reloadData, info);

  if (data?.error) {
    return (
      <div className="bg-white text-center text-xl font-bold">
        Không có danh sách thuốc
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
