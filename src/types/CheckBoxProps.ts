import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelectedProps from '@/types/HandlePrefectureSelectedProps';

export default interface CheckBoxProps extends Pick<Prefecture, 'prefName' | 'prefCode' | 'selected'> {
  handleChange: HandlePrefectureSelectedProps['handlePrefectureSelected'];
  setLoading: (selected: boolean) => void;
}
