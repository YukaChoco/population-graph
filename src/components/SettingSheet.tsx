import styles from '@/styles/SettingSheet.module.css';
import CheckBox from '@/components/atom/CheckBox';
import type Prefecture from '@/types/Prefecture';
import type SettingSheetProps from '@/types/SettingSheetProps';
import { PREFECTURES_GROUP } from '@/const';

export default function SettingSheet({
  prefectures = [],
  handleChange = () => { },
  setLoading = (selected: boolean) => { }
}: SettingSheetProps) {

  const showCheckBox = (showPrefectures: Prefecture[]) => {
    const displayCheckBox = showPrefectures.map((prefecture) => (
      <CheckBox
        key={prefecture.prefCode}
        prefCode={prefecture.prefCode}
        prefName={prefecture.prefName}
        selected={prefecture.selected}
        handleChange={handleChange}
        setLoading={setLoading}
      />
    ));
    return displayCheckBox;
  };

  const showPrefecturesGroup = PREFECTURES_GROUP.map((group) => (
    <div key={group.groupName} className={styles.group}>
      <div className={styles.groupName}>{group.groupName}</div>
      <div className={styles.checkbox}>
        {group.prefCode.map((prefCode) => {
          const groupPrefectures = prefectures.filter(
            (prefecture) => prefecture.prefCode === prefCode,
          );
          return <div key={prefCode}>{showCheckBox(groupPrefectures)}</div>;
        })}
      </div>
    </div>
  ));

  return (
    <div className={styles.sheet}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          都道府県を選択してください(複数選択可)
        </legend>
        {showPrefecturesGroup}
      </fieldset>
    </div>
  );
}
