import React from "react";
interface PropsDetailPatient {
  onclose: () => void;
  data: any;
}
export const DetailPatient: React.FC<PropsDetailPatient> = ({
  onclose,
  data,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center   bg-opacity-60 text-[#545e7b]`}
    >
      <div className="w-4/ relative mt-10 h-3/4 overflow-y-auto rounded-xl border-2 border-black bg-white p-4 dark:bg-[#14141a] sm:w-3/4 lg:ml-52 lg:w-1/2">
        <div className="relative flex h-10 w-full flex-col items-center justify-center border-b-2 border-[#545e7b]">
          <div className="w-full pb-2 text-center text-lg font-bold  sm:text-2xl">
            Thông báo
          </div>
          <button
            className=" hover:text-red-500 dark:hover:text-red-500 absolute right-0 mb-2 h-8 w-8 rounded-full border-2 font-bold 
            text-red hover:border-red hover:bg-red hover:text-white  dark:border-red dark:text-red dark:hover:bg-red"
            onClick={onclose}
          >
            X
          </button>
          <div>{data}</div>
        </div>
      </div>
    </div>
  );
};
