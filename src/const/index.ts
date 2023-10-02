export const API_HEADERS = {
  headers: {
    'X-API-KEY': process.env.API_KEY,
  },
};

export const PREFECTURES_GROUP = [
  { groupName: '北海道地方', prefCode: [1] },
  { groupName: '東北地方', prefCode: [2, 3, 4, 5, 6, 7] },
  { groupName: '関東地方', prefCode: [8, 9, 10, 11, 12, 13, 14] },
  { groupName: '中部地方', prefCode: [15, 16, 17, 18, 19, 20, 21, 22, 23] },
  { groupName: '近畿地方', prefCode: [24, 25, 26, 27, 28, 29, 30] },
  { groupName: '中国地方', prefCode: [31, 32, 33, 34, 35] },
  { groupName: '四国地方', prefCode: [36, 37, 38, 39] },
  { groupName: '九州地方', prefCode: [40, 41, 42, 43, 44, 45, 46, 47] },
];

export const POPULATION_TYPE = [
  '総人口',
  '年少人口',
  '生産年齢人口',
  '老年人口',
];

export const GRAPH_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: '年 [年]',
      },
    },
    y: {
      title: {
        display: true,
        text: '人口 [人]',
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {},
  },
};

export const NO_DATA = [
  {
    label: ' 都道府県を選択してください',
    data: [],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: false,
  },
  {
    label: '',
    data: [],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: false,
  },
];
