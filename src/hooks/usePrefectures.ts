import { useState, useEffect } from 'react';
import Prefecture, { GetPrefecture } from '@/types/Prefecture';
import axios from 'axios';

export default function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<GetPrefecture>('/api/prefecture');
        const { result } = response.data;
        setPrefectures(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    console.log('useEffect Run');
  }, []);

  return { prefectures };
}
