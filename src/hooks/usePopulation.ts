import { useState } from 'react';
import axios from 'axios';

export default function usePopulation() {
  const [newPopulation, setNewPopulation] = useState<any | null>(null);

  const getPopulationData = async (prefCode: number) => {
    setNewPopulation(null);
    try {
      const response = await axios.get(`/api/population?prefCode=${prefCode}`);
      const { result } = response.data;
      setNewPopulation(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { newPopulation, getPopulationData };
}
