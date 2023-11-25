import { useState } from "react";
import { Select } from "antd";
import { bodyData, headers } from "../../contants/patientsDataTable";
import PatientsListTable from "../../components/DataTables/PatientsListTable";
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
