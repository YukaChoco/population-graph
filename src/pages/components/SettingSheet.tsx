import styles from '@/styles/SettingSheet.module.css';
import usePrefectures from '@/hooks/usePrefectures';

export default function SettingSheet() {
  const { prefectures } = usePrefectures();
  console.log(prefectures);
  return <div className={styles.sheet}>hugahuga</div>;
}
