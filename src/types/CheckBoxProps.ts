import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelectedProps from '@/types/HandlePrefectureSelectedProps';
import type SetLoadingProps from './SetLoadingProps';

export default interface CheckBoxProps extends Pick<Prefecture, 'prefName' | 'prefCode' | 'selected'> {
  handleChange: HandlePrefectureSelectedProps['handlePrefectureSelected'];
  setLoading: SetLoadingProps['setLoading'];
}
