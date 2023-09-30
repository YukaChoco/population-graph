import styles from '@/styles/GraphSheet.module.css';
import PopulationGraph from './PopulationGraph';
import PopulationTypeSelecter from './PopulationTypeSelecter';

export default function GraphSheet() {
  return (
    <div className={styles.sheet}>
      <PopulationTypeSelecter />
      <PopulationGraph />
    </div>
  );
}
