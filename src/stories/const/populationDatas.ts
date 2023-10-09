import type { ShowPrefecture } from "@/types/Prefecture";
import { SOME_POPULATION_PREFECTURES } from "./prefectures";
import { POPULATION_TYPE } from "@/const";

export const POPULATION_DATAS: ShowPrefecture[] = SOME_POPULATION_PREFECTURES
  .filter((prefecture) => prefecture.selected)
  .map((prefecture) => ({
    prefName: prefecture.prefName,
    data: prefecture.data[prefecture.data.findIndex(
      (populationDatas) => populationDatas.label === POPULATION_TYPE[0],
    )].data
  }));

export const POPULATION_YOUNG_DATAS: ShowPrefecture[] = SOME_POPULATION_PREFECTURES
  .filter((prefecture) => prefecture.selected)
  .map((prefecture) => ({
    prefName: prefecture.prefName,
    data: prefecture.data[prefecture.data.findIndex(
      (populationDatas) => populationDatas.label === POPULATION_TYPE[1],
    )].data
  }));

export const POPULATION_MIDDLE_DATAS: ShowPrefecture[] = SOME_POPULATION_PREFECTURES
  .filter((prefecture) => prefecture.selected)
  .map((prefecture) => ({
    prefName: prefecture.prefName,
    data: prefecture.data[prefecture.data.findIndex(
      (populationDatas) => populationDatas.label === POPULATION_TYPE[2],
    )].data
  }));

export const POPULATION_OLDER_DATAS: ShowPrefecture[] = SOME_POPULATION_PREFECTURES
  .filter((prefecture) => prefecture.selected)
  .map((prefecture) => ({
    prefName: prefecture.prefName,
    data: prefecture.data[prefecture.data.findIndex(
      (populationDatas) => populationDatas.label === POPULATION_TYPE[2],
    )].data
  }));
