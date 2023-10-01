import { useState } from 'react';
import axios from 'axios';
import { GetPopulation, PrefecturePopulation } from '@/types/Population';

export default function usePopulation() {
  const getPopulationData = async (prefCode: number) => {
    try {
      const response = await axios.get<GetPopulation>(
        `/api/population?prefCode=${prefCode}`,
      );
      const { data } = response.data.result;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { getPopulationData };
}
