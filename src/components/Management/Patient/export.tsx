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
    const res = await API.findPatientsInQueue();
    // const CCCD: queryPatient = {
    //   cccd: "052204002805",
    // };
    // const res2 = await API.findPatient(CCCD);
    console.log("response data", res);
    // console.log("response data2", res2);
    // console.log("response data2", res.data.CAR);
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export default async function DemoPage(reloadData: any, info: any) {
  const data = await getData();
  console.log("data", data);
  const columns = await createColumns(reloadData, info);

  if (data?.error) {
    return (
      <div className="bg-white text-center text-xl font-bold">
        Không có bệnh nhân
      </div>
    );
  }
  if (!data?.error) {
    return (
      <DataTable
        columns={columns}
        data={Object.values(data.data.CAR) as PatientData[]}
        reloadData={reloadData}
        info={info}
      />
    );
  }
}
