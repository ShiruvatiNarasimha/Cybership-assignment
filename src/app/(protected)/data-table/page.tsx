"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/trpc/react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export type OrderData = {
  id: string;
  name: string;
  address: string;
  items: string;
  shippingMethod: string;
  createdAt: Date;
};

export const columns: ColumnDef<OrderData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Customer Name",
  },
  {
    accessorKey: "address",
    header: "Shipping Address",
  },
  {
    accessorKey: "shippingMethod",
    header: "Shipping Method",
  },
  {
    accessorKey: "items",
    header: "Order Items",
  },
  {
    accessorKey: "createdAt",
    header: "Order Date",
    cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleDateString(),
  },
];

export function OrderDataTable() {
  const { data: orders, isLoading } = api.order.getOrders.useQuery();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: orders || [],
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

  return (
    <Card>
      <div className="w-full p-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              All
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              Unfulfilled
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              Fulfilled
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              Rejected
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              Cancellation Requested
            </Button>
            <Button
              variant="outline"
              className="hover:bg-black hover:text-white"
            >
              Unshippable
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" disabled={isLoading}>
                <span>Columns</span> <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {String(column.id)}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {isLoading ? (
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Skeleton className="h-4 w-4" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-[150px]" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-[200px]" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-[150px]" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-[150px]" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableHead>
                </TableRow>
              ) : (
                table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))
              )}
            </TableHeader>
            <TableBody>
              {isLoading
                ? Array.from({ length: 10 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Skeleton className="h-4 w-4" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[150px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[200px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[150px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[150px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[100px]" />
                      </TableCell>
                    </TableRow>
                  ))
                : table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={isLoading || !table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={isLoading || !table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
