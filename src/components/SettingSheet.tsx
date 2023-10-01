import styles from '@/styles/SettingSheet.module.css';
import CheckBox from './atom/CheckBox';
import Prefecture from '@/types/Prefecture';

interface Props {
  prefectures: Prefecture[];
  handlePrefectureSelected: () => void;
}

export default function SettingSheet(props: Props) {
  return (
    <div className={styles.sheet}>
      都道府県を選択してください
      <CheckBox
        prefecture={props.prefectures[0]}
        handleChange={props.handlePrefectureSelected}
      />
      <CheckBox
        prefecture={props.prefectures[1]}
        handleChange={props.handlePrefectureSelected}
      />
      <CheckBox
        prefecture={props.prefectures[2]}
        handleChange={props.handlePrefectureSelected}
      />
    </div>
  );
}
