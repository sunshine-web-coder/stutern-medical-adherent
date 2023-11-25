import { useSelector } from 'react-redux';
import userDefault from '../../assets/user-default.png';
import {Icon} from '@iconify/react';

export default function DashboardHeader () {
  const user = useSelector(state => state.user);

  return (
    <div className="w-full px-[49px] shadow">
      <div className="w-full py-5">
        <div className="flex h-[79px] items-center justify-between">
          <div className="w-full">
            <p className="text-[32px] font-semibold leading-[49.66px] text-neutral-900">
              Welcome {user.firstName},
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
  );
}
