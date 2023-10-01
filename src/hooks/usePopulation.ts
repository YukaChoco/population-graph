import { useState } from 'react';
import axios from 'axios';
import { GetPopulation, GetPrefecturePopulation } from '@/types/Population';

export default function usePopulation() {
  const getPopulationData = async (prefCode: number) => {
    try {
      const response = await axios.get<GetPopulation>(
        `/api/population?prefCode=${prefCode}`,
      );
      const { result } = response.data;
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFirstPopulationData = async (prefCode: number) => {
    const result = await getPopulationData(prefCode);
    if (result) {
      const boundaryYear = result.boundaryYear;
      const labels = result.data[0].data
        .filter((data) => data.year <= boundaryYear)
        .map((data) => `${data.year}`);
      const firstData = convertIntoDisaplayPopulationData(result);
      return { labels, firstData };
    }
  };

  const convertIntoDisaplayPopulationData = (
    result: GetPrefecturePopulation,
  ) => {
    const displayDatas = result.data.map((populationDatas) => ({
      label: populationDatas.label,
      data: populationDatas.data.map((populationData) => populationData.value),
    }));
    return displayDatas;
  };

  const getDisplayPopulationData = async (prefCode: number) => {
    const result = await getPopulationData(prefCode);
    if (result) {
      const data = convertIntoDisaplayPopulationData(result);
      return data;
    }
    return [];
  };

  return { getFirstPopulationData, getDisplayPopulationData };
}
