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
import { GRAPH_OPTIONS, NO_DATA } from '@/const';

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
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
}

export default function PopulationGraph(props: Props) {
  const { populationType, labels, prefectures, getPopulationWithType } = props;

  const options = {
    ...GRAPH_OPTIONS,
    plugins: {
      title: {
        text: `都道府県別の${populationType}推移グラフ`,
      },
    },
  };

  const popultationData = prefectures
    .filter((prefecture) => prefecture.selected)
    .map((prefecture) => ({
      label: prefecture.prefName,
      data: getPopulationWithType(prefecture, populationType),
    }));

  const graphData = {
    labels,
    datasets: popultationData.length !== 0 ? popultationData : NO_DATA,
  };

  return (
    <div className={styles.graph}>
      <Line options={options} data={graphData} />
    </div>
  );
}
