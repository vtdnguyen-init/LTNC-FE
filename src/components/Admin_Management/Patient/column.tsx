"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Checkbox } from "../../ui/TableUI/checkbox";
import { DetailPatient } from "./DetailPatient/detailpatient";
import DetailCell from "./DetailButton";
import { Button } from "@nextui-org/react";
import { Notification } from "@/components/common/Noti/Notification";
import { queryPatient, Patient } from "@/api_library/managehospital";
// Đảm bảo gọi hàm này ở đầu ứng dụng của bạn
export type PatientData = {
  id: number;
  name: string;
  Room: string;
  Gender: string;
  Date: string;
  Age: string;
  cccd: string;
  SDT: string;
  MedicalHistory: string;
  InditialDis: string;
};

type MyColumnDef<T> = ColumnDef<T> & {
  reloadData?: () => void;
  info?: any;
};
export async function createColumns(
  reloadData: () => void,
  info: any,
): Promise<MyColumnDef<PatientData>[]> {
  const count = 0;
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="border border-black dark:border-black"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="border border-black dark:border-black"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <button
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "desc")
            }
          >
            ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return row.index + 1;
      },
    },
    {
      accessorKey: "cccd",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            CCCD
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
    },

    // {
    //   accessorKey: "Gender",
    //   header: ({ column }) => {
    //     return (
    //       <button
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Gender
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </button>
    //     );
    //   },
    // },
    // {
    //   accessorKey: "Date",

    //   header: ({ column }) => {
    //     return (
    //       <button
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Date
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </button>
    //     );
    //   },
    //   cell: ({ row }) => {
    //     return new Date(row.original.Date).toLocaleDateString();
    //   },
    // },

    {
      accessorKey: "Detail",
      header: ({ column }) => {
        return "Detail";
      },
      cell: ({ row }) => (
        <DetailCell row={row} reloadData={reloadData} info={info} />
      ),
    },
  ];
}
