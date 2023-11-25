'use client';

import {Icon} from '@iconify/react';
import userDefault from '../../../assets/user-default.png';
import CalenderPicker from '../../../components/CalenderPicker';
import {bodyData, headers} from '../../../contants/notificationDataTable';
import ReminderTable from '@/components/DataTables/ReminderTable';

export default function PatientsDashboard () {
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
                Here’s what is happening with your patients today.{' '}
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
      <div className="mt-[59px] flex h-11 items-center justify-between px-[49px]">
        <div className="flex items-center gap-3">
          <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
          <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
            Dashboard
          </h3>
        </div>
      </div>

      <div className="px-[49px]">
        <CalenderPicker />
      </div>

      <div className="mt-[48px] px-[49px]">
        <div className="rounded bg-white px-[24px] py-[31px] pb-20 shadow">
          <div className="flex h-11 items-center justify-between mb-[39px]">
            <div className="flex items-center gap-3">
              <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
              <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
                Reminders{' '}
              </h3>
            </div>
          </div>
          <ReminderTable headers={headers} bodyData={bodyData} />
        </div>
      </div>
    </div>
  );
}
