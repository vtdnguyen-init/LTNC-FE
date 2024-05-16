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
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Sunday </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Monday </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Tuesday </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Wednesday </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Thursday </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Friday </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Saturday </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-7">
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
              <td className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <div className="h-5 w-5 rounded-full bg-white"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </div>
  );
};

export default Calendar;
