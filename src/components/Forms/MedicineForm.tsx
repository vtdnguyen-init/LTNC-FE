"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Notification } from "@/components/common/Noti/Notification";
import { MedicalManage, createMedicine } from "@/api_library/managehospital";
function convertDate(inputFormat: string) {
  let [year, month, day] = inputFormat.split("-");
  return [day, month, year].join("/");
}
export default function Example() {
  const [medicine, setMedicine] = useState({
    name: "",
    brand: "",
    disposal_price: "",
    expiration_date: "",
    manufacture_date: "",
    origin: "",
    purchase_price: "",
    quantity: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };
  const [openNotification, setOpenNotification] = useState(false);
  const [message, setMessage] = useState("");
  const onclick = (message: string) => {
    setMessage(message);
    setOpenNotification(true);
  };
  const onclose = () => {
    setOpenNotification(false);
  };
  const handlesubmit = async () => {
    console.log(medicine);
    const OJ = new MedicalManage();
    const Form: createMedicine = {
      // name: medicine.name,
      brand: medicine.brand,
      disposal_price: parseInt(medicine.disposal_price),
      expiration_date: convertDate(medicine.expiration_date),
      manufacture_date: convertDate(medicine.manufacture_date),
      origin: medicine.origin,
      purchase_price: parseInt(medicine.purchase_price),
      quantity: parseInt(medicine.quantity),
    };
    try {
      const response = await OJ.createMedicine(Form);
      console.log(response);
      if (response.error) {
        onclick(response.message);
        return;
      }
      onclick("Save successfully");
    } catch (err) {
      console.log(err);
      onclick("Save failed");
    }
  };
  return (
    <>
      <div>
        <div className="lg:px20 xl:px space-y-6 px-10 md:px-30 lg:px-30 xl:px-60">
          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Add Medicine&apos;s
            </h2>
          </div>
          <div className="pb-5">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-2">
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
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="brand"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Brand:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="brand"
                    id="brand"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Manufacture Date:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="expired"
                    name="manufacture_date"
                    type="date"
                    autoComplete="expired"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Expired Date:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="expired"
                    name="expiration_date"
                    type="date"
                    autoComplete="expired"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="country"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Origin:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="origin"
                    id="origin"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Quantity:
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="quantity"
                    id="ammount"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Purchase Price:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="purchase_price"
                    id="price"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Disposal Price:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="disposal_price"
                    id="price"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 px-60">
          <a
            href="/dashboard/patient"
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
            <Notification onclose={onclose} data={message}></Notification>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
