"use client";

import useModalsStore from "@/store/modalsStore";
import { X } from "lucide-react";
import Link from "next/link";

const SuccessfulDepositModal = () => {
  const successfulDeposit = useModalsStore(
    (state: any) => state.successfulDeposit
  );
  const depositResponse = useModalsStore((state: any) => state.depositResponse);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  if (successfulDeposit === false || successfulDeposit === undefined) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white text-dukiaBlue rounded-lg pt-5 pb-7 w-[95%] md:w-[38.3125rem] px-4 md:px-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold">Success!</p>

          <button
            onClick={() => updateModals({ successfulDeposit: false })}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={15} height={15} />
          </button>
        </div>

        <div className="pt-2 flex flex-col gap-7 items-center">
          <div className="flex flex-col items-center gap-2.5">
            <div className="p-10 bg-[#FFFBF1] rounded-[50%]">
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4030_1729)">
                  <path
                    d="M6.5 1.5H42.5M6.5 47.5H42.5M11.5 47.5V35.5L17.212 32.072C18.5197 31.2875 19.6019 30.1778 20.3533 28.8508C21.1046 27.5239 21.4996 26.0249 21.4996 24.5C21.4996 22.9751 21.1046 21.4761 20.3533 20.1492C19.6019 18.8222 18.5197 17.7125 17.212 16.928L11.5 13.5V1.5M37.5 1.5V13.5L31.788 16.928C30.4808 17.7128 29.3991 18.8227 28.6481 20.1496C27.897 21.4766 27.5023 22.9753 27.5023 24.5C27.5023 26.0247 27.897 27.5234 28.6481 28.8504C29.3991 30.1773 30.4808 31.2872 31.788 32.072L37.5 35.5V47.5"
                    stroke="#111827"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4030_1729">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-center text-sm">{depositResponse && depositResponse.message ? "You will be redirected to Paystack where you would complete your payment." : depositResponse}</p>
          </div>
          <Link
            href={
              depositResponse.data.authorization_url
                ? depositResponse.data.authorization_url
                : "/dashboard"
            }
          >
            <button
              onClick={() => updateModals({ successfulDeposit: false })}
              className="text-white text-sm font-semibold bg-dukiaBlue py-4 px-14 rounded-lg"
            >
              {depositResponse.data.authorization_url ? "Proceed" : "Okay"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulDepositModal;
