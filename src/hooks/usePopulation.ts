import { useState } from 'react';
import axios from 'axios';
import { GetPopulation, GetPrefecturePopulation } from '@/types/Population';

export default function usePopulation() {
  const getFirstLabelsData = async (prefCode: number) => {
    try {
      const response = await axios.get<GetPopulation>(
        `/api/population?prefCode=${prefCode}`,
      );
      const { result } = response.data;
      const boundaryYear = result.boundaryYear;
      const labels = result.data[0].data
        .filter((data) => data.year <= boundaryYear)
        .map((data) => `${data.year}`);
      return labels;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getDisaplayPopulationData = (result: GetPrefecturePopulation) => {
    const displayDatas = result.data.map((populationDatas) => ({
      label: populationDatas.label,
      data: populationDatas.data.map((populationData) => populationData.value),
    }));
    return displayDatas;
  };

  const getPopulationData = async (prefCode: number) => {
    try {
      const response = await axios.get<GetPopulation>(
        `/api/population?prefCode=${prefCode}`,
      );
      const { result } = response.data;
      const data = getDisaplayPopulationData(result);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { getFirstLabelsData, getPopulationData };
}
