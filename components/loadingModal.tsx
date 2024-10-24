"use client"

import useLoadingStore from "@/store/loadingStore";
import { Spin } from "antd";

const LoadingModal = () => {
  const loading = useLoadingStore((state: any) => state.loading);

  if (loading === false || loading === undefined) {
    return null;
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white animate-in fade-in-5 duration-500 ease-in-out text-dukiaBlue rounded-lg p-7 pr-10 text-center w-auto">
        <Spin size="large" />
      </div>
    </div>
  );
};

export default LoadingModal;
