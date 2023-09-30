import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '都道府県別の総人口推移グラフ',
    },
  },
};

const labels = [
  '1980',
  '1985',
  '1990',
  '1995',
  '2000',
  '2005',
  '2010',
  '2015',
  '2020',
];
console.log(labels);

export const graphData = {
  labels,
  datasets: [
    {
      label: '大阪府',
      data: [19, 2, 5, 3, 3, 12],
      backgroundColor: ['#9b59b6'],
      borderColor: ['#9b59b6'],
      borderWidth: 2,
    },
    {
      label: '愛媛県',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#e67e22'],
      borderColor: ['#e67e22'],
      borderWidth: 2,
    },
  ],
};

export default function PopulationGraph() {
  return <Line options={options} data={graphData} />;
}
