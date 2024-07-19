import { userStore } from "@/store/user";
import { DatePicker, DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import useDownloadAccountStatement from "@/api/downloadAccountStatement";
import useLoadingStore from "@/store/loadingStore";
import LoadingModal from "../loadingModal";

interface StatementOfAccountModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const StatementOfAccountModal = ({
  isOpen,
  closeModal,
}: StatementOfAccountModalProps) => {
  const loading = useLoadingStore((state: any) => state.loading);
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const downloadAccountStatement = useDownloadAccountStatement();

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
