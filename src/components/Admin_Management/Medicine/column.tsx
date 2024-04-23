"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/TableUI/checkbox";
import { DetailMedicine } from "./DetailMedicine/detailmedicine";
import DetailCell from "./DetailButton";
import { Button } from "@nextui-org/react";
import { MedicalManage } from "@/api_library/managehospital";
// Đảm bảo gọi hàm này ở đầu ứng dụng của bạn
export type MedicineData = {
  name: string;
  brand: string;
  disposal_price: number;
  expiration_date: string;
  id: number;
  manufacture_date: string;
  origin: string;
  purchase_price: number;
  quantity: number;
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
    {
      accessorKey: "brand",
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
      accessorKey: "manufacture_date",

      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Manufacture Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return row.original.manufacture_date;
      },
    },
    {
      accessorKey: "expiration_date",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Expiration Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return row.original.expiration_date;
      },
    },
    {
      accessorKey: "quantity",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Quantity
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
      cell: ({ row }) => {
        return row.original.quantity;
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
