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

const popultationData = [
  {
    label: '大阪府',
    data: [
      12817, 12707, 12571, 12602, 12199, 11518, 10888, 10133, 9302, 8431, 7610,
      6816, 6048, 5324,
    ],
    backgroundColor: ['#9b59b6'],
    borderColor: ['#9b59b6'],
    borderWidth: 2,
  },
  {
    label: '愛媛県',
    data: [
      12906, 12769, 12346, 12019, 11728, 11442, 11321, 11144, 11936, 1822, 1705,
      1593, 1513, 1443,
    ],
    backgroundColor: ['#e67e22'],
    borderColor: ['#e67e22'],
    borderWidth: 2,
  },
];

export const graphData = {
  labels,
  datasets: popultationData,
};

export default function PopulationGraph() {
  return <Line options={options} data={graphData} />;
}