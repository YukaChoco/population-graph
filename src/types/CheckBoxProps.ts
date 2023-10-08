import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelected from '@/types/HandlePrefectureSelected';

export default interface CheckBoxProps extends Pick<Prefecture, 'prefName' | 'prefCode' | 'selected'> {
  handleChange: HandlePrefectureSelected['handlePrefectureSelected'];
  setLoading: (selected: boolean) => void;
}
