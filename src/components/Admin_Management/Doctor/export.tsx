import { DoctorData, createColumns } from "./column";
import { DataTable } from "./datatable";
import {
  Staff ,queryStaff,
} from "@/api_library/managehospital"

async function getData(): Promise<any> {
  // Fetch data from your API here.
  // const res = await fetch(
  //   "https://660e53926ddfa2943b366751.mockapi.io/hospital/Doctors",
  // );
  // const data = await res.json();
  // return data;

  try{
    const API = new Staff();
    console.log(API);
    const res = await API.findAllStaff();
    console.log("response data", res);
    return res;
  }catch(error){
    console.log("Error all staff: ",error);
  }
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  const columns = await createColumns(reloadData, info);
  if (data?.error){
    return (
      <div>EMPTY</div>
    );
  }
  if (!data?.error){

    return (
      <DataTable
        columns={columns}
        data={data.data.data}
        reloadData={reloadData}
        info={info}
      />
    );
  }
}
