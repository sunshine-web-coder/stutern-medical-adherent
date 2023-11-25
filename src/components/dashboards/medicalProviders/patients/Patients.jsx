"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import userDefault from "../../../../assets/user-default.png";
import { Select } from "antd";
import { bodyData, headers } from "@/constants/patientsDataTable";
import PatientsListTable from "@/components/DataTables/PatientsListTable";
import { Link } from "react-router-dom";

export default function Patients() {
  const [selectedFilter, setSelectedFilter] = useState("all patients");

  const onChange = (value) => {
    setSelectedFilter(value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filtered data based on the selected option
  const filteredData =
    selectedFilter === "all patients"
      ? bodyData
      : bodyData.filter(
          (patient) =>
            patient.status.toLowerCase() === selectedFilter.split(" ")[0],
        );

  // Define a variable for the dynamic text
  let dynamicText;

  // Set dynamic text based on the selected filter
  switch (selectedFilter) {
    case "all patients":
      dynamicText = "All Patients";
      break;
    case "adherent":
      dynamicText = "Adherent Patients";
      break;
    case "defaulted":
      dynamicText = "Defaulted Patients";
      break;
    default:
      dynamicText = "All Patients"; // Default to "All Patients" in case of unexpected value
  }

  return (
    <div className="">
      <div className="w-full px-[49px] shadow">
        <div className="w-full py-5">
          <div className="flex h-[79px] items-center justify-between">
            <div className="w-full">
              <p className="text-[32px] font-semibold leading-[49.66px] text-neutral-900">
                Welcome Victoria,
              </p>
              <p className="text-base font-normal leading-[24.83px] text-neutral-500">
                Here’s what is happening with your patients today.{" "}
              </p>
            </div>
            <div className="flex h-9 w-28 items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#636363"
                  d="M19 17v-5.2c-.5.1-1 .2-1.5.2H17v6H7v-7c0-2.8 2.2-5 5-5c.1-1.3.7-2.4 1.5-3.3c-.3-.4-.9-.7-1.5-.7c-1.1 0-2 .9-2 2v.3C7 5.2 5 7.9 5 11v6l-2 2v1h18v-1l-2-2m-9 4c0 1.1.9 2 2 2s2-.9 2-2h-4M21 6.5c0 1.9-1.6 3.5-3.5 3.5S14 8.4 14 6.5S15.6 3 17.5 3S21 4.6 21 6.5"
                />
              </svg>
              <button className="flex  items-center">
                <img
                  src={userDefault}
                  width={36}
                  height={36}
                  alt="user default"
                />
                <Icon
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  className="text-2xl text-[#646464]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[59px] px-[49px]">
        <div className="rounded px-[18px] py-[30px] shadow">
          <div className="flex h-11 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
              <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
                {dynamicText}
              </h3>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <Select
                  showSearch
                  placeholder="Select a patient"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  value={selectedFilter}
                  className="h-11 w-[200px]"
                  options={[
                    {
                      value: "all patients",
                      label: "All Patients",
                    },
                    {
                      value: "adherent",
                      label: "Adherent Patients",
                    },
                    {
                      value: "defaulted",
                      label: "Defaulting Patients",
                    },
                  ]}
                />
              </div>
              <Link to="/dashboard/invite-patients" className="inline-flex h-11 w-[164px] flex-col items-start justify-start gap-2.5 rounded border border-blue-700 bg-blue-700 p-4">
                <div className="inline-flex h-3 w-[132px] items-center justify-center gap-1">
                  <div className="font-['Open Sans'] text-sm font-semibold leading-snug text-white">
                    + Invite Patient
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-[48px]">
            <PatientsListTable headers={headers} data={filteredData}/>
          </div>
        </div>
      </div>
    </div>
  );
}
