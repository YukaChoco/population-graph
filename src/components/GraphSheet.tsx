import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import Prefecture from '@/types/Prefecture';

interface Props {
  populationGraph: {
    populationType: string;
    labels: string[];
    prefectures: Prefecture[];
    getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  };
  populationTypeSelecter: {
    handlePopulationTypeSelecter: (value: string) => void;
  };
}

export default function GraphSheet(props: Props) {
  const { populationTypeSelecter, populationGraph } = props;
  return (
    <div className={styles.sheet}>
      <PopulationTypeSelecter {...populationTypeSelecter} />
      <PopulationGraph {...populationGraph} />
    </div>
  );
}
