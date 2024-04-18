import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-900 bg-white dark:bg-boxdark">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-2 px-4 pt-4 md:grid-cols-4 md:gap-10 lg:grid-cols-8">
            <div className="col-span-4">
              <div className="col-span-4 pb-3 text-center italic">
                This project is driven by{" "}
                <a className="font-semibold dark:text-white">the enthusiasm</a>{" "}
                of our team:
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/ava.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Duy Nguyen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/nha.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nha</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/nhan.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/download.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Tan Phat</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/hoang.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Huy Hoang</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/images/user/download.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Lam Nguyen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="pb-1 font-bold dark:text-white">
                Project&#39;s Description
              </div>
              <div className="pt-3 font-medium">
                In this time, we have tried to bring a platform to meet the
                diverse requirements of hospitals, ranging from small clinics to
                large medical centers, with{" "}
                <a className="text-gray-900 font-semibold italic underline decoration-blue-500 dark:text-white">
                  special features
                </a>
                , we hope that this project can be beneficial to healthcare
                centers.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
