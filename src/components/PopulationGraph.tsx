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
  Colors,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from '@/styles/PopulationGraph.module.css';
import Prefecture from '@/types/Prefecture';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
);

interface Props {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
}

export default function PopulationGraph(props: Props) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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

  const popultationData = props.prefectures
    .filter((prefecture) => prefecture.selected)
    .map((prefecture) => ({
      label: prefecture.prefName,
      data: prefecture.data[0].data,
    }));

  const graphData = {
    labels: props.labels,
    datasets: popultationData,
  };

  return (
    <div className={styles.graph}>
      <Line options={options} data={graphData} />
    </div>
  );
}
