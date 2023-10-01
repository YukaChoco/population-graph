export interface PopulationData {
  label: string;
  data: number[];
}

export interface GetPrefecturePopulation {
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
}

export interface GetPopulation {
  message: string;
  result: GetPrefecturePopulation;
}
