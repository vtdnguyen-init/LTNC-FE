import React, { ReactEventHandler } from "react";
import { Modal } from "@nextui-org/react";
import { useState } from "react";
interface PatientData {
  id: number;
  Name: string;
  Room: string;
  Gender: string;
  Date: string;
  Age: string;
  CCCD: string;
  SDT: string;
  MedicalHistory: string;
  InditialDis: string;
}
interface PropsDetailPatient {
  onclose: () => void;
  data: PatientData;
}
interface Medicine {
  name: string;
  quantity: number;
}
export const DetailPatient: React.FC<PropsDetailPatient> = ({
  onclose,
  data,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleSave = async () => {
    setEditing(false);
  };
  const [medicine, setMedicine] = useState<Medicine[]>([]);
  const handleSearchMedicine = () => {
    medicine.push({ name: searchValue, quantity: 0 });
    setMedicine([...medicine]);
  };
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-3/4 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl  border-l-2 border-r-2 border-t-2 border-black bg-white  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-1/2">
        <div className="relative flex h-10 w-full flex-col items-center justify-center rounded-xl border-b-2 border-[#545e7b]">
          <div className="w-full pb-2 text-center text-lg font-bold  sm:text-2xl">
            Thông tin bệnh nhân
          </div>
          <button
            className=" absolute right-0 top-0 mb-2 h-10 w-10 rounded-xl border-2 font-extrabold text-red hover:border-red 
            hover:bg-red hover:text-white dark:border-red   dark:text-red dark:hover:bg-red dark:hover:text-white"
            onClick={onclose}
          >
            X
          </button>
        </div>
        <div className="mt-5 grid gap-3 px-4 md:grid-cols-2">
          <div className="border-b-2     border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">ID :</span> {data.id}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Full name:</span> {data.Name}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Room :</span> {data.Room}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Gender :</span> {data.Gender}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Age :</span> {data.Age}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">CCCD:</span> {data.CCCD}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Phone number :</span> {data.SDT}
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Medical history</div>
            <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {data.MedicalHistory}
            </div>
          </div>

          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">
              Treatment process
            </div>
            <div className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg  border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {data.InditialDis}
            </div>
          </div>
        </div>
        {isEditing ? (
          <div className="my-5 grid px-4">
            <div className="text-center text-xl font-bold">
              Update process and use medicine
            </div>
            <div className="mt-3 grid gap-5 md:grid-cols-2">
              <textarea
                className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Update process "
              ></textarea>
              <div>
                <div className="mx-auto max-w-md">
                  <label
                    htmlFor="default-search"
                    className="text-gray-900 sr-only mb-2 text-sm font-medium dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg
                        className="text-gray-500 dark:text-gray-400 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      id="default-search"
                      className="text-gray-900 border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-4 ps-10 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Search Medicine name"
                      value={searchValue}
                      onChange={handleSearchChange}
                      required
                    />
                    <button
                      onClick={handleSearchMedicine}
                      type="submit"
                      className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 px-4">
                  <span className="h-full w-1/2 border-r-2 border-indigo-400  text-center text-sm font-bold">
                    Medicine name
                  </span>
                  <span className="h-full w-1/2   text-center text-sm font-bold">
                    Quantity
                  </span>
                </div>
                {medicine?.map((med) => (
                  <div className="flex items-center gap-2 px-4">
                    <span className="h-full w-1/2 border-r-2 border-indigo-400    text-center text-xs font-bold">
                      {med.name}
                    </span>

                    <input
                      type="number"
                      className="h-full w-1/2  text-center text-xs font-bold"
                      value={med.quantity}
                      onChange={(e) => {
                        med.quantity = parseInt(e.target.value);
                        setMedicine([...medicine]);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-1/2 ">
        {!isEditing ? (
          <button
            className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-blue-500
                 py-3 text-white drop-shadow-md
              transition
              duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
              "
            onClick={() => setEditing(true)}
          >
            <span className="font-bold">Edit</span>
          </button>
        ) : (
          <button
            className=" delay-50  w-full rounded-b-lg border-2 border-black bg-green-500
     py-3   text-white  drop-shadow-md
    transition duration-200 
    ease-in-out hover:-translate-y-1 hover:scale-110 
    hover:bg-emerald-400 hover:shadow-md
    hover:drop-shadow-xl 
    

     "
            onClick={handleSave}
          >
            <span className="font-bold">Save</span>
          </button>
        )}
      </div>
    </div>
  );
};
