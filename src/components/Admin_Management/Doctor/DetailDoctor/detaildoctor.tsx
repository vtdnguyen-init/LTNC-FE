import React, { ReactEventHandler } from "react";
import {Helmet} from "react-helmet";
import Script from 'next/script'
import { useState } from "react";
interface DoctorData {
  id: number;
  Name: string;
  Gender: string;
  Date_of_birth: string;
  Age: string;
  CCCD: string;
  Email: string;
  Number: string;
  Country: string;
  Education: string;
  Experience: string;
  Specialty: string;
  Salary: string;
}
interface PropsDetailDoctor {
  onclose: () => void;
  dataInitial: DoctorData;
  reloadData: () => void;
  info: any;
}
export const DetailDoctor: React.FC<PropsDetailDoctor> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const handleSave = async () => {
    console.log("UPDATE DOCTOR")
    setEditing(false);
  };
  const handleDelete = async () => {
    setDelete(true);
    setEditing(true);
  }
  const DeleteDoctor = async () => {
    //DO SOMETHING THAT DELETE THAT DOCTOR
    console.log("DELETE DOCTOR")
    setEditing(false);
  }
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-3/4 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-1/2">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            Detail Doctor
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
          <div className="border-b-2     border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">ID :</span> {dataInitial.id}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Full name:</span>{" "}
            {dataInitial.Name}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Email :</span> {dataInitial.Email}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Gender :</span>{" "}
            {dataInitial.Gender}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Age :</span> {dataInitial.Age}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">CCCD:</span> {dataInitial.CCCD}
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Phone number :</span>{" "}
            {dataInitial.Number}
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Specialty</div>
            <div className="text-center font-bold text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {dataInitial.Specialty}
            </div>
          </div>
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Education</div>
            <div className="text-center font-bold text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {dataInitial.Education}
            </div>
          </div>
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Experience</div>
            <div className="text-center font-bold text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {dataInitial.Experience} years
            </div>
          </div>
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Salary</div>
            <div className="text-center font-bold text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              ${dataInitial.Salary} USD
            </div>
          </div>
          
        </div>
        
      </div>
      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-1/2 ">
          { isEditing ? (
            isDelete ? (
              <div>
              <div
            className="delay-50 -2-blue-700 left-0  w-full border-2 border-black bg-white 
                 py-3 text-white drop-shadow-md border-b-0
               hover:text-white hover:shadow-md hover:drop-shadow-xl text-center
              "
          >
            <span className="font-bold text-xl text-black">Are you sure you want to delete this doctor?</span>
            </div>
              <button
              id="myButton"
            className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-danger
                 py-3 text-white drop-shadow-md
              transition
              duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-rose-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
              "
              onClick={() => DeleteDoctor()}
          >
            <span className="font-bold">Confirm</span>
          </button>
          </div>
            ):(
            <button
            className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-blue-500
                 py-3 text-white drop-shadow-md
              transition
              duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
              "
              onClick={() => handleSave()}
          >
            <span className="font-bold">Complete</span>
          </button>
          )):(
            isDelete ?(
              <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-amber-700
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-amber-400 hover:shadow-md
                        hover:drop-shadow-xl "
            >
              <span className="font-bold">Doctor Deleted!</span>
            </button>
            ):(
            <div>
            <button
            className=" delay-50  w-full rounded-lg border-2 border-black bg-green-500
                      py-3   text-white  drop-shadow-md
                      transition duration-200 
                      ease-in-out hover:-translate-y-1 hover:scale-110 
                      hover:bg-emerald-400 hover:shadow-md
                      hover:drop-shadow-xl "
                      onClick={() => setEditing(true)}
          >
            <span className="font-bold">Update</span>
          </button>
          <button
          className=" delay-50  w-full rounded-lg border-2 border-black bg-rose-500
                    py-3 border-t-1 text-white  drop-shadow-md
                    transition duration-200 
                    ease-in-out hover:-translate-y-1 hover:scale-110 
                    hover:bg-rose-400 hover:shadow-md
                    hover:drop-shadow-xl "
                    onClick={() => handleDelete()}
        >
          <span className="font-bold">Delete</span>
        </button>
          </div>
            )
          )
          }
      </div>
      
    </div>
  );
};
