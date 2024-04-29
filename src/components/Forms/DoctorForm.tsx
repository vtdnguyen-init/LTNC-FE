"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Notification } from "@/components/common/Noti/Notification";
import {
  Staff,
  createStaff,
  workinghours,
}from "@/api_library/managehospital"
interface PropsDoctorForm {
  cccd:  string,
	name:  string,
	email: string,
	gender: string, // Giới tính female hoặc male
	birthday: string, // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
	address: string,
	degree : string,
	clinic: string,
	position: string,
	specialized: string,
	role: string,
	working_hours: workinghours[],
}
interface PropsDayForm {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string,
}
interface PropsScheduleForm{
    day: string,
    start_time: string,
    end_time: string,
}
const API = new Staff();
export default function Example() {
  const [doctor, setDoctor] = useState<PropsDoctorForm>({
    cccd:  "",
    name:  "",
    email: "",
    gender: "", // Giới tính female hoặc male
    birthday: "", // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
    address: "",
    degree : "",
    clinic: "",
    position: "",
    specialized: "",
    role: "",
    working_hours: [],
  });
  const [workday, setWorkday] = useState<PropsDayForm>({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });
  const shiftTimings = {
    first_shift: { start: "06:00", end: "14:00" },
    second_shift: { start: "14:00", end: "21:00" },
    third_shift: { start: "21:00", end: "06:00" }
  };
  const [schedule, setSchedule] = useState<PropsScheduleForm[]>([]);

  const getShiftTiming = (shift:any) => {
    switch (shift) {
      case "1st-shift":
        return shiftTimings.first_shift;
      case "2nd-shift":
        return shiftTimings.second_shift;
      case "3rd-shift":
        return shiftTimings.third_shift;
      default:
        return { start: "error", end: "error" };
    }
  };

  const createSchedule = (selectedShift:any, day:string) => {
    try {
      const { start, end } =  getShiftTiming(selectedShift);     
      const newScheduleItem: PropsScheduleForm = {
        day,
        start_time : start,
        end_time: end,
    };      
    //   setSchedule(prevHours => {
    //   // Filter out the previous entry for the same day, if it exists
    //   const filteredHours = prevHours.filter(hour => hour.day !== day);
    //   // Add the updated working hour entry for the current day
    //   return [...filteredHours, { day, start_time: start, end_time: end }];
    // });
    setSchedule(prevSchedule => [...prevSchedule, newScheduleItem]);
    }catch(err){
      console.log("Error in scheduler: ", err);
    }
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const handleDoctorEdu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.id });
  }
  const handleSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkday({ ...workday, [e.target.name]: e.target.id});
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
    console.log("WORK: ",workday);
    try{
      for (const [day, shift] of Object.entries(workday)) {
        if (shift !== "") {
           createSchedule(shift, day);
        }
      }
    }catch(err){

    }
    console.log("SCHEDULE: ",schedule);
    const data: createStaff = {
      cccd:  doctor.cccd,
      name:  doctor.name,
      email: doctor.email,
      gender: doctor.gender, // Giới tính female hoặc male
      birthday: doctor.birthday, // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
      address: doctor.address,
      degree : doctor.degree,
      clinic: "",
      position: doctor.position,
      specialized: doctor.specialized,
      role: "Doctor",
      working_hours: schedule,
    };
    try {
      const response = await API.createStaff(data);
      console.log("response: ", response);
      if (response.error) {
        setMessage(response.message);
        onclick();
      } else {
        setMessage(response.message);
        setDoctor({
          cccd:  "",
          name:  "",
          email: "",
          gender: "", // Giới tính female hoặc male
          birthday: "", // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
          address: "",
          degree : "",
          clinic: "",
          position: "",
          specialized: "",
          role: "",
          working_hours: [],
        });
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
              Doctor Profile
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
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
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
                    id="birthday"
                    name="birthday"
                    type="date"
                    autoComplete="birth"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
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
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className=" w-full  gap-3 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    onChange={handleSelectChange}
                    className="text-gray-900 ring-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  >
                    <option disabled>Choose one</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
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
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="street-address"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="cccd"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Citizen ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cccd"
                    id="cccd"
                    autoComplete="id"
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="border-gray-900/10 grid grid-cols-3  gap-4 border-b pb-3">
            <div>
              <fieldset>
                <legend className="text-gray-900 text-sm font-semibold leading-6">
                  Education
                </legend>
                <div className="mt-2 space-y-6">
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="bachelor"
                        name="degree"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="bachelor"
                        className="text-gray-900 font-medium"
                      >
                        Bachelor or equivelent
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="master"
                        name="degree"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="master"
                        className="text-gray-900 font-medium"
                      >
                        Master
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="doctorate"
                        name="degree"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="doctorate"
                        className="text-gray-900 font-medium"
                      >
                        Doctorate / PhD
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend className="text-gray-900 text-sm font-semibold leading-6">
                  Position
                </legend>
                <div className="mt-2 space-y-6">
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="internship"
                        name="position"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="internship"
                        className="text-gray-900 font-medium"
                      >
                        Internship
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="doctor"
                        name="position"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="doctor"
                        className="text-gray-900 font-medium"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-2">
                    <div className="flex h-6 items-center">
                      <input
                        id="chief"
                        name="position"
                        type="radio"
                        className="border-gray-300 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600"
                        onChange={handleDoctorEdu}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="chief"
                        className="text-gray-900 font-medium"
                      >
                        Chief Doctor
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <label
                  htmlFor="specialty"
                  className=" text-gray-900 text-sm font-semibold leading-6"
                >
                  Specialty:
                </label>
                <div className="mt-2">
                  <select
                    id="specialized"
                    name="specialized"
                    className="ring-gray-300 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-black sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleSelectChange}
                  >
                    <option disabled>Choose specialty</option>
                    <option value={"Da khoa"}>General (Da Khoa)</option>
                    <option value={"Tai mui hong"}>Otorhinolaryngology (Tai mui hong)</option>
                    <option value={"Mat"}>Ophthalmologist (Mat)</option>
                    <option value={"Da Lieu"}>Dermatology (Da Lieu)</option>
                    <option value={"Tim mach"}>Cardiology (Tim mach)</option>
                    <option value={"Nhi"}>Pediatrician (Nhi)</option>
                  </select>
                </div>
              </fieldset>
              
            </div>
          </div>

          <div>
            <div className="text-gray-900 text-sm font-semibold leading-6 pb-3">Working time</div>
            <div className="grid grid-cols-8 ">
              <div className=" border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-slate-700 border-b-2 text-center">DATE</p>
                <p className="pb-1 pt-1 border-slate-700 border-b-2 text-center italic ">6:00 - 14:00</p>
                <p className="pb-1 pt-1 border-slate-700 border-b-2 text-center italic">14:00 - 21:00</p>
                <p className="pb-1 pt-1 border-slate-700 text-center italic">21:00 - 6:00</p>
              </div>
              {/* MONDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Monday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        value="1st-shift"
                        name="monday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        value="2nd-shift"
                        name="monday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        value="3rd-shift"
                        name="monday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* TUESDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Tuesday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="tuesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="tuesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="tuesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* WEDNESDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Wednesday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="wednesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="wednesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="wednesday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* THURSDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Thursday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="thursday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="thursday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="thursday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* FRIDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Friday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="friday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="friday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="friday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* SATURDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Saturday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="saturday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="saturday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="saturday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
              {/* SUNDAY */}
              <div className="border-r-2 border-slate-700">
                <p className="pb-1 pt-1 border-b-2 text-center border-slate-700 text-slate-800 font-semibold">Sunday</p>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="1st-shift"
                        name="sunday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 border-b-2 border-slate-700">
                    <div className="flex items-center self-center">
                      <input
                        id="2nd-shift"
                        name="sunday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                <div className="flex justify-center pt-1.5 pb-1.5 ">
                    <div className="flex items-center self-center">
                      <input
                        id="3rd-shift"
                        name="sunday"
                        type="radio"
                        className=" border-slate-100 h-11 w-14 rounded-2xl text-slate-600 focus:ring-slate-600 bg-slate-200"
                        onChange={handleSchedule}
                      />
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 px-60">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handlesubmit}
          >
            Save
          </button>
          {openNotification ? (
            <Notification
              onclose={onclose}
              data={message}
            ></Notification>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
