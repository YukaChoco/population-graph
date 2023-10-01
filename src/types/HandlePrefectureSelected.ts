export default interface HandlePrefectureSelected {
  handlePrefectureSelected: (
    prefCode: number,
    selected: boolean,
  ) => Promise<void>;
}
