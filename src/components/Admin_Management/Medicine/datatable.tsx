"use client";
import React from "react";
import { useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  ColumnFiltersState,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/TableUI/table";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  reloadData?: () => void;
  info?: any;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  reloadData,
  info,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const paginationButtons = [];
  for (let i = 0; i < table.getPageCount(); i++) {
    paginationButtons.push(
      <Button key={i} onClick={() => table.setPageIndex(i)}>
        {i + 1}
      </Button>,
    );
  }
  const handleDeleteRowsSelected = () => {
    table.getFilteredSelectedRowModel().rows.forEach((row) => {
      console.log(row.original);
      // Chỗ này call API về sever để xóa nhân viên nè m
      //chỉ cần truyền row.original.id vào là được
    });
  };
  const confirmDelete = () => {
    return window.confirm("Are you sure you want to delete?");
  };
  const deleteRows = () => {
    // Gọi hàm confirmDelete và lưu kết quả vào biến result
    const result = confirmDelete();
    // Nếu result là true, tức là người dùng nhấn yes
    if (result) {
      // Gọi hàm handleDeleteRowsSelected để xóa các hàng đã chọn
      handleDeleteRowsSelected();
    }
    // Nếu result là false, tức là người dùng nhấn no
    else {
      // Không làm gì cả
    }
  };
  return (
    <div className="px-4 ">
      <div className="flex items-center px-4 py-4">
        <div className="flex w-full flex-col sm:flex-row">
          <div className="relative flex h-full w-full sm:w-1/2 lg:w-1/3">
            <svg
              viewBox="0 0 24 24"
              height={18}
              width={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 absolute left-3 top-2.5 h-5 w-5 place-items-center dark:text-black"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              id="consSearch"
              type="text"
              value={
                (table.getColumn("Name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("Name")?.setFilterValue(event.target.value)
              }
              className={` border-gray-600 peer h-10 w-full self-center truncate rounded border bg-transparent pl-10 pr-12
              pt-2 text-left text-sm placeholder-transparent focus:border-blue-500 focus:outline-none dark:text-whiter`}
              placeholder=""
            />
            <label
              htmlFor="consSearch"
              className={`text-gray-500 peer-placeholder-shown:text-gray-500 absolute -top-0 pl-10 text-xs leading-5 text-black transition-all 
              peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-0.5 
              peer-focus:text-xs peer-focus:leading-5 peer-focus:text-blue-500 dark:text-blue-600 `}
            >
              Search by name
            </label>
            <Dropdown className="z-30">
              <DropdownTrigger>
                <Button
                  className="border-gray-600 ml-2 w-24 rounded border text-center text-xs  md:text-base"
                  aria-label="Show items per page"
                >
                  Show {table.getState().pagination.pageSize}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                className="border-gray-300 w-24 rounded border bg-white"
                aria-labelledby="dropdownMenuButton"
              >
                {[10, 20, 30, 40, 50].map((pageSize, index) => (
                  <DropdownItem
                    key={pageSize}
                    textValue={`Show ${pageSize} items per page`}
                    className={` ${index !== 0 ? "border-gray-300 border-t" : ""} `}
                  >
                    <Button
                      onClick={() => table.setPageSize(pageSize)}
                      variant="bordered"
                      aria-label={`Show ${pageSize}`}
                      className="w-full  text-center "
                    >
                      Show {pageSize}
                    </Button>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="mt-4 flex h-10 flex-grow justify-center sm:mt-0 sm:justify-end">
            <Link
              href="/forms/medicine"
              className={` flex items-center gap-2.5 bg-sky-700 rounded-xl px-4 font-medium  text-bodydark2 
              transition duration-200
              ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  hover:text-white
                              `}
            >
              <Button variant="light" size="sm" className="text-white">
                Add Medicine
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-gray-700 rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-gray-700">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`border-gray-700 ${
                    row.getIsSelected() ? "bg-gray-700" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <button
          className={`
          mb-0.5 me-2 w-12 rounded-md border 
           bg-transparent px-2 py-[0.15rem] text-center text-sm font-normal
          text-black drop-shadow-md hover:bg-black hover:bg-opacity-30
          hover:text-black hover:shadow-md hover:drop-shadow-xl focus:outline-none dark:text-white sm:w-16 md:text-base
          ${
            table.getFilteredSelectedRowModel().rows.length > 0
              ? "border-red"
              : "border-black dark:border-gray-2"
          }`}
          onClick={deleteRows}
        >
          {table.getFilteredSelectedRowModel().rows.length}/
          {table.getFilteredRowModel().rows.length}
        </button>
        <Button
          variant="light"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="mb-0.5 me-2 w-12 rounded-md border border-black 
           bg-transparent px-2 py-[0.15rem] text-center text-sm font-normal
           text-black drop-shadow-md
          hover:bg-black hover:bg-opacity-30 hover:text-black hover:shadow-md
          hover:drop-shadow-xl focus:outline-none dark:border-gray-2 dark:text-white sm:w-16 md:text-base"
        >
          <span>Prev</span>
        </Button>
        <span className="flex items-center gap-1">
          <div className="text-xs md:text-base"></div>
          <strong className="whitespace-nowrap text-xs md:text-base">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap text-xs md:text-base">
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="mb-0.5 me-2 w-12 rounded-md border border-black 
            bg-transparent px-2 py-[0.15rem] text-center text-sm font-normal
            text-black drop-shadow-md
           hover:bg-black hover:bg-opacity-30 hover:text-black hover:shadow-md
           hover:drop-shadow-xl focus:outline-none dark:border-gray-2 dark:text-white sm:w-16 md:text-base"
          />
        </span>
        <Button
          variant="light"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="mb-0.5 me-2 w-12 rounded-md border border-black 
           bg-transparent px-2 py-[0.15rem] text-center text-sm font-normal
           text-black drop-shadow-md
          hover:bg-black hover:bg-opacity-30 hover:text-black hover:shadow-md
          hover:drop-shadow-xl focus:outline-none dark:border-gray-2 dark:text-white sm:w-16 md:text-base"
        >
          <span>Next</span>
        </Button>
      </div>
    </div>
  );
}
