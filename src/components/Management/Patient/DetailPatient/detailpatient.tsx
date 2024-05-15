import React, { ReactEventHandler, useEffect } from "react";
import { useState } from "react";
import { Notification } from "@/components/common/Noti/Notification";
import { ListMedicine } from "../Medicine";
import { OpenRecord } from "../detailTreatment";
import {
  queryPatient,
  Patient,
  createRecords,
  queryRecords,
  testResult,
  prescription,
} from "@/api_library/managehospital";
interface Treatment {
  date: string;
  name: string;
}
interface PatientData {
  address: string;
  cccd: string;
  date_of_birth: string;
  email: string;
  gender: string;
  medicalHistory: [];
  name: string;
  phoneNumber: string;
  record: string;
}
interface PropsDetailPatient {
  onclose: () => void;
  dataInitial: PatientData;
  reloadData: () => void;
  info: any;
}
interface Medicine {
  name: string;
  quantity: number;
}
export const DetailPatient: React.FC<PropsDetailPatient> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isDelete, setDelete] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [RecordOpen, setRecordOpen] = useState(false);
  const [NotiOpen, setNotiOpen] = useState(false);
  const [NotiMessage, setNotiMessage] = useState("");
  const [dataRecord, setDataRecord] = useState<queryRecords>();
  const handleRecordOpen = (date: string, cccd: string) => {
    setDataRecord({ date: date, cccd: cccd });

    setRecordOpen(true);
  };
  const handleRecordClose = () => {
    setRecordOpen(false);
  };
  const handleOpenNoti = (data: string) => {
    setNotiMessage(data);
    setNotiOpen(true);
  };
  const handleCloseNoti = () => {
    setNotiOpen(false);
  };
  const [data, setData] = useState<PatientData>({
    address: "",
    cccd: "",
    date_of_birth: "",
    email: "",
    gender: "",
    medicalHistory: [],
    name: "",
    phoneNumber: "",
    record: "",
  });
  const [Treatment, setTreatment] = useState<Treatment[]>([]);
  const [dataTreatment, setDataTreatment] = useState([]);

  const handleFetchData = async () => {
    const OJ = new Patient();
    try {
      const ID: queryPatient = {
        cccd: dataInitial.cccd,
      };
      console.log("ID", ID);
      const date: queryRecords = {
        date: "2024-04-23",
        cccd: dataInitial.cccd,
      };
      const response = await OJ.findPatient(ID);

      const response2 = await OJ.findTreatment(ID);

      const response3 = await OJ.findRecords(date);

      console.log("Detail", response);

      console.log("Detail2", response2);
      setTreatment(response2.data);
      console.log("Treatment", Treatment);
      console.log("Detail3", response3);
      // setDataTreatment(response2);
      return response.data;
    } catch (err) {
      console.log(err);
      return "error";
    }
  };
  useEffect(() => {
    handleFetchData().then((res) => {
      setData(res);
    });
  }, [dataInitial]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [medicine, setMedicine] = useState<Medicine[]>([]);
  const handleSearchMedicine = () => {
    medicine.push({ name: searchValue, quantity: 0 });
    setMedicine([...medicine]);
  };
  const [updateTreatment, setUpdateTreatment] = useState(false);
  const [record, setRecord] = useState<createRecords>({
    date: "",
    description: "",
    diagnosis: "",
    prescription: [],
    testResult: [
      {
        result: "",
        testName: "",
      },
    ],
  });
  const [prescription, setPrescription] = useState<prescription[]>([]);
  const handleOpenListMedicine = () => {
    setIsModalOpen(true);
  };
  const handleCloseListMedicine = () => {
    console.log("Prescription2", prescription);
    setIsModalOpen(false);
  };
  const handleCreateRecord = async () => {
    const OJ = new Patient();
    try {
      const Medicine: createRecords = {
        date: record.date,
        description: record.description,
        diagnosis: record.diagnosis,
        prescription: prescription,
        testResult: record.testResult,
      };
      const ID: queryPatient = {
        cccd: dataInitial.cccd,
      };
      console.log("ID", ID);
      const response = await OJ.createRecords(Medicine, ID);
      console.log("Detail", response);
      if (response.error) {
        handleOpenNoti(response.message);
      } else {
        handleOpenNoti("Create Record Success");
      }
      // return response;
    } catch (err) {
      console.log(err);
      return "error";
    }
    // setUpdateTreatment(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-99999 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-3/4 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-3/4">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            Detail Patient
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
        <div className="mt-5 grid gap-3 px-4 md:grid-cols-2">
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Full name:</span> {data?.name}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Email :</span> {data?.email}
          </div>

          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Gender :</span> {data?.gender}
          </div>

          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">CCCD:</span> {data?.cccd}
          </div>

          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Date of birth :</span>{" "}
            {data?.date_of_birth}
          </div>
        </div>
        {!updateTreatment && (
          <div className="grid md:grid-cols-2">
            <>
              <div className="mt-5 px-4">
                <div className="text-center text-xl font-bold">
                  Medical history
                </div>
                <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-20 w-full rounded-lg  border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                  {data?.record}
                </div>
              </div>
              <div className="mt-5 px-4">
                <div className="text-center text-xl font-bold">
                  Treatment process
                </div>
                <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-20 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                  {Treatment?.map((item, index) => (
                    <div
                      key={index}
                      className="my-1 flex place-content-between gap-3"
                    >
                      <div>STT: {index}</div>
                      <span className="font-bold">Date:</span> {item.date}
                      <br />
                      <span className="font-bold">Name:</span> {item.name}
                      <br />
                      <button
                        onClick={() => {
                          handleRecordOpen(item.date, dataInitial.cccd);
                        }}
                        className="w-20 rounded-lg border-2 border-black bg-blue-500 py-1 text-center text-xs font-bold text-white drop-shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:shadow-md hover:drop-shadow-xl"
                      >
                        Open
                      </button>
                    </div>
                  ))}
                  {RecordOpen && (
                    <OpenRecord
                      onclose={handleRecordClose}
                      dataInitial={dataRecord || { date: "", cccd: "" }}
                    />
                  )}
                </div>
              </div>
            </>
          </div>
        )}
        {updateTreatment && (
          <div className="my-5 grid px-4">
            <div className="text-center text-xl font-bold">
              Update Record Treatment
            </div>
            <div className=" flex place-content-center place-items-center gap-3 border-indigo-400 duration-500 ease-in-out hover:transition-all">
              <span className="text-center text-base font-bold">Date:</span>{" "}
              <input
                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="date"
                value={record.date}
                onChange={(e) => {
                  record.date = e.target.value;
                  setRecord({ ...record });
                }}
              />
            </div>
            <div className="mt-3 grid gap-5 md:grid-cols-2">
              <textarea
                className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Description "
                onChange={(e) => {
                  record.description = e.target.value;
                  setRecord({ ...record });
                }}
              ></textarea>
              <textarea
                className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Diagnosis"
                onChange={(e) => {
                  record.diagnosis = e.target.value;
                  setRecord({ ...record });
                }}
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
                      <th className="px-1 py-1 text-left">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-gray-900">
                    {prescription?.map((med, index) => (
                      <tr key={index} className="border-blue-gray-200 border-b">
                        <td className="px-1 py-1">{index + 1}</td>
                        <td className="px-1 py-1">{med.medicine}</td>
                        <td className="w-20 px-1 py-1 ">
                          <input
                            type="number"
                            className="w-20 rounded-sm text-center text-xs font-bold"
                            value={med.quantity}
                            onChange={(e) => {
                              med.quantity = parseInt(e.target.value);
                              setPrescription([...prescription]);
                            }}
                          />
                        </td>
                        <td className="w-20 px-1 py-1 ">
                          <input
                            type="number"
                            className="w-20 rounded-sm text-center text-xs font-bold"
                            value={med.morning}
                            onChange={(e) => {
                              med.morning = parseInt(e.target.value);
                              setPrescription([...prescription]);
                            }}
                          />
                        </td>
                        <td className="w-20 px-1 py-1 ">
                          <input
                            type="number"
                            className="w-20 rounded-sm text-center text-xs font-bold"
                            value={med.evening}
                            onChange={(e) => {
                              med.evening = parseInt(e.target.value);
                              setPrescription([...prescription]);
                            }}
                          />
                        </td>
                        <td className="w-20 px-1 py-1 ">
                          <input
                            type="number"
                            className="w-20 rounded-sm text-center text-xs font-bold"
                            value={med.noon}
                            onChange={(e) => {
                              med.noon = parseInt(e.target.value);
                              setPrescription([...prescription]);
                            }}
                          />
                        </td>
                        <td className="w-20 px-1 py-1">
                          <button
                            onClick={() => {
                              prescription.splice(index, 1);
                              setPrescription([...prescription]);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className=" mt-3
                w-24 rounded-lg border-2
                border-black bg-blue-500 py-3 text-center
                text-xs   font-bold  text-white
                drop-shadow-md transition
                duration-200 ease-in-out hover:-translate-y-1
                hover:scale-110 hover:bg-blue-400
                hover:shadow-md
                  hover:drop-shadow-xl
                "
                  onClick={handleOpenListMedicine}
                >
                  Sử dụng thuốc
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-center text-base font-bold">
                  Test result
                </div>
                <textarea
                  className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Test Name"
                  onChange={(e) => {
                    record.testResult[0].testName = e.target.value;
                    setRecord({ ...record });
                  }}
                ></textarea>
                <textarea
                  className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Result"
                  onChange={(e) => {
                    record.testResult[0].result = e.target.value;
                    setRecord({ ...record });
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        )}
      </div>

      {NotiOpen && (
        <Notification data={NotiMessage} onclose={handleCloseNoti} />
      )}
      {isModalOpen && (
        <ListMedicine
          onclose={handleCloseListMedicine}
          dataInitial={prescription}
        />
      )}
      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-3/4 ">
        {updateTreatment && (
          <button
            className=" delay-50  w-full rounded-lg border-2 border-black bg-green-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-green-400 hover:shadow-md
                      hover:drop-shadow-xl "
            onClick={() => {
              handleCreateRecord();
            }}
          >
            <span className="font-bold">Confirm</span>
          </button>
        )}
        {!updateTreatment && (
          <button
            className=" delay-50  w-full rounded-lg border-2 border-black bg-blue-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-blue-400 hover:shadow-md
                      hover:drop-shadow-xl "
            onClick={() => {
              setUpdateTreatment(true);
            }}
          >
            <span className="font-bold">Update Treatment</span>
          </button>
        )}
      </div>
    </div>
  );
};
