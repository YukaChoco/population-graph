import Prefecture from '@/types/Prefecture';
import HandlePrefectureSelected from '@/types/HandlePrefectureSelected';

interface Props {
  prefecture: Prefecture;
  handleChange: HandlePrefectureSelected['handlePrefectureSelected'];
}

export default function CheckBox(props: Props) {
  const prefecture = props.prefecture;
  const handleChange = props.handleChange;

  const id = `${prefecture.prefCode}`;

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={prefecture.prefName}
        checked={prefecture.selected}
        onChange={(event) => {
          handleChange(prefecture.prefCode, event.target.checked);
        }}
      />
      <label htmlFor={id}>{prefecture.prefName}</label>
    </div>
  );
}
