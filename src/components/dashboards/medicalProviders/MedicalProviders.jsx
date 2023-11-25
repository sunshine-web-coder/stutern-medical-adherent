import { dashboardData1 } from "../../../contants/dashboard";
import MedicalProvidersTable from "./MedicalProvidersTable";
import { Link } from "react-router-dom";

export default function MedicalProviders() {
  return (
    <div className="">
      <div className="mt-[59px] flex h-11 items-center justify-between px-[49px]">
        <div className="flex items-center gap-3">
          <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
          <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
            Dashboard
          </h3>
        </div>
        <Link to="/dashboard/invite-patients" className="inline-flex h-11 w-[164px] flex-col items-start justify-start gap-2.5 rounded border border-blue-700 bg-blue-700 p-4">
          <div className="inline-flex h-3 w-[132px] items-center justify-center gap-1">
            <div className="font-['Open Sans'] text-sm font-semibold leading-snug text-white">
              + Invite Patient
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-[62px] flex gap-5 px-[49px]">
        {dashboardData1.map((list) => (
          <div
            key={list.title}
            className="inline-flex h-[180px] w-full flex-col items-start justify-start gap-2.5 rounded-lg border border-neutral-500/20 bg-white px-[19px] py-12"
          >
            <div className="inline-flex items-center justify-start gap-6">
              <div className="relative h-[82.15px] w-[82.15px]">
                <div
                  className="absolute left-0 top-0 h-[82.15px] w-[82.15px] rounded-full"
                  style={{
                    backgroundColor: `${list.boxBgColor}`,
                    backdropFilter: "blur(2.49px)",
                    opacity: 0.2,
                  }}
                />
                <div
                  className="absolute left-[13.69px] top-[13.69px] h-[54.77px] w-[54.77px] rounded-full"
                  style={{ backgroundColor: `${list.boxBgColor}` }}
                />
                <div className="absolute left-[24.62px] top-[25.07px] h-8 w-8">
                  {list.svg}
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-[3.38px]">
                <div className="font-['Open Sans'] text-lg font-semibold leading-[31.04px] text-neutral-500">
                  {list.title}
                </div>
                <div className="font-['Open Sans'] text-2xl font-semibold leading-[37.25px] text-zinc-600">
                  {list.number}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[48px] px-[49px]">
        <div className="rounded border bg-white px-[24px] py-[31px] shadow">
          <div className="flex h-11 items-center justify-between mb-[39px]">
            <div className="flex items-center gap-3">
              <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
              <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
                Notifications
              </h3>
            </div>
          </div>
          <MedicalProvidersTable />
        </div>
      </div>
    </div>
  );
}
