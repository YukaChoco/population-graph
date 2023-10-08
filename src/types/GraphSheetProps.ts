import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelected from '@/types/HandlePrefectureSelected';

export default interface GraphSheetProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  handlePopulationTypeSelecter: (value: string) => void;
}
