import { useEffect, useRef } from "react";
import Script from "next/script";
import "@/app/bullion.css";

const BullionVaultChartComponent: React.FC = () => {
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
      <div className="pt-20 flex justify-center items-center">
        <div
          id="container"
          className="rounded-2xl pt-14 p-4 bg-[#f6f7f9] space-y-16"
        >
          <h1 className="text-center text-4xl font-extrabold">
            Live Gold Market Price
          </h1>
          <div id="embed" className="w-[1034px] h-[511px]"></div>
        </div>
      </div>
    </>
  );
};

export default BullionVaultChartComponent;
