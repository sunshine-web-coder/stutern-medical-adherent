import { bodyData, headers } from "@/constants/patientsDataTable";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Pagination from "@/components/pagination/Pagination";

export default function PatientsTable({data}) {
   // Calculate the total number of pages for the filtered data
   const totalRows = data.length;
   const rowsPerPage = 5;
   const totalPages = Math.ceil(totalRows / rowsPerPage);
 
   // Use state to manage the current page
   const [currentPage, setCurrentPage] = useState(1);
 
   // Calculate the range of rows to display on the current page
   const startIndex = (currentPage - 1) * rowsPerPage;
   const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
 
   // Slice the visible rows based on the current page
   const visibleRows = data.slice(startIndex, endIndex);
 
   // Function to handle page change
   const handlePageChange = (newPage) => {
     setCurrentPage(newPage);
   };

  return (
    <div>
      <table className="w-full text-left text-sm">
        <thead className="text-base font-semibold leading-[24.83px] text-zinc-600">
          <tr>
            {headers.map((header) => (
              <th className="px-4 py-3" key={header.key}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, i) => {
            const backgroundColor = i % 2 === 0 ? "bg-gray-100" : "bg-white";

            return (
              <tr
                key={row.id}
                className={`h-[57px] font-normal leading-[24.83px] text-zinc-600 ${backgroundColor}`}
              >
                <td className="pl-4 text-base">{startIndex + i + 1}</td>
                <td className="pl-4 text-base">{row.name}</td>
                <td className="pl-4 text-base">{row.description}</td>
                <td
                  className={`pl-4 text-base ${
                    row.status === "Defaulted"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {row.status}
                </td>
                <td className="flex h-[57px] items-center gap-2 pl-4">
                  <Icon
                    icon="bx:edit"
                    className="cursor-pointer text-xl text-[#2FB551]"
                  />
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="cursor-pointer text-xl text-[#E8362C]"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          Showing {startIndex + 1}-{endIndex} of {totalRows}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
