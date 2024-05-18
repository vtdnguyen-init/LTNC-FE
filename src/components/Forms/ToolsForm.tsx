"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Notification } from "@/components/common/Noti/Notification";
import {
  medicalEquipment,
  createMedicalEquipment,
} from "@/api_library/managehospital";
interface PropsToolForm {
  name: string;
  warranty_expiration_date: string;
  status: string;
  purchase_price: number;
  warranty_history: [];
}
const API = new medicalEquipment();
export default function Example() {
  const [tool, setTool] = useState<PropsToolForm>({
    name: "",
    warranty_expiration_date: "",
    status: "",
    purchase_price: 0,
    warranty_history: [],
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTool({ ...tool, [e.target.name]: parseFloat(e.target.value) });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };
  const [message, setMessage] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const onclick = () => {
    setOpenNotification(true);
  };
  const onclose = () => {
    setOpenNotification(false);
  };
  const handlesubmit = async () => {
    // console.log(tool);
    const originalDate = tool.warranty_expiration_date;

    // Split the original date string into year, month, and day parts
    const [year, month, day] = originalDate.split("-");

    const formattedDate = `${day}/${month}/${year}`;
    //const parsedFloat = parseFloat(tool.purchase_price);

    const data: createMedicalEquipment = {
      name: tool.name,
      warranty_expiration_date: formattedDate,
      status: tool.status,
      purchase_price: tool.purchase_price,
      warranty_history: [],
    };
    try {
      const response = await API.createMedicalEquipment(data);
      // console.log("response: ", response);
      if (response.error) {
        setMessage(response.message);
        onclick();
      } else {
        setMessage("Save successfully");
        setTool({
          name: "",
          warranty_expiration_date: "",
          status: "",
          purchase_price: 0,
          warranty_history: [],
        });
        onclick();
      }
    } catch (error: any) {
      console.log("Error creating tool: ", error);
    }
  };
  return (
    <>
      <div>
        <div className="lg:px20 xl:px space-y-6 px-10 md:px-30 lg:px-30 xl:px-60">
          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Tool&apos;s Management
            </h2>
          </div>
          <div className="pb-5">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Name:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id="name"
                    value={tool.name}
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="ex_date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Expired Date:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="Warranty_expiration_date"
                    name="warranty_expiration_date"
                    type="date"
                    value={tool.warranty_expiration_date}
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="price"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Price:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleNumberChange}
                    type="number"
                    name="purchase_price"
                    id="purchase_price"
                    value={tool.purchase_price}
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="status"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Status:
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleSelectChange}
                    id="status"
                    name="status"
                    autoComplete=""
                    value={tool.status}
                    className="text-gray-900 ring-gray-300 block min-w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <option>Choose one</option>
                    <option>Good</option>
                    <option>Normal</option>
                    <option>Some error</option>
                    <option>Broken</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 px-60">
          <a
            href="/admin/tool"
            type="button"
            className="text-gray-900 text-sm font-semibold leading-6"
          >
            Cancel
          </a>
          <button
            onClick={handlesubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
          {openNotification ? (
            <Notification onclose={onclose} data={message} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
