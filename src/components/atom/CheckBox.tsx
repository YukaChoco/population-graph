import Prefecture from '@/types/Prefecture';
import HandlePrefectureSelected from '@/types/HandlePrefectureSelected';
import styles from '@/styles/Checkbox.module.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  prefecture: Prefecture;
  handleChange: HandlePrefectureSelected['handlePrefectureSelected'];
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function CheckBox(props: Props) {
  const { prefecture, handleChange, setLoading } = props;

  const id = `${prefecture.prefCode}`;

  return (
    <div className={styles.box}>
      <input
        type="checkbox"
        id={id}
        name={prefecture.prefName}
        checked={prefecture.selected}
        onChange={async (event) => {
          setLoading(true);
          await handleChange(prefecture.prefCode, event.target.checked);
          setLoading(false);
        }}
      />
      <label htmlFor={id}>{prefecture.prefName}</label>
    </div>
  );
}
