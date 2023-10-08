import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelectedProps from '@/types/HandlePrefectureSelectedProps';

export default interface SettingSheetProps {
  prefectures: Prefecture[];
  handleChange: HandlePrefectureSelectedProps['handlePrefectureSelected'];
  setLoading: (selected: boolean) => void;
}

