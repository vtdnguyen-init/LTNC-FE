"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState, useContext } from "react";
import Loader from "@/components/common/Loader";
import { UserContext } from "./Context/UserInfo";
import { Provider } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [loading, setLoading] = useState<boolean>(true);

  // // const pathname = usePathname();

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <UserContext.Provider value={{ info: null, setInfo: () => {} }}>
          <div className="h-full dark:bg-boxdark-2 dark:text-bodydark">
            {children ? children : <Loader />}
          </div>
        </UserContext.Provider>
      </body>
    </html>
  );
}
