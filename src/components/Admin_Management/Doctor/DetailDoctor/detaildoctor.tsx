import React, { ReactEventHandler } from "react";
import { useState, useEffect } from "react";
import {
  queryStaff,
  Staff,
  updateStaff,
  workinghours,
} from "@/api_library/managehospital";

interface StaffData {
  cccd: string;
  name: string;
  email: string;
  gender: string; // Giới tính female hoặc male
  birthday: string; // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
  address: string;
  degree: string;
  clinic: string;
  position: string;
  specialized: string;
  role: string;
  working_hours: workinghours[];
}
interface PropsDetailDoctor {
  onclose: () => void;
  dataInitial: StaffData;
  reloadData: () => void;
  info: any;
}
interface Row {
  day: string;
  start_time: string;
  end_time: string;
  validated: string;
  error: string;
}
interface PropsScheduleForm {
  day: string;
  start_time: string;
  end_time: string;
}

export const DetailDoctor: React.FC<PropsDetailDoctor> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [isDelete, setDelete] = useState(false);

  const [data, setData] = useState<StaffData>({
    cccd: "",
    name: "",
    email: "",
    gender: "", // Giới tính female hoặc male
    birthday: "", // Kiểm tra ngày sinh theo định dạng yyyy-mm-dd và bắt buộc
    address: "",
    degree: "",
    clinic: "",
    position: "",
    specialized: "",
    role: "",
    working_hours: [],
  });
  const [updateData, setUpdateData] = useState({
    clinic: "",
    position: "",
  });
  const [validiateState, setValidiateState] = useState(false);

  const [rows, setRows] = useState<Row[]>([
    {
      day: "",
      start_time: "",
      end_time: "",
      validated: "false",
      error: "false",
    },
  ]);
  const [errors, setErrors] = useState<string[]>([]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        day: "",
        start_time: "",
        end_time: "",
        validated: "false",
        error: "false",
      },
    ]);
    //setValidiateState(false);

    console.log("ADD", rows);
  };

  const deleteRow = (
    index: number,
  ): React.MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
      setRows((prevRows) => prevRows.filter((_, i) => i !== index));
      //setValidiateState(true);
      setErrors([]);
    };
  };

  const handleSelectChange = (
    index: number,
    selectName: string,
    value: string,
  ) => {
    const newRows = [...rows];
    newRows[index][selectName as keyof Row] = value;
    newRows[index].validated = "false";
    //setValidiateState(false);
    setRows(newRows);
    validateRow(index);
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const time = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`;
        options.push(
          <option key={time} value={time}>
            {time}
          </option>,
        );
      }
    }
    return options;
  };

  const allRowsValidated = (): boolean => {
    return rows.every((row) => row.validated == "true");
  };

  const validateRow = (index: number) => {
    const row = rows[index];
    const newErrors: string[] = [];

    if (!row.day) {
      newErrors.push("Please select a day.");
    } else {
      const existingRow = rows.find((r, i) => i !== index && r.day === row.day);
      if (existingRow) {
        newErrors.push("Selected day has already existed.");
      }
    }

    if (!row.start_time || !row.end_time) {
      newErrors.push("Please select start and end times.");
    } else {
      const time1 = new Date(`2000-01-01T${row.start_time}`);
      const time2 = new Date(`2000-01-01T${row.end_time}`);
      if (time2 <= time1) {
        newErrors.push(
          "There must be at least 4 hours gap between start and end time.",
        );
      } else if (time2.getHours() - time1.getHours() < 4) {
        newErrors.push(
          "There must be at least 4 hours gap between start and end time.",
        );
      }
    }
    setErrors(newErrors);
    const newRows = [...rows];
    if (newErrors.length > 0) {
      //setValidiateState(false);
      newRows[index].validated = "false";
      newRows[index].error = "true";
    } else if (newErrors.length === 0) {
      newRows[index].validated = "true";
      newRows[index].error = "false";
      //setValidiateState(true);
    }
    setRows(newRows);
    console.log(rows);
  };

  const handleFetchData = async () => {
    const DOC = new Staff();
    try {
      const ID: queryStaff = {
        cccd: dataInitial.cccd,
      };
      const res = await DOC.findStaff(ID);
      console.log("DETAIL DATA: ", res.data);
      return res.data;
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    handleFetchData().then((res) => {
      setData(res);
      const newRows = res.working_hours.map((workingHour: any) => ({
        day: workingHour.day,
        start_time: workingHour.start_time,
        end_time: workingHour.end_time,
        validated: "true",
        error: "false",
      }));
      setRows(newRows);
    });
  }, [dataInitial]);

  const handleSave = async () => {
    console.log("UPDATE DOCTOR");
    const schedule: PropsScheduleForm[] = rows.map((row) => ({
      day: row.day,
      start_time: row.start_time,
      end_time: row.end_time,
    }));
    const DOC = new Staff();
    try {
      const Data: updateStaff = {
        address: data.address,
        degree: data.degree,
        specialized: data.specialized,
        clinic: updateData.clinic ? updateData.clinic : data.clinic,
        position: updateData.position ? updateData.position : data.position,
        working_hours: schedule,
      };
      console.log("UPDATED DATA: ", updateData);
      console.log("UPDATED SCHEDULE: ", schedule);
      const ID: queryStaff = {
        cccd: data.cccd,
      };
      const response = await DOC.updateStaff(ID, Data);

      console.log("Update state: ", response);
      handleFetchData().then((res) => {
        setData(res);
        const newRows = res.working_hours.map((workingHour: any) => ({
          day: workingHour.day,
          start_time: workingHour.start_time,
          end_time: workingHour.end_time,
          validated: "true",
          error: "false",
        }));
        setRows(newRows);
      });
    } catch (error) {
      console.log(error);
    }
    setEditing(false);
  };
  const handleDelete = async () => {
    setDelete(true);
    setEditing(true);
  };
  const DeleteDoctor = async () => {
    //DO SOMETHING THAT DELETE THAT DOCTOR
    const DOC = new Staff();
    try {
      const ID: queryStaff = {
        cccd: dataInitial.cccd,
      };
      const res = await DOC.deleteStaff(ID);
      console.log("DELETE DOCTOR: ", res);
      if (res.error) {
        alert("Delete failed" + res.message);
      } else {
        reloadData();
      }
    } catch (err) {
      console.log("error: ", err);
    }
    setEditing(false);
  };
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
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">Full name:</span>{" "}
            <span className="text-xl">{data.name}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">Email:</span>{" "}
            <span className="text-xl">{data.email}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">Gender:</span>{" "}
            <span className="text-xl">{data.gender}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">Birthday:</span>{" "}
            <span className="text-xl">{data.birthday}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">CCCD:</span>{" "}
            <span className="text-xl">{data.cccd}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out hover:transition-all">
            <span className="text-xl font-bold">Address:</span>{" "}
            <span className="text-xl">{data.address}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Specialty</div>
            <div className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {data.specialized}
            </div>
          </div>
          <div className="mt-5 px-4">
            <div className="text-center text-xl font-bold">Education</div>
            <div className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              {data.degree}
            </div>
          </div>

          <div className="mt-5 px-4">
            {!isEditing && (
              <>
                <div className="text-center text-xl font-bold">Position</div>
                <div className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                  {data.position}
                </div>
              </>
            )}
            {isEditing && (
              <>
                <div className="text-center text-xl font-bold">Position</div>
                <input
                  className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-4 border-cyan-500 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-green-500 focus:ring-green-500 dark:text-slate-800 dark:focus:border-green-500 dark:focus:ring-green-500"
                  type="text"
                  value={updateData?.position}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, position: e.target.value })
                  }
                />
              </>
            )}
          </div>

          <div className="mt-5 px-4">
            {!isEditing && (
              <>
                <div className="text-center text-xl font-bold">Clinic</div>
                <div className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                  {data.clinic}
                </div>
              </>
            )}
            {isEditing && (
              <>
                <div className="text-center text-xl font-bold">Clinic</div>
                <input
                  className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-4 border-cyan-500 bg-gray-3 p-2.5 text-center text-sm font-bold text-slate-700 focus:border-green-500 focus:ring-green-500 dark:text-slate-800 dark:focus:border-green-500 dark:focus:ring-green-500"
                  type="text"
                  value={updateData?.clinic}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, clinic: e.target.value })
                  }
                />
              </>
            )}
          </div>
        </div>

        <div className="mt-5 px-4">
          {!isEditing && (
            <div className="pb-4">
              <div className=" rounded-xl bg-slate-300 text-center text-title-xl font-semibold">
                SCHEDULE
              </div>
              {rows.map((row, index) => (
                <div key={index} className={`flex justify-around px-8 pt-4`}>
                  <div
                    className={`bg- w-1/4 rounded-xl border-4 text-center text-xl font-semibold`}
                  >
                    {row.day}
                  </div>
                  <div
                    className={`w-1/3 rounded-xl border-4 bg-green-200 text-center text-2xl font-bold`}
                  >
                    {row.start_time}
                  </div>
                  <div
                    className={`w-1/3 rounded-xl border-4 bg-teal-200 text-center text-2xl font-semibold`}
                  >
                    {row.end_time}
                  </div>
                </div>
              ))}
            </div>
          )}
          {isEditing && (
            // <>
            //   <div className="text-center text-xl font-bold">Availability</div>
            //   <div className="text-center font-bold text-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block min-h-5 w-full rounded-lg border-2 border-indigo-400 bg-gray-3 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            //   {data.working_hours && data.working_hours.map((workingHour, index) => (
            //   <div key={index}>{workingHour.day} from {workingHour.start_time} to {workingHour.end_time}</div>
            //   ))}
            //   </div>
            // </>
            <div className="">
              <div className=" rounded-xl bg-slate-300 text-center text-title-xl font-semibold">
                SCHEDULE UPDATE
              </div>
              {/* Dynamic rows */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`flex justify-center gap-3 space-x-3 pt-4`}
                >
                  <select
                    value={row.day}
                    onChange={(e) =>
                      handleSelectChange(index, "day", e.target.value)
                    }
                    className={`w-1/4 rounded-xl border-4 p-2 text-xl font-bold ${row.validated == "true" ? "border-green-300" : row.error == "false" ? "border-grey-300 " : " border-rose-300 "} focus:border-blue-300 focus:ring-blue-300 `}
                  >
                    <option value="" disabled>
                      Select Day
                    </option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <select
                    value={row.start_time}
                    onChange={(e) =>
                      handleSelectChange(index, "start_time", e.target.value)
                    }
                    className={`w-1/4 rounded-xl border-4 p-2 text-xl font-bold ${row.validated == "true" ? "border-green-300" : row.error == "false" ? "border-grey-300 " : "  border-rose-300"} focus:border-blue-300 focus:ring-blue-300`}
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    {generateTimeOptions()}
                  </select>
                  <select
                    value={row.end_time}
                    onChange={(e) =>
                      handleSelectChange(index, "end_time", e.target.value)
                    }
                    className={`w-1/4 rounded-xl border-4 p-2 text-xl font-bold ${row.validated == "true" ? "border-green-300" : row.error == "false" ? "border-grey-300 " : "  border-rose-300"} focus:border-blue-300 focus:ring-blue-300`}
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    {generateTimeOptions()}
                  </select>

                  {/* Validation button */}
                  <button
                    className={`${rows.length === 1 ? " cursor-not-allowed" : ""} rounded-xl bg-rose-500 text-white shadow-lg`}
                    onClick={deleteRow(index)}
                    disabled={rows.length === 1}
                  >
                    <div className="white flex items-center text-lg">
                      <svg
                        className="mx-auto block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </div>
                  </button>
                </div>
              ))}
              {/* Error messages */}
              {errors.length > 0 && (
                <div className="text-red-500 mt-4">
                  <ul>
                    <div className="grid grid-cols-2">
                      <div></div>
                      <div className=" rounded-xl bg-rose-400 text-center text-lg font-medium text-white ">
                        <span>
                          {errors.map((error, index) => (
                            <div key={index}>{error}</div>
                          ))}
                        </span>
                      </div>
                    </div>
                  </ul>
                </div>
              )}

              {/* Add button */}
              <div className="flex justify-center pb-6 pt-2">
                <button
                  onClick={addRow}
                  className={` mt-4 min-h-10 w-1/4 rounded-md bg-cyan-500 px-4 py-2 text-white
              ${!allRowsValidated() || rows.length === 7 ? "cursor-not-allowed opacity-50" : "animate-bounce transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-teal-500 hover:text-white hover:shadow-md hover:drop-shadow-xl"}
                `}
                  disabled={!allRowsValidated() || rows.length === 7}
                >
                  <span className=" font-semibold">Add Day</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sticky  bottom-0  z-999 flex w-3/4 flex-col sm:w-3/4 lg:ml-52 lg:w-1/2 ">
        {isEditing ? (
          isDelete ? (
            <div>
              <div
                className="delay-50 -2-blue-700 left-0  w-full border-2 border-b-0 border-black 
                 bg-white py-3 text-center text-white
               drop-shadow-md hover:text-white hover:shadow-md hover:drop-shadow-xl
              "
              >
                <span className="text-xl font-bold text-black">
                  Are you sure you want to delete this doctor?
                </span>
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
          ) : (
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
          )
        ) : isDelete ? (
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
        ) : (
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
              className=" delay-50  border-t-1 w-full rounded-lg border-2 border-black
                    bg-rose-500 py-3 text-white  drop-shadow-md
                    transition duration-200 
                    ease-in-out hover:-translate-y-1 hover:scale-110 
                    hover:bg-rose-400 hover:shadow-md
                    hover:drop-shadow-xl "
              onClick={() => handleDelete()}
            >
              <span className="font-bold">Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
