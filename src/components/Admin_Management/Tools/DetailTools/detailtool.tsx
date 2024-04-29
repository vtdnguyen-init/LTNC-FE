import React, { ReactEventHandler } from "react";
import { useState , useEffect} from "react";
import {
  medicalEquipment,
  queryMedicalEquipment,
  updateMedicalEquip,
  warranty_history
} from "@/api_library/managehospital"
interface ToolsData {
  id: string;
  name: string;
  warranty_expiration_date: string;
  status: string;
  purchase_price: number;
  warranty_history: [];
}
interface PropsDetailTool {
  onclose: () => void;
  dataInitial: ToolsData;
  reloadData: () => void;
  info: any;
}
interface WarrantyData {
	date: string,
	description: string,
}
export const DetailTool: React.FC<PropsDetailTool> = ({
  onclose,
  dataInitial,
  reloadData,
  info,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [data, setData] = useState<ToolsData>({
    id: "",
    name: "",
    warranty_expiration_date: "",
    status: "",
    purchase_price: 0,
    warranty_history: [],
  });
  const [updateData, setUpdateData] = useState({
    status: "",
    warranty_history: [],
  });
  const [warranty, setWarranty] = useState({
    date:"",
    description: "",
  });
  const handleFetchData = async () => {
    const TL = new medicalEquipment();
    try {
      const ID: queryMedicalEquipment = {
        id : dataInitial.id,
      };
      const response = await TL.getDetail(ID);
      console.log("Detail", response.data);
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
  const completeUpdate = async () => {
    console.log("UPDATE TOOLS");
    const originalDate = warranty.date;

  // Split the original date string into year, month, and day parts
  const [year, month, day] = originalDate.split('-');

  const formattedDate = `${day}/${month}/${year}`;
    const TL = new medicalEquipment();
    try {
      const Warranty_data: warranty_history = {
        date: formattedDate,
        description: warranty.description,
      };
      console.log("Status: ",updateData.status)
      console.log("DATA: ",Warranty_data);
      const Data: updateMedicalEquip = {
        name:data.name,
        warranty_expiration_date:data.warranty_expiration_date,
        purchase_price: data.purchase_price,
        status: updateData.status
          ? updateData.status
          : data.status,
        warranty_history: (Warranty_data.date && data.warranty_history) 
          ? [...data.warranty_history, Warranty_data]
          : [Warranty_data],
      };
      const ID: queryMedicalEquipment = {
        id: dataInitial.id,
      };
      const response = await TL.updateMedicalEquip( ID,Data);
      console.log("Update", response);
      handleFetchData().then((res) => {
        setData(res);
      });
    } catch (err) {
      console.log(err);
    }
    setEditing(false);
  };
  const handleDelete = async () => {
    setDelete(true);
    setEditing(true);
  }
  const DeleteTool = async () => {
    //DO SOMETHING THAT DELETE THAT TOOLS
    console.log("DELETE TOOL");
    const TL = new medicalEquipment();
    try {
      const ID: queryMedicalEquipment = {
        id: dataInitial.id,
      };
      const response = await TL.deleteMedicalEquipment(ID);
      console.log("Delete ID: ",dataInitial.id, response);
      if (response.error) {
        alert("Delete failed: " + response.message);
      } else {
        reloadData();
      }
    } catch (err) {
      console.log("Delete fail sucessfully",err);
    }
    setEditing(false);
  }
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="relative z-50 mt-10 h-3/4 w-3/4 flex-col place-content-between overflow-x-hidden overflow-y-scroll rounded-t-xl border-l-2  border-r-2 border-t-2 border-black bg-white hide-scrollbar  dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-1/2">
        <div className="sticky my-2 flex h-10 w-full flex-row items-center justify-center  border-b-2 border-[#545e7b]">
          <div className="w-full  text-center text-lg font-bold  sm:text-2xl">
            Detail Tools
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
            <span className="text-xl font-bold">Name:</span>{" "}
            <span className="text-xl">{dataInitial.name}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Status :</span>{" "}
            <span className="text-xl">{dataInitial.status}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Price :</span>{" "}
            <span className="text-xl">${dataInitial.purchase_price}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Expired Date:</span> 
            <span className="text-xl">{dataInitial.warranty_expiration_date}</span>
          </div>
          <div className=" bg-slate-300 rounded-xl col-span-2 text-center font-semibold text-title-xl">
              WARRANTY HISTORY
          </div>
          {dataInitial.warranty_history.map((hist:WarrantyData) => (
            <>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold">Date :</span>{" "}
            <span className="text-xl">{hist.date}</span>
          </div>
          <div className="border-b-2 border-indigo-400 duration-500 ease-in-out  hover:transition-all">
            <span className="text-xl font-bold"></span> 
            <span className="text-l">{hist.description}</span>
          </div>
          </>
          ))}
          {isEditing && !isDelete? (
          <>
            <div className="py-5"></div>
              <div className=" bg-slate-300 rounded-xl col-span-2 text-center font-semibold text-title-xl">
              WARRANTY UPDATED
              </div>
            <div className="col-span-1 grid grid-cols-2">
              <div>
                <div className="relative">
                    <span className=" font-medium text-xl pl-3">Status: </span>
                    <input type="text" id="status" className="block w-5/6 p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter status" required 
                    onChange={(e) => setUpdateData({ ...updateData, status: e.target.value})}/>
                    
                </div>
              </div>
              <div>
                <span className=" font-medium text-xl pl-3">At day: </span>
                <div className="relative">
                    <input type="date" id="date" className="block w-5/6 p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date" required 
                    onChange={(e) => setWarranty({ ...warranty, date: e.target.value})}
                    />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <span className=" font-medium text-xl pl-3">Description: </span>
              <div className="relative">
                    <textarea id="description" rows={4} className="block w-full p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe condition of items...." required 
                    onChange={(e) => setWarranty({ ...warranty, description: e.target.value})}
                    />
                </div>
            </div>
          </>
        ):("")}
          
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
            <span className="font-bold text-xl text-black">Are you sure you want to delete this tool?</span>
            </div>
              <button
            className="delay-50 -2-blue-700 left-0  w-full rounded-b-lg border-2 border-black bg-danger
                 py-3 text-white drop-shadow-md
              transition
              duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-rose-500 hover:text-white hover:shadow-md hover:drop-shadow-xl
              "
              onClick={() => DeleteTool()}
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
              onClick={() => completeUpdate()}
          >
            <span className="font-bold">Complete</span>
          </button>
          )):(
            isDelete ? (
              <button
              className=" delay-50  w-full rounded-lg border-2 border-black bg-amber-700
                        py-3   text-white  drop-shadow-md
                        transition duration-200 
                        ease-in-out hover:-translate-y-1 hover:scale-110 
                        hover:bg-amber-400 hover:shadow-md
                        hover:drop-shadow-xl "
            >
              <span className="font-bold">Tool Deleted!</span>
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
                    py-3   text-white  drop-shadow-md
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
