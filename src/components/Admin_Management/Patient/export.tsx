import { PatientData, createColumns } from "./column";
import { DataTable } from "./datatable";
import https from "https";
import { UserContext } from "@/app/Context/UserInfo";
import { useEffect, useState, useContext } from "react";
import { Patient, queryPatient } from "@/api_library/managehospital";
import { AnyARecord } from "dns";

async function getData(): Promise<any> {
  try {
    const API = new Patient();
    const res = await API.findAllPatient();
    const res2 = await API.findPatient({ cccd: "052204002801" });
    console.log("response data", res);
    console.log("response data2", res2);
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  console.log("data", data);
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
