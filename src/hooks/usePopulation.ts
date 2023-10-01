import { useState } from 'react';
import axios from 'axios';
import { GetPopulation, PrefecturePopulation } from '@/types/Population';

export default function usePopulation() {
  const [newPopulation, setNewPopulation] = useState<
    PrefecturePopulation[] | null
  >(null);

  const getPopulationData = async (prefCode: number) => {
    setNewPopulation(null);
    try {
      const response = await axios.get<GetPopulation>(
        `/api/population?prefCode=${prefCode}`,
      );
      const { result } = response.data;
      setNewPopulation(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { newPopulation, getPopulationData };
}
