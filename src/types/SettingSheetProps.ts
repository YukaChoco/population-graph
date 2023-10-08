import type Prefecture from '@/types/Prefecture';
import type HandlePrefectureSelected from '@/types/HandlePrefectureSelected';

export default interface SettingSheetProps {
  prefectures: Prefecture[];
  handleChange: HandlePrefectureSelected['handlePrefectureSelected'];
  setLoading: (selected: boolean) => void;
}

