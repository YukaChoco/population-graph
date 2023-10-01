import { PopulationData } from './Population';

export default interface Prefecture extends PrefectureCodeName {
  selected: boolean;
  data: PopulationData[];
}

export interface PrefectureCodeName {
  prefCode: number;
  prefName: string;
}

export interface GetPrefecture {
  message: string;
  result: PrefectureCodeName[];
}
