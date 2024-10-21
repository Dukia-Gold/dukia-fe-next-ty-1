import React, { useState } from "react"; // {{ edit_1 }}
import { useEffect, useRef } from "react";
import Script from "next/script";
import "@/app/bullion.css";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { motion } from "framer-motion"; // Import motion from framer-motion

const BullionVaultChartComponent: React.FC = () => {
  const [viewChart, setViewChart] = useState(true);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const initializeChart = () => {
      const options = {
        bullion: "gold",
        currency: "USD",
        timeframe: "1d",
        chartType: "line",
        miniChartModeAxis: "oz",
        referrerID: "MYUSERNAME",
        containerDefinedSize: true,
        miniChartMode: false,
        displayLatestPriceLine: true,
        switchBullion: false,
        switchCurrency: true,
        switchTimeframe: true,
        switchChartType: false,
        exportButton: false,
      };

      if (typeof window !== "undefined" && (window as any).BullionVaultChart) {
        chartRef.current = new (window as any).BullionVaultChart(
          options,
          "embed"
        );
      }
    };

    if (!chartRef.current) {
      if ((window as any).BullionVaultChart) {
        // If the script is already loaded
        initializeChart();
      } else {
        // Wait for the script to load
        const handleScriptLoad = () => {
          initializeChart();
        };

        window.addEventListener("BullionVaultChartLoaded", handleScriptLoad);

        return () => {
          window.removeEventListener(
            "BullionVaultChartLoaded",
            handleScriptLoad
          );
        };
      }
    }
  }, []);

  return (
    <>
      <Script
        src="https://code.highcharts.com/highcharts.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.highcharts.com/modules/accessibility.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.bullionvault.com/chart/bullionvaultchart.js"
        strategy="afterInteractive"
        onLoad={() => {
          const event = new Event("BullionVaultChartLoaded");
          window.dispatchEvent(event);
        }}
      />
      <div className="pt-20 flex justify-center items-center text-dukiaBlue">
        <div
          id="container"
          className={`${viewChart ? "pt-14 p-4" : "py-10"} rounded-2xl bg-[#f6f7f9] w-full max-w-[1066px] space-y-16 flex flex-col items-center`}
        >
          <div className="flex items-center gap-6">
            <div className="cursor-pointer p-4 bg-[#FBF7EB] rounded-full">
              {viewChart ? (
                <RiEyeOffFill
                  size={25}
                  onClick={() => {
                    setViewChart(false);
                  }}
                />
              ) : (
                <RiEyeFill
                  size={25}
                  onClick={() => {
                    setViewChart(true);
                  }}
                />
              )}
            </div>

            <h1 className="text-center text-4xl font-extrabold">
              {viewChart ? "Hide" : "See"} Live Gold Market Price
            </h1>
          </div>

          <motion.div
            id="embed"
            className={`${viewChart ? "block" : "hidden"} w-[1034px]`}
            initial={{ height: 0 }}
            animate={{ height: viewChart ? 511 : 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default BullionVaultChartComponent;
