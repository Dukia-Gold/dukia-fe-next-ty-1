"use client";

import { userStore } from "@/store/user";
import { DatePicker, DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import useDownloadAccountStatement from "@/api/downloadAccountStatement";
import useLoadingStore from "@/store/loadingStore";
import useModalsStore from "@/store/modalsStore";

const StatementOfAccountModal = () => {
  const statementOfAccount = useModalsStore(
    (state: any) => state.statementOfAccount
  );
  const updateModals = useModalsStore((state: any) => state.updateModals);

  const [start_date, setStart_date] = useState("");
  const [start_dateVal, setStart_dateVal] = useState<Dayjs | null>(null);
  const [end_date, setEnd_date] = useState("");
  const [end_dateVal, setEnd_dateVal] = useState<Dayjs | null>(null);

  const handleStartDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setStart_dateVal(date);
    setStart_date(dateString?.toString());
  };

  const handleEndDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setEnd_dateVal(date);
    setEnd_date(dateString?.toString());
  };

  const valid = "2024-07-19";
  const dateFormat = "YYYY-MM-DD";

  const user = userStore((state: any) => state.user);
  useEffect(() => {
    if (statementOfAccount) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const downloadAccountStatement = useDownloadAccountStatement();

  if (statementOfAccount === false || statementOfAccount === undefined) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out text-dukiaBlue rounded-lg py-3 md:py-6 px-5 md:px-10 w-[95%] lg:w-[50rem] space-y-6">
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-lg font-bold">Statement of Account Request</p>

            <p className="text-sm">
              Please, select the time period you would like to download
            </p>
          </div>

          <button
            onClick={() => updateModals({ statementOfAccount: false })}
            className="text-3xl"
          >
            &times;
          </button>
        </div>

        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-5 text-xs font-semibold">
            <div className="flex flex-col gap-2">
              <label htmlFor="from">From</label>
              <DatePicker
                name="from"
                format={dateFormat}
                value={start_dateVal}
                onChange={handleStartDateChange}
                maxDate={dayjs(valid, dateFormat)}
                className="px-6 py-3.5 font-normal custom-ant-picker-focus dark:bg-dukiaDark dark:border-dukiaGold/[25%] dark:text-white dark:placeholder:text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="to">To</label>
              <DatePicker
                name="to"
                format={dateFormat}
                disabled={
                  !start_dateVal || (start_dateVal && start_date === valid)
                }
                value={end_dateVal}
                onChange={handleEndDateChange}
                minDate={dayjs(start_date, dateFormat)}
                maxDate={dayjs(valid, dateFormat)}
                className="px-6 py-3.5 font-normal custom-ant-picker-focus dark:bg-dukiaDark dark:border-dukiaGold/[25%] dark:text-white dark:placeholder:text-white"
              />
            </div>
          </div>

          <button
            disabled={!start_date || !end_date}
            onClick={() => {
              downloadAccountStatement(start_date, end_date);
            }}
            className="bg-dukiaBlue hover:bg-dukiaGold text-white hover:text-dukiaBlue py-3.5 px-6 font-semibold rounded-lg disabled:bg-dukiaBlue/[25%] disabled:text-white disabled:cursor-not-allowed"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatementOfAccountModal;
