import styles from '@/styles/SettingSheet.module.css';
import CheckBox from './atom/CheckBox';

export default function SettingSheet() {
  return (
    <div className={styles.sheet}>
      都道府県を選択してください
      <CheckBox />
      <CheckBox />
      <CheckBox />
    </div>
  );
}
