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

  const { getFirstLabelsData, getPopulationData } = usePopulation();

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
        selected: true,
        data: newData,
      };
      newPrefectures.splice(prefIndex, 0, newPrefectureData);
      setPrefectures(newPrefectures);
      console.log(newPrefectures);
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
    if (!prefectures) return;

    const prefIndex = getPopulationIndex(prefCode);

    const currentPrefecture = prefectures[prefIndex];

    if (currentPrefecture.data.length === 0 && selected) {
      setPopulation(prefCode);
    } else {
      switchSetting(prefIndex, selected);
    }
  };

  const setPrefectureArray = (prefectures: PrefectureCodeName[]) => {
    const prefectureArray: Prefecture[] = prefectures.map((prefecture) => ({
      ...prefecture,
      selected: false,
      data: [],
    }));
    setPrefectures(prefectureArray);
  };

  useEffect(() => {
    const getPrefectureData = async () => {
      try {
        const response = await axios.get<GetPrefecture>('/api/prefecture');
        const { result } = response.data;
        const firstLabels = await getFirstLabelsData(result[0].prefCode);
        if (firstLabels) setLabels(firstLabels);
        setPrefectureArray(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPrefectureData();
  }, []);

  // test setPopulation
  // if (prefectures && prefectures[getPopulationIndex(6)].data.length === 0) {
  //   setPopulation(6);
  // }

  // test handlePrefectureSelected
  // if (prefectures) {
  //   handlePrefectureSelected(18, false);
  // }

  return { prefectures, labels };
}
