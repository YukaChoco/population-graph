import type Prefecture from '@/types/Prefecture';

export default interface GraphSheetProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  handlePopulationTypeSelecter: (value: string) => void;
}
