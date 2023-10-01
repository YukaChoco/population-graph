export interface PopulationYearValue {
  year: number;
  value: number;
}

export interface PopulationData {
  label: string;
  data: PopulationYearValue[];
}

export interface PrefecturePopulation {
  boundaryYear: number;
  data: PopulationData[];
}

export interface GetPopulation {
  message: string;
  result: PrefecturePopulation;
}
