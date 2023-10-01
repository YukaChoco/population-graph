import Prefecture from '@/types/Prefecture';

interface Props {
  prefecture: Prefecture;
  handleChange: () => void;
}

export default function CheckBox(props: Props) {
  return <div>{props.prefecture.prefName}</div>;
}
