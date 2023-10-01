import styles from '@/styles/SettingSheet.module.css';
import CheckBox from './atom/CheckBox';
import Prefecture from '@/types/Prefecture';

interface Props {
  prefectures: Prefecture[];
  handlePrefectureSelected: () => void;
}

export default function SettingSheet(props: Props) {
  const showCheckBox = props.prefectures.map((prefecture) => (
    <CheckBox
      key={prefecture.prefCode}
      prefecture={prefecture}
      handleChange={props.handlePrefectureSelected}
    />
  ));

  return (
    <div className={styles.sheet}>
      都道府県を選択してください
      {showCheckBox}
    </div>
  );
}
