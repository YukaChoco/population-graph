import { useState, useEffect } from 'react';
import Prefecture, {
  GetPrefecture,
  PrefectureCodeName,
} from '@/types/Prefecture';
import axios from 'axios';
import usePopulation from './usePopulation';

export default function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[] | null>(null);
  const { getPopulationData } = usePopulation();

  const getPopulationIndex = (prefCode: number) => {
    if (!prefectures) return -1;

    return prefectures.findIndex(
      (prefecture) => prefecture.prefCode === prefCode,
    );
  };

  const setPopulation = async (prefCode: number) => {
    console.log(prefectures);
    if (!prefectures) return;

    const newPrefectures = Array.from(prefectures);
    const prefIndex = getPopulationIndex(prefCode);

    if (prefectures[prefIndex].data.length !== 0) return;

    const [currentPrefectureData] = newPrefectures.splice(prefIndex, 1);

    const newData = await getPopulationData(prefCode);

    if (newData) {
      const newPrefectureData: Prefecture = {
        ...currentPrefectureData,
        data: newData,
      };
      newPrefectures.splice(prefIndex, 0, newPrefectureData);
      setPrefectures(newPrefectures);
      console.log(newPrefectures);
    }
  };

  const handlePrefectureSelected = async (prefCode: number) => {
    if (!prefectures) return;

    const returndata = await getPopulationData(prefCode);
    if (returndata) {
      console.log(returndata);
    }
  };

  const setPrefectureArray = (prefectures: PrefectureCodeName[]) => {
    const prefectureArray: Prefecture[] = prefectures.map(
      (prefecture) => ({
        ...prefecture,
        selected: false,
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

  // test setPopulation
  if (prefectures && prefectures[getPopulationIndex(6)].data.length === 0) {
    setPopulation(6);
  }

  return { prefectures };
}
