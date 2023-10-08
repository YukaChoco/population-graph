import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';
import type GraphSheetProps from '@/types/GraphSheetProps';
import type Prefecture from '@/types/Prefecture';

export default function GraphSheet({
  populationType = '',
  labels = [],
  prefectures = [],
  getPopulationWithType = (prefecture: Prefecture, type: string) => [],
  handlePopulationTypeSelecter = (value: string) => { },
}: GraphSheetProps) {

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
