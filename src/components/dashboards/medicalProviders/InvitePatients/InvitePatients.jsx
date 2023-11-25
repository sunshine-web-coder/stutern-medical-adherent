import inviteImg from "../../../../assets/invite.svg";
import gmail from "../../../../assets/social/gmail.svg";
import whatsapp from "../../../../assets/social/whatsapp.svg";
import fb from "../../../../assets/social/Facebook.svg";

export default function InvitePatients() {
  return (
    <div className="">
      <div className="mt-[59px] px-[49px]">
        <div className="h-[800px] rounded px-[18px] py-[30px] shadow">
          <div className="flex h-11 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
              <h3 className="text-xl font-semibold leading-[31.04px] text-black">
                Invite Patients
              </h3>
            </div>
          </div>
          <div className="mt-[38.5px] flex w-full flex-col items-center justify-center">
            <img
              src={inviteImg}
              width={250}
              height={234.32}
              alt="invite svg image"
            />

            <div className="mt-[35.68px]">
              <div className="text-sm font-semibold leading-tight text-zinc-600">
                Patients can easily share health data with you. <br />
                Copy the link below and effortlessly get access to track your
                patient’s health profile more conveniently.
              </div>
              <div className="mt-[32px] inline-flex h-[66px] w-[344px] flex-col items-start justify-start gap-1.5">
                <div className="text-sm font-semibold leading-tight text-slate-800">
                  Invite Link
                </div>
                <div className="inline-flex cursor-pointer items-center justify-start gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow">
                  <div className="flex h-5 items-center justify-start gap-2">
                    <div className="shrink grow basis-0 text-sm font-semibold leading-tight text-gray-500">
                      https://mediktrakka.com/invite/huv4
                    </div>
                  </div>
                  <div className="relative h-4 w-4" />
                  <div className="relative h-4 w-4" />
                </div>
              </div>

              <div className="mt-[30px] ">
                <div className="text-left text-sm font-semibold leading-normal tracking-tight text-black">
                  Share to:
                </div>
                <div className="mt-[5px] inline-flex items-center justify-start gap-6">
                  <button>
                    <img src={gmail} width={28} height={32} alt="gmail" />
                  </button>
                  <button>
                    <img src={whatsapp} width={32} height={32} alt="whatsapp"/>
                  </button>
                  <button>
                    <img src={fb} width={32} height={32} alt="fb" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
