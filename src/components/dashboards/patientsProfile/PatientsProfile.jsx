import {Link} from 'react-router-dom';
import ellipseImg from '../../../assets/Ellipse2.png';
import avatar from '../../../assets/avatar.png';

export default function PatientsProfile () {
  return (
    <div className="pb-20">
      <img
        src={ellipseImg}
        width={100}
        height="auto"
        className="absolute right-0 top-0"
        alt="Ellipse image"
      />
      <div className="mt-[59px] flex h-11 items-center justify-between px-[49px]">
        <div className="flex items-center gap-3">
          <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
          <h3 className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
            Patients Profile
          </h3>
        </div>
        <Link
          to="/dashboard/invite-patients"
          className="relative z-10 inline-flex h-11 w-[164px] flex-col items-start justify-start gap-2.5 rounded border border-blue-700 bg-blue-700 p-4"
        >
          <div className="inline-flex h-3 w-[132px] items-center justify-center gap-1">
            <div className="font-['Open Sans'] text-sm font-semibold leading-snug text-white">
              + Invite Patient
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-[48px] px-[49px]">
        <div className="inline-flex h-20 w-[269px] items-center justify-start gap-6">
          <img
            src={avatar}
            width={50}
            height={50}
            className="h-20 w-20"
            alt="profile image"
          />
          <div className="inline-flex flex-col items-start justify-start gap-2">
            <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
              Victoria Okwuokenye
            </div>
          </div>
        </div>
        <div className="mt-[26px]">
          <div className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
            Personal Information
          </div>
          <div className="mt-[24px] inline-flex items-start justify-start gap-[184px]">
            <div className="inline-flex flex-col items-start justify-start gap-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                    First Name
                  </div>
                </div>
                <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                  Victoria
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                    Age
                  </div>
                </div>
                <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                  39
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                    Last Name
                  </div>
                </div>
                <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                  Okwuokenye
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                    Sex
                  </div>
                </div>
                <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                  Female
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[56px] inline-flex h-[325px] w-full items-start justify-between rounded-2xl border border-neutral-100 p-6 shadow">
            <div className="inline-flex flex-col items-start justify-start gap-6">
              <div className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
                Medication Information
              </div>
              <div className="inline-flex w-[416px] items-start justify-between">
                <div className="inline-flex flex-col items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                        Medical Condition
                      </div>
                    </div>
                    <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                      Depression
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                        Dosage
                      </div>
                    </div>
                    <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                      Three at a Time
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                        Duration
                      </div>
                    </div>
                    <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                      3 months
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                        Name of Medication
                      </div>
                    </div>
                    <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                      Cipro
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="font-['Open Sans'] text-base font-normal leading-[24.83px] text-neutral-900">
                        Frequency
                      </div>
                    </div>
                    <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-neutral-900">
                      Twice Daily
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="font-['Open Sans'] text-xl font-semibold leading-[31.04px] text-black">
                Status
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="font-['Open Sans'] text-base font-semibold leading-[24.83px] text-red-500">
                  Defaulting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
