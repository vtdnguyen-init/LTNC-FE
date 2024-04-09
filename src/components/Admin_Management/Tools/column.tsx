"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Checkbox } from "../../ui/TableUI/checkbox";
import DetailCell from "./DetailButton";
// Đảm bảo gọi hàm này ở đầu ứng dụng của bạn
export type ToolsData = {
  id: number;
  Name: string;
  ExpiredDate: string;
  ImportedDate: string;
  Amount: string;
  Origin: string;
  Brand: string;
  Price: string;
};

type MyColumnDef<T> = ColumnDef<T> & {
  reloadData?: () => void;
  info?: any;
};
export async function createColumns(
  reloadData: () => void,
  info: any,
): Promise<MyColumnDef<ToolsData>[]> {
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
      accessorKey: "Amount",
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        );
      },
    },
    
    {
      accessorKey: "ExpriredDate",

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
