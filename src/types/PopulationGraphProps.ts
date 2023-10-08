import type Prefecture from '@/types/Prefecture';

export default interface PopulationGraphProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
}
