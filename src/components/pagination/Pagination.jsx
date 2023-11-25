"use client";

import { Icon } from "@iconify/react";

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}) {
  const getPaginationButtons = () => {
    const buttons = [];
    const numAdjacentButtons = 2; // Number of buttons on each side of the current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - numAdjacentButtons &&
          i <= currentPage + numAdjacentButtons)
      ) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`${
              i === currentPage
                ? "mr-2 flex items-center justify-center rounded border border-[#1D4ED8] bg-gray-300 p-[12px] text-sm font-bold leading-tight text-[#1D4ED8] hover:bg-[#1D4ED8]"
                : "mr-2 flex items-center justify-center rounded border border-[#1D4ED8] bg-[#1D4ED8] p-[12px] text-sm leading-tight text-white hover:bg-[#1D4ED8]/95"
            }`}
          >
            {i}
          </button>,
        );
      } else if (buttons[buttons.length - 1] !== "...") {
        buttons.push("...");
      }
    }

    return buttons.map((button, index) => (
      <span key={index}>
        {button === "..." ? (
          <button
            className="mr-2 flex items-center justify-center rounded border border-[#1D4ED8] bg-[#1D4ED8] p-[13px] text-sm leading-tight text-white hover:bg-[#1D4ED8]/95"
            disabled={true}
          >
            <Icon icon="codicon:ellipsis" />
          </button>
        ) : (
          button
        )}
      </span>
    ));
  };
  return (
    <ul className="inline-flex items-stretch -space-x-px">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="ml-0 mr-2 flex h-full items-center justify-center rounded-l-lg border border-[#1D4ED8] bg-[#1D4ED8] px-3 text-white hover:bg-[#1D4ED8]/95"
        >
          {"<"}
        </button>
      </li>
      {getPaginationButtons()}
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 flex h-full items-center justify-center rounded-r-lg border border-[#1D4ED8] bg-[#1D4ED8] px-3 leading-tight text-white hover:bg-[#1D4ED8]/95"
        >
          {">"}
        </button>
      </li>
    </ul>
  );
}
