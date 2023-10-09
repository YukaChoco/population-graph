import type { ShowPrefecture } from '@/types/Prefecture';

export default interface PopulationGraphProps {
  populationType: string;
  labels: string[];
  popultationData: ShowPrefecture[];
}
