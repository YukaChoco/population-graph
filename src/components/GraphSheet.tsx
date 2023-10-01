import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import Prefecture from '@/types/Prefecture';

interface Props {
  populationGraph: {
    populationType: number;
    labels: string[];
    prefectures: Prefecture[];
  };
  populationTypeSelecter: {
    handlePopulationTypeSelecter: (value: string) => void;
  };
}

export default function GraphSheet(props: Props) {
  return (
    <div className={styles.sheet}>
      <PopulationTypeSelecter {...props.populationTypeSelecter} />
      <PopulationGraph {...props.populationGraph} />
    </div>
  );
}
