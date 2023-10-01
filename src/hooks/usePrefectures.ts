import { useState, useEffect } from 'react';
import Prefecture, {
  GetPrefecture,
  PrefectureCodeName,
} from '@/types/Prefecture';
import axios from 'axios';

export default function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[] | null>(null);

  const setPrefectureArray = (prefectures: PrefectureCodeName[]) => {
    const prefectureArray: Prefecture[] = prefectures.map(
      (prefecture, index) => ({
        ...prefecture,
        selected:
          index === 0 || index === prefectures.length - 1 ? true : false,
        data: [],
      }),
    );
    setPrefectures(prefectureArray);
  };

  useEffect(() => {
    const getPrefectureData = async () => {
      try {
        const response = await axios.get<GetPrefecture>('/api/prefecture');
        const { result } = response.data;
        setPrefectureArray(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPrefectureData();
  }, []);

  return { prefectures };
}
