import { FEW_PREFECTURES, NOT_SELECTED_PREFECTURES, SOME_POPULATION_PREFECTURES } from "../const/prefectures";
import { DEFAULT_LABELS, FEW_LABELS } from "../const/labels"
import { POPULATION_TYPE } from "@/const";
import type Prefecture from "@/types/Prefecture";

export const args = {
  populationType: POPULATION_TYPE[0],
  labels: DEFAULT_LABELS,
  prefectures: SOME_POPULATION_PREFECTURES,
  getPopulationWithType: (_prefecture: Prefecture, _type: string) => [],
}

export const argTypes = {
  populationType: {
    control: {
      type: 'object',
    },
  },
  labels: {
    control: {
      type: 'object',
    },
  },
  prefectures: {
    control: {
      type: 'object',
    },
  },
  getPopulationWithType: { table: { disable: true }, },
}

export const customArgs = {
  someSelected: {
    ...args,
    prefectures: SOME_POPULATION_PREFECTURES,
  },
  notSelected: {
    ...args,
    prefectures: NOT_SELECTED_PREFECTURES,
  },
  fewPrefectures: {
    ...args,
    prefectures: FEW_PREFECTURES,
  },
  noPrefectures: {
    ...args,
    prefectures: [],
  },
  fewLabels: {
    ...args,
    labels: FEW_LABELS,
  },
  noLabels: {
    ...args,
    labels: [],
  },
  young: {
    ...args,
    populationType: POPULATION_TYPE[1],
  },
  middle: {
    ...args,
    populationType: POPULATION_TYPE[2],
  },
  older: {
    ...args,
    populationType: POPULATION_TYPE[3],
  },
}
