import type Prefecture from '@/types/Prefecture';
import type HandlePopulationTypeSelecterProps from './HandlePopulationTypeSelecterProps';

export default interface GraphSheetProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  handlePopulationTypeSelecter: HandlePopulationTypeSelecterProps['handlePopulationTypeSelecter'];
}
