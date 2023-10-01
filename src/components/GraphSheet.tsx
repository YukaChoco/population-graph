import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import Prefecture from '@/types/Prefecture';

interface Props {
  populationType: string;
  populationGraph: {
    labels: string[];
    prefectures: Prefecture[];
    getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  };
  populationTypeSelecter: {
    handlePopulationTypeSelecter: (value: string) => void;
  };
}

export default function GraphSheet(props: Props) {
  const { populationType, populationTypeSelecter, populationGraph } = props;
  return (
    <div className={styles.sheet}>
      <PopulationTypeSelecter
        populationType={populationType}
        {...populationTypeSelecter}
      />
      <PopulationGraph populationType={populationType} {...populationGraph} />
    </div>
  );
}
