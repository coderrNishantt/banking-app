import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from 'react';

interface DoughnutChartProps {
  accounts: { label: string, value: number, color: string }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    labels: accounts.map(acc => acc.label), // Account labels
    datasets: [
      {
        data: accounts.map(acc => acc.value), // Account values
        backgroundColor: accounts.map(acc => acc.color), // Colors for each section
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
