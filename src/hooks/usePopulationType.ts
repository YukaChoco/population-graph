import { useState } from 'react';
import usePrefectures from './usePrefectures';
import { POPULATION_TYPE } from '@/const';

export default function usePopulationType() {
  const [type, setType] = useState<string>(POPULATION_TYPE[0]);

  const handlePopulationTypeSelecter = (value: string) => {
    setType(value);
  };

  return { type, handlePopulationTypeSelecter };
}
