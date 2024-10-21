// components/DoughnutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  centerText?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  centerText = "Life",
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Bid Price (NGN)",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      const fontSize = (height / 114).toFixed(2);

      ctx.restore();
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = centerText;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <Doughnut
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
        },
      }}
      plugins={[centerTextPlugin]}
    />
  );
};

export default DoughnutChart;
