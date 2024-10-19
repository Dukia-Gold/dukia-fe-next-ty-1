import React from "react"; // {{ edit_1 }}
import { useEffect, useRef } from "react";
import Script from "next/script";
import "./chart.css";

interface ChartProps {
  chartId: string; // Add a prop for unique chart id
}

const Chart: React.FC<ChartProps> = ({ chartId }) => {
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
        miniChartMode: true,
        displayLatestPriceLine: false,
        switchBullion: false,
        switchCurrency: false,
        switchTimeframe: false,
        switchChartType: false,
        exportButton: false,
      };

      if (typeof window !== "undefined" && (window as any).BullionVaultChart) {
        chartRef.current = new (window as any).BullionVaultChart(
          options,
          chartId
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
  }, [chartId]);

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

      <div
        id={chartId}
        style={{ height: "105px", width: "170px", minHeight: "115px" }}
        className="important-min-height" // Added class for important min-height
      ></div>
    </>
  );
};

export default Chart;
