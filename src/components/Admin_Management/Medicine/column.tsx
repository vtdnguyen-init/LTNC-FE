"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Checkbox } from "../../ui/TableUI/checkbox";
import { DetailMedicine } from "./DetailMedicine/detailmedicine";
import DetailCell from "./DetailButton";
import { Button } from "@nextui-org/react";
// Đảm bảo gọi hàm này ở đầu ứng dụng của bạn
export type MedicineData = {
  id: number;
  Name: string;
  ImportDate: string,
  Brand: string,
  Origin: string,
  Amount: string,
  Price: string,
  ExpiredDate: string,
};

type MyColumnDef<T> = ColumnDef<T> & {
  reloadData?: () => void;
  info?: any;
};
export async function createColumns(
  reloadData: () => void,
  info: any,
): Promise<MyColumnDef<MedicineData>[]> {
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
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
    },
    {
      accessorKey: "Name",
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
    {
      accessorKey: "Brand",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Brand
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
    },
    {
      accessorKey: "ImportDate",

      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Imported Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return new Date(row.original.ImportDate).toLocaleDateString();
      },
    },
    {
      accessorKey: "ExpiredDate",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Expired Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return new Date(row.original.ExpiredDate).toLocaleDateString();
      },
    },

    {
      accessorKey: "Chi tiết",
      header: ({ column }) => {
        return "Chi tiết";
      },
      cell: ({ row }) => (
        <DetailCell row={row} reloadData={reloadData} info={info} />
      ),
    },
  ];
}
