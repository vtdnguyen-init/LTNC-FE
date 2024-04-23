import React from "react";
import { useState, useEffect } from "react";
import {
  Patient,
  queryRecords,
  queryPatient,
} from "@/api_library/managehospital";
export interface prescription {
  evening: number;
  morning: number;
  noon: number;
  medicine: string;
  quantity: number;
  medicineID: string;
}

export interface testResult {
  result: string;
  testName: string;
}

export interface createRecords {
  date: string;
  description: string;
  diagnosis: string;
  prescription: prescription[];
  testResult: testResult[];
}
interface PropsDetailMedicine {
  onclose: () => void;
  dataInitial: queryRecords;
}
export const OpenRecord: React.FC<PropsDetailMedicine> = ({
  onclose,
  dataInitial,
}) => {
  const [record, setRecord] = useState<createRecords>({
    date: "",
    description: "",
    diagnosis: "",
    prescription: [],
    testResult: [],
  });
  const handleFetchData = async () => {
    const OJ = new Patient();
    try {
      const date: queryRecords = {
        date: dataInitial.date,
        cccd: dataInitial.cccd,
      };
      const response3 = await OJ.findRecords(date);
      console.log("Detail3", response3);
      setRecord(response3.data);
      console.log("Detail4", record);
      //   return response3.data;
    } catch (err) {
      console.log(err);
      //   return "error";
    }
  };
  useEffect(() => {
    handleFetchData();
  }, [dataInitial]);
  useEffect(() => {
    console.log("Detail4", record);
  }, [record]); // This will run whenever `record` changes
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-999 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-1/2 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-3/4">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            List Medicine
          </div>
          <button
            className=" absolute right-2 top-0 mb-2 h-8 w-10 rounded-xl
          border-2 font-extrabold 
          text-red drop-shadow-md transition duration-200 ease-in-out 
          hover:bg-red hover:text-white   dark:text-red dark:hover:bg-red dark:hover:text-white"
            id="exit"
            onClick={onclose}
          >
            <label htmlFor="exit">X</label>
          </button>
        </div>
        <div className="my-5 grid px-4">
          <div className="text-center text-xl font-bold">Detail Record</div>
          <div className=" flex place-content-center place-items-center gap-3 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-center text-base font-bold">
              Date: {record?.date}
            </span>{" "}
          </div>
          <div className="mt-3 grid gap-5 md:grid-cols-2">
            <textarea
              className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={record?.description}
            ></textarea>
            <textarea
              className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={record?.diagnosis}
            ></textarea>
            <div className="flex flex-col  place-content-between place-items-center">
              <div className="text-center text-base font-bold">Medicine</div>

              <div className="">Danh sách thuốc sử dụng</div>

              <table className="min-w-full rounded-xl bg-white shadow-md">
                <thead>
                  <tr className="bg-blue-gray-100 text-gray-700">
                    <th className="px-1 py-1 text-left">ID</th>
                    <th className="px-1 py-1 text-left">Name</th>
                    <th className="px-1 py-1 text-left">Quantity</th>
                    <th className="px-1 py-1 text-left">Morning</th>
                    <th className="px-1 py-1 text-left">Evening</th>
                    <th className="px-1 py-1 text-left">Noon</th>
                  </tr>
                </thead>
                <tbody className="text-blue-gray-900">
                  {record?.prescription?.map((med, index) => (
                    <tr key={index} className="border-blue-gray-200 border-b">
                      <td className="px-1 py-1">{index + 1}</td>
                      <td className="px-1 py-1">{med.medicine}</td>
                      <td className="w-20 px-1 py-1 ">{med.quantity}</td>
                      <td className="w-20 px-1 py-1 ">{med.morning}</td>
                      <td className="w-20 px-1 py-1 ">{med.evening}</td>
                      <td className="w-20 px-1 py-1 ">{med.noon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-center text-base font-bold">Test result</div>
              <textarea
                className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={record?.testResult[0]?.testName}
              ></textarea>
              <textarea
                className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={record?.testResult[0]?.result}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky  bottom-0  z-99999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-3/4 ">
        <button
          className=" delay-50  w-full rounded-lg border-2 border-black bg-blue-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-blue-400 hover:shadow-md
                      hover:drop-shadow-xl "
          onClick={() => {
            onclose();
          }}
        >
          <span className="font-bold">Close</span>
        </button>
      </div>
    </div>
  );
};
