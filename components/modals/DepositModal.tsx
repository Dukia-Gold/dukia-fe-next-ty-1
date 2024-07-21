"use client";

import useDeposit from "@/api/trading/deposit";
import { formatDecimal } from "@/lib/decimalFormatter";
import useModalsStore from "@/store/modalsStore";
import { Copy, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const DepositModal = () => {
  const [amount, setAmount] = useState<string>("");
  const [receipt, uploadReceipt] = useState<File | null>(null);
  const deposit = useModalsStore((state: any) => state.deposit);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const { depositWithBankTransfer, depositWithPayStack } = useDeposit();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const formatDecimal = (numStr: string) => {
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (deposit === false || deposit === undefined) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <ScrollArea className="bg-white text-dukiaBlue rounded-lg pt-5 pb-7 w-[95%] h-[85%] md:h-auto md:w-[38.3125rem] px-4 md:px-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-1">
            <p className="text-sm font-semibold">Top-up</p>
            <p className="text-[0.625rem] text-dukiaBlue/[75%] font-medium">
              You can top up directly from your bank account or with Paystack
            </p>
          </div>

          <button
            onClick={() => updateModals({ deposit: false })}
            className="p-2.5 bg-dukiaBlue/[5%] rounded-[50%]"
          >
            <X width={18} height={18} />
          </button>
        </div>

        <div className="mt-3 flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-5">
          <div className="flex gap-2.5 items-center py-2 md:py-4 px-10 md:px-7 border-b-2 border-dukiaBlue">
            <p className="text-sm font-semibold">Pay with bank transfer</p>
          </div>

          <button
            disabled={!amount || Number(amount) < 5000}
            onClick={() => {
                depositWithPayStack(Number(amount))
                setAmount("");
                uploadReceipt(null);
              }}
            className="flex gap-2.5 items-center py-2 md:py-4 px-10 md:px-7 cursor-pointer disabled:cursor-not-allowed"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.642 0H1.40831C0.896727 0 0.460938 0.435791 0.460938 0.966317V2.69053C0.460938 3.22105 0.896727 3.65684 1.40831 3.65684H16.642C17.1725 3.65684 17.5894 3.22105 17.6083 2.69053V0.985262C17.6083 0.435789 17.1725 0 16.642 0ZM16.642 9.56842H1.40831C1.16199 9.56842 0.915674 9.66316 0.745148 9.85263C0.555674 10.0421 0.460938 10.2695 0.460938 10.5347V12.2589C0.460938 12.7895 0.896727 13.2253 1.40831 13.2253H16.642C17.1725 13.2253 17.5894 12.8084 17.6083 12.2589V10.5347C17.5894 9.98526 17.1725 9.56842 16.642 9.56842ZM9.99146 14.3432H1.40831C1.16199 14.3432 0.915674 14.4379 0.745148 14.6274C0.574622 14.8168 0.460938 15.0442 0.460938 15.3095V17.0337C0.460938 17.5642 0.896727 18 1.40831 18H9.97251C10.503 18 10.9199 17.5642 10.9199 17.0526V15.3284C10.9388 14.76 10.522 14.3242 9.99146 14.3432ZM17.6083 4.77474H1.40831C1.16199 4.77474 0.915674 4.86947 0.745148 5.05895C0.574622 5.24842 0.460938 5.47579 0.460938 5.74105V7.46526C0.460938 7.99579 0.896727 8.43158 1.40831 8.43158H17.5894C18.1199 8.43158 18.5367 7.99579 18.5367 7.46526V5.74105C18.5557 5.21053 18.1199 4.79368 17.6083 4.77474Z"
                fill="#00C3F7"
              />
            </svg>

            <p className="text-sm font-semibold text-dukiaBlue/[50%]">
              Pay with Paystack
            </p>
          </button>
        </div>

        {/* Bank Transfer */}
        <div className="border border-[#E7E8E9] rounded-[0.625rem] py-2 px-2.5 w-full space-y-2">
          {/* Header */}
          <div className="px-2 py-2.5 space-y-2 bg-[#4A8F510D] border border-[#4A8F510D]/[50%] rounded-lg">
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5005 1C10.3571 1 12.1378 1.73755 13.4506 3.0504C14.7634 4.36325 15.501 6.14385 15.501 8.0005C15.501 9.85715 14.7634 11.6378 13.4506 12.9506C12.1378 14.2635 10.3571 15.001 8.5005 15.001C6.64385 15.001 4.86325 14.2635 3.5504 12.9506C2.23755 11.6378 1.5 9.85715 1.5 8.0005C1.5 6.14385 2.23755 4.36325 3.5504 3.0504C4.86325 1.73755 6.64385 1 8.5005 1ZM9.5505 5.298C10.0705 5.298 10.4925 4.937 10.4925 4.402C10.4925 3.867 10.0695 3.506 9.5505 3.506C9.0305 3.506 8.6105 3.867 8.6105 4.402C8.6105 4.937 9.0305 5.298 9.5505 5.298ZM9.7335 10.925C9.7335 10.818 9.7705 10.54 9.7495 10.382L8.9275 11.328C8.7575 11.507 8.5445 11.631 8.4445 11.598C8.39913 11.5813 8.36121 11.549 8.33756 11.5068C8.31391 11.4646 8.30609 11.4154 8.3155 11.368L9.6855 7.04C9.7975 6.491 9.4895 5.99 8.8365 5.926C8.1475 5.926 7.1335 6.625 6.5165 7.512C6.5165 7.618 6.4965 7.882 6.5175 8.04L7.3385 7.093C7.5085 6.916 7.7065 6.791 7.8065 6.825C7.85577 6.84268 7.89614 6.87898 7.91895 6.92609C7.94176 6.97321 7.94519 7.02739 7.9285 7.077L6.5705 11.384C6.4135 11.888 6.7105 12.382 7.4305 12.494C8.4905 12.494 9.1165 11.812 9.7345 10.925H9.7335Z"
                  fill="#111827"
                />
              </svg>

              <p className="text-sm font-semibold">
                Follow the Instruction to Top up your Account
              </p>
            </div>

            <ul className="text-xs font-medium text-dukiaBlue/[75%] space-y-1 list-disc pl-12">
              <li>
                Open your Bank App/Internet Banking Platform to transfer the
                deposit amount to the Dukia Gold Account details specified
                below.
              </li>

              <li>
                Please make the transfer from your registered bank account with
                us.
              </li>

              <li>
                Click on  &apos;I have made the Transfer&apos; button after
                making the transfer on your Bank App/Internet Banking Platform.
              </li>

              <li>
                Upload the generated payment receipt on your Bank App/Internet
                Banking Platform. While this step is optional it can help us
                expidite the confirmtion process of your deposit request.
              </li>
            </ul>
          </div>

          <div className="px-2 py-2.5 space-y-2 border border-[#4A8F510D]/[20%] rounded-lg">
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.83203 5.3335V8.00083H2.4987V12.0002H1.83203V14.0002H12.4987L14.4987 14.0008L15.1654 14.0002V12.0002H14.4987V8.00083H15.1654V5.3335L8.4987 1.3335L1.83203 5.3335ZM4.4987 12.0002V8.00083H5.83203V12.0002H4.4987ZM7.83203 12.0002V8.00083H9.16536V12.0002H7.83203ZM12.4987 12.0002H11.1654V8.00083H12.4987V12.0002ZM9.83203 5.3335C9.83199 5.50864 9.79745 5.68205 9.73038 5.84384C9.66332 6.00563 9.56505 6.15263 9.44117 6.27644C9.3173 6.40025 9.17025 6.49846 9.00843 6.56544C8.8466 6.63242 8.67317 6.66687 8.49803 6.66683C8.32289 6.66679 8.14948 6.63225 7.98768 6.56518C7.82589 6.49812 7.6789 6.39984 7.55508 6.27597C7.43127 6.1521 7.33307 6.00505 7.26609 5.84323C7.19911 5.6814 7.16465 5.50797 7.1647 5.33283C7.16479 4.97912 7.30538 4.63993 7.55555 4.38988C7.80573 4.13983 8.14499 3.99941 8.4987 3.9995C8.85241 3.99958 9.1916 4.14018 9.44164 4.39035C9.69169 4.64053 9.83212 4.97979 9.83203 5.3335Z"
                  fill="#111827"
                />
              </svg>

              <p className="text-sm font-semibold">
                Dukia Gold Account Details
              </p>
            </div>

            {/* Bank */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[0.625rem]">
              <div className="h-[3.75rem] rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">Bank</p>
                <p className="font-semibold">United Bank for Africa PLC</p>
              </div>

              {/* Account name */}
              <div className="rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">Account name</p>
                <p className="font-semibold">
                  Dukia Gold & Precious Metals Refining Co. Ltd. - OP
                </p>
              </div>

              {/* Account number */}
              <div className="rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">
                  Account number
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">1024263390</p>
                  <div className="flex items-center gap-1 rounded border border-[#00853D80]/[50%] bg-[#4A8F510D] py-0.5 px-1 text-[0.5rem] text-[#00853D]">
                    <Copy width={8} height={8} />
                    <p>Copy</p>
                  </div>
                </div>
              </div>

              {/* Sort Code */}
              <div className="md:h-[3.75rem] rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">Sort Code</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">33153788</p>
                  <div className="flex items-center gap-1 rounded border border-[#00853D80]/[50%] bg-[#4A8F510D] py-0.5 px-1 text-[0.5rem] text-[#00853D]">
                    <Copy width={8} height={8} />
                    <p>Copy</p>
                  </div>
                </div>
              </div>

              {/* Account type */}
              <div className="rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">
                  Type of Account
                </p>
                <p className="font-semibold">Operations Account</p>
              </div>

              {/* Currency */}
              <div className="rounded-lg py-1 px-1.5 border border-[#9999994D]/[30%] space-y-0.5">
                <p className="text-dukiaBlue/[75%] font-medium">Currency</p>
                <p className="font-semibold">Naira</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4 md:gap-7 w-full">
          <div className="text-sm space-y-1.5">
            <p className="text-dukiaBlue/[60%] font-semibold">
              How much did you deposit?
            </p>

            <div className="flex items-center rounded-lg border-2 border-dukiaBlue/[10%] focus-within:border-dukiaBlue/[50%]">
              <div className="p-4 border-r-2 border-dukiaBlue/[10%]">
                <p>₦</p>
              </div>

              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={formatDecimal(amount)}
                onChange={handleInputChange}
                placeholder="5,000"
                className="py-4 px-2 w-full outline-none font-medium rounded-lg placeholder:text-dukiaBlue/[30%]"
              />
            </div>

            <p className="text-red-600 text-xs font-semibold">
              Minimum: ₦5,000
            </p>
          </div>

          <div className="text-sm space-y-1.5">
            <p className="text-dukiaBlue/[60%] font-semibold">
              Receipt <span className="text-dukiaBlue/[30%]">(optional)</span>
            </p>

            {!receipt && (
              <div className="flex items-center rounded-lg border-2 p-1.5 border-dukiaBlue/[10%]">
                <div className="relative border rounded-md w-full border-dashed border-dukiaBlue/[60%] py-0.5 flex justify-center">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg, .pdf"
                    onChange={(e) => {
                      if (e.target.files) {
                        uploadReceipt(e.target.files[0]);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer outline-none"
                  />
                  <div className="flex items-center gap-2">
                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.38899 8.82459C3.82057 9.43534 1.91016 11.7448 1.91016 14.4998C1.91016 17.7216 4.52174 20.3332 7.74349 20.3332C8.29591 20.3332 8.83082 20.2562 9.33774 20.1127M20.6089 8.82459C23.1773 9.43534 25.0872 11.7448 25.0872 14.4998C25.0872 17.7216 22.4756 20.3332 19.2538 20.3332C18.7014 20.3332 18.1665 20.2562 17.6602 20.1127M20.5768 8.6665C20.5768 4.80075 17.4426 1.6665 13.5768 1.6665C9.71107 1.6665 6.57682 4.80075 6.57682 8.6665M9.53141 13.2638L13.5768 9.2055L17.7372 13.3332M13.5768 19.1665V11.2693"
                        stroke="#111827"
                        stroke-opacity="0.3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div className="-space-y-[0.2rem] text-[0.625rem]">
                      <p className="font-semibold">
                        Drag and drop files or{" "}
                        <span className="underline text-dukiaGold">browse</span>
                      </p>
                      <p className="font-medium text-dukiaBlue/[75%]">
                        Formats: PNG, JPG, JPEG, PDF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {receipt && (
              <div className="bg-[#FFFBF1] py-[0.9rem] px-5 flex items-center justify-between rounded-lg">
                <p className="font-semibold text-[0.625rem] text-dukiaBlue/[75%]">
                  {receipt.name}
                </p>

                <div className="relative bg-white py-0.5 px-1.5 border border-dukiaBlue/[50%] rounded">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg, .pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        uploadReceipt(e.target.files[0]);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer outline-none"
                  />

                  <div className="flex items-center gap-1">
                    <svg
                      width="9.93"
                      height="8"
                      viewBox="0 0 27 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.38899 8.82459C3.82057 9.43534 1.91016 11.7448 1.91016 14.4998C1.91016 17.7216 4.52174 20.3332 7.74349 20.3332C8.29591 20.3332 8.83082 20.2562 9.33774 20.1127M20.6089 8.82459C23.1773 9.43534 25.0872 11.7448 25.0872 14.4998C25.0872 17.7216 22.4756 20.3332 19.2538 20.3332C18.7014 20.3332 18.1665 20.2562 17.6602 20.1127M20.5768 8.6665C20.5768 4.80075 17.4426 1.6665 13.5768 1.6665C9.71107 1.6665 6.57682 4.80075 6.57682 8.6665M9.53141 13.2638L13.5768 9.2055L17.7372 13.3332M13.5768 19.1665V11.2693"
                        stroke="#111827"
                        stroke-opacity="1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[0.5rem] font-medium">Change file</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="flex mt-3 items-center gap-4 w-full font-semibold">
          <button
            disabled={!amount || Number(amount) < 5000}
            onClick={() => {
              depositWithBankTransfer(Number(amount), receipt);
              setAmount("");
              uploadReceipt(null);
            }}
            className="py-4 px-6 text-sm bg-dukiaBlue text-white rounded-lg disabled:cursor-not-allowed disabled:bg-dukiaBlue/[50%]"
          >
            I have made the payment
          </button>

          <p className="text-[0.625rem] text-dukiaGold">Want to sell?</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DepositModal;
