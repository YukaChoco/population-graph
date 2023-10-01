import styles from '@/styles/SettingSheet.module.css';
import CheckBox from './atom/CheckBox';
import Prefecture from '@/types/Prefecture';
import HandlePrefectureSelected from '@/types/HandlePrefectureSelected';

interface Props {
  prefectures: Prefecture[];
  handleChange: HandlePrefectureSelected['handlePrefectureSelected'];
}

export default function SettingSheet(props: Props) {
  const prefectures = props.prefectures;

  return (
    <div className={styles.sheet}>
      <fieldset>
        <legend>都道府県を選択してください</legend>
        {prefectures.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            prefecture={prefecture}
            handleChange={props.handleChange}
          />
        ))}
      </fieldset>
    </div>
  );
}
