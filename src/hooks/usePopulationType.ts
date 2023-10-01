import { useState } from 'react';
import { POPULATION_TYPE } from '@/const';
import Prefecture from '@/types/Prefecture';

export default function usePopulationType() {
  const [populationType, setPopulationType] = useState<string>(
    POPULATION_TYPE[0],
  );

  const handlePopulationTypeSelecter = (value: string) => {
    setPopulationType(value);
  };

  const getPopulationWithType = (prefecture: Prefecture, type: string) => {
    const dataIndex = prefecture.data.findIndex(
      (populationDatas) => populationDatas.label === type,
    );
    return prefecture.data[dataIndex].data;
  };

  return {
    populationType,
    handlePopulationTypeSelecter,
    getPopulationWithType,
  };
}
