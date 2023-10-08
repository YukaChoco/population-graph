import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import GraphSheetProps from '@/types/GraphSheetProps';
import Prefecture from '@/types/Prefecture';

export default function GraphSheet(props: GraphSheetProps) {
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
