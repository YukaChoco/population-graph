import { POPULATION_TYPE } from '@/const';
import styles from '@/styles/PopulationTypeSelecter.module.css';

interface Props {
  populationType: string;
  handlePopulationTypeSelecter: (value: string) => void;
}

export default function PopulationTypeSelecter(props: Props) {
  const { populationType, handlePopulationTypeSelecter } = props;
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
