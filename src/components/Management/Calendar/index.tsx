"use client";
import { useState, useEffect } from "react";
import { Staff } from "@/api_library/managehospital";
interface Schedule {
  day: string;
  start_time: string;
  end_time: string;
}
function getCurrentWeek() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const millisecondsInWeek = 604800000;

  return Math.floor(
    (now.getTime() -
      startOfYear.getTime() +
      (startOfYear.getDay() + 1) * 86400000) /
      millisecondsInWeek,
  );
}
const Calendar = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const OJ = new Staff();
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await OJ.getschedule();
        console.log(data);
        setSchedule(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchSchedule();
  }, []);
  const week = getCurrentWeek();
  return (
    <div className="mx-auto max-w-7xl">
      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className=" bg-slate-300 py-1 text-center text-title-xl font-semibold">
          SCHEDULE
          <div className="text-sm font-medium ">Week {week}</div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="flex flex-row place-content-around rounded-t-sm bg-primary text-white">
              {schedule.map((item, index) => (
                <th
                  key={index}
                  className="start-0 flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5"
                >
                  <span className="hidden lg:block"> {item.day} </span>
                  <span className="block lg:hidden"> {item.day} </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-row place-content-around">
              {schedule.map((item, index) => (
                <td
                  key={index}
                  className=" items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
                >
                  <div className="flex flex-col rounded-full bg-white">
                    <div className="">Start time: {item.start_time}</div>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="flex flex-row place-content-around">
              {schedule.map((item, index) => (
                <td
                  key={index}
                  className=" items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
                >
                  <div className="flex flex-col rounded-full bg-white">
                    <div className="">End time: {item.end_time}</div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </div>
  );
};

export default Calendar;
