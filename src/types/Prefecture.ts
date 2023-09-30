export default interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface GetPrefecture {
  message: string;
  result: Prefecture[];
}
