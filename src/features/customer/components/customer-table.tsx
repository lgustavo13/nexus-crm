"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Customer } from "../types";
import { formatCurrency } from "@/src/lib/utils";

const columnHelper = createColumnHelper<Customer>();

const columns = [
  columnHelper.accessor("name", {
    header: "Nome do Cliente",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="font-medium text-slate-900">{info.getValue()}</span>
        <span className="text-xs text-slate-500">
          {info.row.original.email}
        </span>
      </div>
    ),
  }),
  columnHelper.accessor("company", {
    header: "Empresa",
    cell: (info) => (
      <span className="text-slate-700">{info.getValue() || "-"}</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      const styles = {
        Lead: "bg-yellow-100 text-yellow-800 border-yellow-200",
        Ativo: "bg-emerald-100 text-emerald-800 border-emerald-200",
        Cancelado: "bg-rose-100 text-rose-800 border-rose-200",
      };
      return (
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("contract_value", {
    header: "Valor do Contrato",
    cell: (info) => (
      <span className="font-medium text-slate-700">
        {formatCurrency(info.getValue())}
      </span>
    ),
  }),
];

export function CustomerTable({ data }: { data: Customer[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-4 font-semibold whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
