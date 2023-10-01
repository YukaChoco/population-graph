import { useState, useEffect } from 'react';
import Prefecture, {
  GetPrefecture,
  PrefectureCodeName,
} from '@/types/Prefecture';
import axios from 'axios';
import usePopulation from './usePopulation';

export default function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[] | null>(null);
  const [labels, setLabels] = useState<string[] | null>(null);

  const { getFirstPopulationData, getDisplayPopulationData } = usePopulation();

  const getPopulationIndex = (prefCode: number) => {
    if (!prefectures) return -1;

    return prefectures.findIndex(
      (prefecture) => prefecture.prefCode === prefCode,
    );
  };

  const setPopulation = async (prefCode: number) => {
    if (!prefectures) return;

    const newPrefectures = Array.from(prefectures);
    const prefIndex = getPopulationIndex(prefCode);

    if (prefectures[prefIndex].data.length !== 0) return;

    const [currentPrefectureData] = newPrefectures.splice(prefIndex, 1);

    const newData = await getDisplayPopulationData(prefCode);

    if (newData) {
      const newPrefectureData: Prefecture = {
        ...currentPrefectureData,
        selected: true,
        data: newData,
      };
      newPrefectures.splice(prefIndex, 0, newPrefectureData);
      setPrefectures(newPrefectures);
    }
  };

  const switchSetting = (prefIndex: number, selected: boolean) => {
    if (!prefectures) return;

    const newPrefectures = Array.from(prefectures);

    if (prefectures[prefIndex].selected === selected) return;

    const [currentPrefectureData] = newPrefectures.splice(prefIndex, 1);

    const newPrefectureData: Prefecture = {
      ...currentPrefectureData,
      selected: selected,
    };

    newPrefectures.splice(prefIndex, 0, newPrefectureData);
    setPrefectures(newPrefectures);
  };

  const handlePrefectureSelected = async (
    prefCode: number,
    selected: boolean,
  ) => {
    if (!prefectures) {
      return;
    }

    const prefIndex = getPopulationIndex(prefCode);

    const currentPrefecture = prefectures[prefIndex];

    if (currentPrefecture.data.length === 0 && selected) {
      await setPopulation(prefCode);
    } else {
      switchSetting(prefIndex, selected);
    }
  };

  const setPrefectureArray = async (prefectures: PrefectureCodeName[]) => {
    const result = await getFirstPopulationData(prefectures[0].prefCode);
    if (!result) return;
    const { labels, firstData } = result;
    const prefectureArray: Prefecture[] = prefectures.map(
      (prefecture, index) => {
        if (index === 0) {
          return {
            ...prefecture,
            selected: true,
            data: firstData,
          };
        }
        return {
          ...prefecture,
          selected: false,
          data: [],
        };
      },
    );
    setLabels(labels);
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

  return { prefectures, labels, handlePrefectureSelected };
}
