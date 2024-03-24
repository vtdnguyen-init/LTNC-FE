"use client";
import React from 'react';
const Doctor : React.FC = () => {
    return(
        <div className="flex flex-wrap">
  <div className="flex-auto w-full">
    <div className="flex flex-col mb-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-card">
      <div className="flex flex-wrap justify-between p-6 pb-0">
        <div className="header-title">
          <h4 className="mb-2 text-2xl font-medium card-title dark:text-black">Doctor Datatables</h4>
        </div>
        <div className="">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 
        py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full w-full">ADD NEW</button>
        </div>
      </div>
      <div className="flex-auto p-6">
        <p className="mb-4 text-gray-500 text-base dark:text-yellow-900">Be careful when editing, or <span className="text-pink-500">deleting</span> anything because it can't be undone</p>
        <div className="flex flex-wrap justify-between">
        <div className="flex justify-center items-center">
            <label className="inline-block mb-2 text-gray-600 rtl:ml-2" htmlFor="email">Search:</label>
            <input type="email" className="block w-full px-4 py-1 ml-2 text-base font-normal bg-white border rounded outline-none focus:border-blue-500 focus:shadow dark:bg-dark-card dark:border-gray-600" id="email1"/>
          </div>
          <div className="flex justify-center items-center">
            <label className="inline-block text-gray-600" htmlFor="email">Show</label>
            <div className="flex">
              <select className="block w-full px-2 py-1 ml-2 rtl:mr-2 text-base font-normal bg-white border rounded-xl outline-none focus:border-blue-500 focus:shadow dark:bg-dark-card dark:text-black dark:border-gray-600" aria-label=".htmlForm-select-sm example">
                <option>10</option>
                <option value="1">25</option>
                <option value="2">50</option>
                <option value="3">100</option>
              </select>
              <span className="text-gray-600 ml-1">entries</span>
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table id="basic-table" className="min-w-full overflow-hidden">
            <thead>
              <tr className="bg-gray-100 dark:bg-dark-bg">
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">NAME</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">POSITION</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">OFFICE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">AGE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">START DATE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">SALARY</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">EDIT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="dark:bg-dark-strip">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Duy Nguyen</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Surgeon Doctor</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Vietnam</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">20</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">2024/3/24</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">$162,700</h6>
                  </div>
                </td>
                <td className="px-7 py-4 whitespace-nowrap">
                  <div className="flex items-right">
                    <a href="" id="bold-svg-container-46">
                        <svg className="icon-32" width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z" fill="currentColor"></path>
                        </svg>
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-100 dark:bg-dark-card">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Duy Nguyen</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Nurse</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Vietnam</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">20</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">2024/03/24</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">$90,000</h6>
                  </div>
                </td>
                <td className="px-7 py-4 whitespace-nowrap">
                  <div className="flex items-right">
                    <a href="" id="bold-svg-container-46">
                        <svg className="icon-32" width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z" fill="currentColor"></path>
                        </svg>
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="dark:bg-dark-strip">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Duy Nguyen</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Psychologist</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">Vietnam</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">21</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">2024/03/23</h6>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <h6 className="text-base dark: text-blue-950">$86,000</h6>
                  </div>
                </td>
                <td className="px-7 py-4 whitespace-nowrap">
                  <div className="flex items-right">
                    <a href="" id="bold-svg-container-46">
                        <svg className="icon-32" width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z" fill="currentColor"></path>
                        </svg>
                    </a>
                  </div>
                </td>
              </tr>
              
            </tbody>
            <tfoot>
              <tr className="bg-white dark:bg-dark-strip ">
              <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">NAME</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">POSITION</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">OFFICE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">AGE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">START DATE</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">SALARY</th>
                <th className="px-6 text-gray-500 py-4 whitespace-nowrap text-left dark:text-slate-900">EDIT</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>

</div>
    );
}

export default Doctor;