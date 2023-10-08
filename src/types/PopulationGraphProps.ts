import type Prefecture from '@/types/Prefecture';
import type GetPopulationWithTypeProps from './GetPopulationWithTypeProps';

export default interface PopulationGraphProps {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: GetPopulationWithTypeProps['getPopulationWithType'];
}
