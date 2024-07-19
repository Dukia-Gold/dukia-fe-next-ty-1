import { userStore } from "@/store/user";
import { DatePicker, DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface StatementOfAccountModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const StatementOfAccountModal = ({
  isOpen,
  closeModal,
}: StatementOfAccountModalProps) => {
  const [birthday, setBirthday] = useState("");
  const [birthdayVal, setBirthdayVal] = useState<Dayjs | null>(null);

  const handleDOBChange: DatePickerProps["onChange"] = (date, dateString) => {
    setBirthdayVal(date);
    setBirthday(dateString?.toString());
  };

  const adult = "2006-07-01";
  const dateFormat = "YYYY-MM-DD";

  const user = userStore((state: any) => state.user);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white text-dukiaBlue rounded-lg py-3 md:py-6 px-5 md:px-10 w-[95%] lg:w-[50rem] space-y-6">
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-lg font-bold">Statement of Account Request</p>

            <p className="text-sm">
              Please, select the time period you would like to download
            </p>
          </div>

          <button onClick={closeModal} className="text-3xl">
            &times;
          </button>
        </div>

        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-5 text-xs font-semibold">
            <div className="flex flex-col gap-2">
              <label htmlFor="from">
                From
              </label>
              <DatePicker
                name="from"
                format={dateFormat}
                value={birthdayVal}
                onChange={handleDOBChange}
                maxDate={dayjs(adult, dateFormat)}
                className="px-6 py-3.5 font-normal custom-ant-picker-focus dark:bg-dukiaDark dark:border-dukiaGold/[25%] dark:text-white dark:placeholder:text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="to">
                To
              </label>
              <DatePicker
                name="to"
                format={dateFormat}
                value={birthdayVal}
                onChange={handleDOBChange}
                maxDate={dayjs(adult, dateFormat)}
                className="px-6 py-3.5 font-normal custom-ant-picker-focus dark:bg-dukiaDark dark:border-dukiaGold/[25%] dark:text-white dark:placeholder:text-white"
              />
            </div>
          </div>

          <button className="bg-dukiaBlue hover:bg-dukiaGold text-white hover:text-dukiaBlue py-3.5 px-6 font-semibold rounded-lg">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatementOfAccountModal;
