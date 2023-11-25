import Pagination from "../../../components/pagination/Pagination";
import { bodyData, headers } from "../../../contants/notificationDataTable";
import { useState } from "react";

// Assuming you have a total number of rows
const totalRows = bodyData.length;
const rowsPerPage = 5;

// Calculate the total number of pagesw
const totalPages = Math.ceil(totalRows / rowsPerPage);

export default function MedicalProvidersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of rows to display on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);

  const visibleRows = bodyData.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Format date and time
  const formatDateTime = (dateTime) => {
    const optionsDate = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
  
    const formattedDate = new Date(dateTime).toLocaleString('en-US', optionsDate);
    const formattedTime = new Date(dateTime).toLocaleString('en-US', optionsTime);
  
    return (
      <div>
        <span className="text-base">{formattedDate}</span>
        <br />
        <span className="text-xs">{formattedTime}</span>
      </div>
    );
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
            const backgroundColor = i % 2 === 0 ? 'bg-gray-100' : 'bg-white';

            return (
              <tr
                key={row.id}
                className={`h-[57px] font-normal leading-[24.83px] text-zinc-600 ${backgroundColor}`}
              >
                <td className="pl-4 text-base">{startIndex + i + 1}</td>
                <td className="pl-4 text-base">{row.name}</td>
                <td className="pl-4 text-base">{row.narration}</td>
                <td className={`pl-4 text-base ${row.status === 'Defaulted' ? 'text-red-600' : 'text-green-600'}`}>
                  {row.status}
                </td>
                <td className="flex flex-col pl-4">
                  <span>{formatDateTime(row.date)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-8 flex items-center border-t pt-4 justify-between">
        <div>
          Showing {startIndex + 1}-{endIndex} of {totalRows}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}
