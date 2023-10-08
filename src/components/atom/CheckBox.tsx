import styles from '@/styles/Checkbox.module.css';
import type CheckBoxProps from '@/types/CheckBox';

export default function CheckBox({
  prefCode = 0,
  prefName = '',
  selected = false,
  handleChange = () => { },
  setLoading = (selected: boolean) => { }
}: CheckBoxProps) {
  const id = `${prefCode}`;

  return (
    <div className={styles.box}>
      <input
        type="checkbox"
        id={id}
        name={prefName}
        checked={selected}
        onChange={async (event) => {
          setLoading(true);
          await handleChange(prefCode, event.target.checked);
          setLoading(false);
        }}
      />
      <label htmlFor={id}>{prefName}</label>
    </div>
  );
}
