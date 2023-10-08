import type Prefecture from '@/types/Prefecture';
import type GetPopulationWithTypeProps from './GetPopulationWithTypeProps';
import type HandlePopulationTypeSelecterProps from './HandlePopulationTypeSelecterProps';

export default interface GraphSheetProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: GetPopulationWithTypeProps['getPopulationWithType'];
  handlePopulationTypeSelecter: HandlePopulationTypeSelecterProps['handlePopulationTypeSelecter'];
}
