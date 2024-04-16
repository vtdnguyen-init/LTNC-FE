"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Notification } from "@/components/common/Noti/Notification";
import {
  Patient,
  createPatient,
  medicalHistory,
} from "@/api_library/managehospital";
interface PropsPatientForm {
  name: string;
  date_of_birth: string;
  email: string;
  gender: string;
  address: string;
  citizenID: string;
  phoneNumber: string;
  record: string;
  medicalHistory: medicalHistory[];
}
const API = new Patient();
export default function Example() {
  const [patient, setPatient] = useState<PropsPatientForm>({
    name: "",
    date_of_birth: "",
    email: "",
    gender: "",
    address: "",
    citizenID: "",
    phoneNumber: "",
    record: "",
    medicalHistory: [],
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
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
    console.log(patient);
    const data: createPatient = {
      name: patient.name,
      date_of_birth: patient.date_of_birth,
      gender: patient.gender,
      address: patient.address,
      cccd: patient.citizenID,
      phoneNumber: patient.phoneNumber,
      medicalHistory: patient.medicalHistory,
    };
    try {
      const response = await API.createPatient(data);
      console.log("response: ", response);
      if (response.error) {
        setMessage(response.message);
        onclick();
      } else {
        setMessage(response.message);
        setPatient({
          name: "",
          date_of_birth: "",
          email: "",
          gender: "",
          address: "",
          citizenID: "",
          phoneNumber: "",
          record: "",
          medicalHistory: [],
        });
        onclick();
      }
    } catch (error: any) {
      console.log("Error creating patient: ", error);
    }
  };
  return (
    <>
      <div>
        <div className="lg:px20 xl:px space-y-6 px-10 md:px-30 lg:px-30 xl:px-60">
          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Patient&apos;s Profile
            </h2>
          </div>
          <div className="border-gray-900/10 border-b pb-5">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Personal Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="date"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="Date of birth"
                    name="date_of_birth"
                    type="date"
                    autoComplete="birth"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-3 sm:col-span-3">
                <div className="w-40">
                  <label
                    htmlFor="country"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      onChange={handleSelectChange}
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="text-gray-900 ring-gray-300 block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="country"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      onChange={handleSelectChange}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="text-gray-900 ring-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Viet Nam</option>
                      <option>USA</option>
                      <option>Europe</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="address"
                    id="street-address"
                    autoComplete="street-address"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="cccd"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Citizen ID
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="citizenID"
                    id="cccd"
                    autoComplete=""
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="phoneNumber"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-900/10 border-b pb-3">
            <h2 className="text-gray-900 text-base font-semibold leading-7">
              Medical Record
            </h2>
            <label
              htmlFor="record"
              className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
            ></label>
            <textarea
              id="record"
              rows={4}
              className="font-italic text-gray-900 bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border p-2.5 
            text-sm focus:border-blue-500 focus:ring-indigo-600 dark:text-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Give a description of patient's medical record and history"
            ></textarea>
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
