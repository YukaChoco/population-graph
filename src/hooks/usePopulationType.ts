import { useState } from 'react';
import usePrefectures from './usePrefectures';
import { POPULATION_TYPE } from '@/const';

export default function usePopulationType() {
  const [populationType, setPopulationType] = useState<string>(
    POPULATION_TYPE[0],
  );

  const handlePopulationTypeSelecter = (value: string) => {
    setPopulationType(value);
  };

  return { populationType, handlePopulationTypeSelecter };
}
