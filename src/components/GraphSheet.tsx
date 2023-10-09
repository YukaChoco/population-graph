import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from '@/components/PopulationGraph';
import PopulationTypeSelecter from '@/components/PopulationTypeSelecter';
import type GraphSheetProps from '@/types/GraphSheetProps';

export default function GraphSheet({
  populationType = '',
  labels = [],
  popultationData = [],
  handlePopulationTypeSelecter = (_value: string) => { },
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
        popultationData={popultationData}
      />
    </div>
  );
}
