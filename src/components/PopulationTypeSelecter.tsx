import { POPULATION_TYPE } from '@/const';
import styles from '@/styles/PopulationTypeSelecter.module.css';
import type PopulationTypeSelecterProps from '@/types/PopulationTypeSelecterProps';

export default function PopulationTypeSelecter({
  populationType = '',
  handlePopulationTypeSelecter = (value: string) => { },
}: PopulationTypeSelecterProps) {

  return (
    <div className={styles.container}>
      <select
        value={populationType}
        className={styles.selecter}
        onChange={(event) => handlePopulationTypeSelecter(event.target.value)}
      >
        {POPULATION_TYPE.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
    </div>
  );
}
