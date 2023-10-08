import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import Prefecture from '@/types/Prefecture';

interface Props {
  populationType: string;
  labels: string[];
  prefectures: Prefecture[];
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
  handlePopulationTypeSelecter: (value: string) => void;
}

export default function GraphSheet(props: Props) {
  const { populationType, labels, prefectures, getPopulationWithType, handlePopulationTypeSelecter } = props;
  return (
    <div className={styles.sheet}>
      <PopulationTypeSelecter
        populationType={populationType}
        handlePopulationTypeSelecter={handlePopulationTypeSelecter}
      />
      <PopulationGraph
        populationType={populationType}
        labels={labels}
        prefectures={prefectures}
        getPopulationWithType={getPopulationWithType}
      />
    </div>
  );
}
