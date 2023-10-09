import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelectedProps from '@/types/HandlePrefectureSelectedProps';
import type SetLoadingProps from './SetLoadingProps';

export default interface SettingSheetProps {
  prefectures: Prefecture[];
  handleChange: HandlePrefectureSelectedProps['handlePrefectureSelected'];
  setLoading: SetLoadingProps['setLoading'];
}

