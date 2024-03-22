import { BRAND } from "@/types/brand";
import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-06.svg",
    name: "Youtube",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableFour: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1170px]">
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">NAME</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">TITLE</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">EMAIL</h5>
            </div>
            <div className="col-span-2">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">ROLE</h5>
            </div>
            </div>
            <div className="bg-white dark:bg-boxdark">
            <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">Shafiq Hammad</p>
              </div>
              <div className="col-span-3"><p className="text-[#637381] dark:text-bodydark">Regional Paradigm Technician</p>
              </div>
              <div className="col-span-3"><p className="text-[#637381] dark:text-bodydark">shafiq.hd@example.com</p>
              </div>
              <div className="col-span-2"><p className="text-[#637381] dark:text-bodydark">Moderator</p>
              </div>
              <div className="col-span-1"><button className="float-right text-primary">Edit</button>
              </div></div>

              
           </div>
           </div>
           </div>
           </div>
           
  );
};

export default TableFour;
