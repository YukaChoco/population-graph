
export const args = {
  prefCode: 1,
  prefName: '北海道',
  selected: false,
  handleChange: (_prefCode: number, _selected: boolean) => { },
  setLoading: (_selected: boolean) => { },
}

export const argTypes = {
  prefCode: {
    control: {
      type: 'number',
    },
  },
  prefName: {
    control: {
      type: 'text',
    },
  },
  selected: {
    control: {
      type: 'boolean',
    },
  },
  handleChange: { table: { disable: true }, },
  setLoading: { table: { disable: true } },
}

export const customArgs = {
  selected: {
    ...args,
    selected: true,
  },
  hokkaido: {
    ...args,
    prefCode: 1,
    prefName: '北海道',
  },
  aomori: {
    ...args,
    prefCode: 2,
    prefName: '青森県',
  },
  iwate: {
    ...args,
    prefCode: 3,
    prefName: '岩手県',
  },
  miyagi: {
    ...args,
    prefCode: 4,
    prefName: '宮城県',
  },
  akita: {
    ...args,
    prefCode: 5,
    prefName: '秋田県',
  },
  yamagata: {
    ...args,
    prefCode: 6,
    prefName: '山形県',
  },
  fukushima: {
    ...args,
    prefCode: 7,
    prefName: '福島県',
  },
  ibaraki: {
    ...args,
    prefCode: 8,
    prefName: '茨城県',
  },
  tokyo: {
    ...args,
    prefCode: 13,
    prefName: '東京都',
  },
  kanagawa: {
    ...args,
    prefCode: 14,
    prefName: '神奈川県',
  },
  chiba: {
    ...args,
    prefCode: 12,
    prefName: '千葉県',
  },
  saitama: {
    ...args,
    prefCode: 11,
    prefName: '埼玉県',
  },
  tochigi: {
    ...args,
    prefCode: 9,
    prefName: '栃木県',
  },
  gunma: {
    ...args,
    prefCode: 10,
    prefName: '群馬県',
  },
  niigata: {
    ...args,
    prefCode: 15,
    prefName: '新潟県',
  },
  toyama: {
    ...args,
    prefCode: 16,
    prefName: '富山県',
  },
  ishikawa: {
    ...args,
    prefCode: 17,
    prefName: '石川県',
  },
  fukui: {
    ...args,
    prefCode: 18,
    prefName: '福井県',
  },
  yamanashi: {
    ...args,
    prefCode: 19,
    prefName: '山梨県',
  },
  nagano: {
    ...args,
    prefCode: 20,
    prefName: '長野県',
  },
  gifu: {
    ...args,
    prefCode: 21,
    prefName: '岐阜県',
  },
  shizuoka: {
    ...args,
    prefCode: 22,
    prefName: '静岡県',
  },
  aichi: {
    ...args,
    prefCode: 23,
    prefName: '愛知県',
  },
  mie: {
    ...args,
    prefCode: 24,
    prefName: '三重県',
  },
  shiga: {
    ...args,
    prefCode: 25,
    prefName: '滋賀県',
  },
  kyoto: {
    ...args,
    prefCode: 26,
    prefName: '京都府',
  },
  osaka: {
    ...args,
    prefCode: 27,
    prefName: '大阪府',
  },
  hyogo: {
    ...args,
    prefCode: 28,
    prefName: '兵庫県',
  },
  nara: {
    ...args,
    prefCode: 29,
    prefName: '奈良県',
  },
  wakayama: {
    ...args,
    prefCode: 30,
    prefName: '和歌山県',
  },
  tottori: {
    ...args,
    prefCode: 31,
    prefName: '鳥取県',
  },
  shimane: {
    ...args,
    prefCode: 32,
    prefName: '島根県',
  },
  okayama: {
    ...args,
    prefCode: 33,
    prefName: '岡山県',
  },
  hiroshima: {
    ...args,
    prefCode: 34,
    prefName: '広島県',
  },
  yamaguchi: {
    ...args,
    prefCode: 35,
    prefName: '山口県',
  },
  tokushima: {
    ...args,
    prefCode: 36,
    prefName: '徳島県',
  },
  kagawa: {
    ...args,
    prefCode: 37,
    prefName: '香川県',
  },
  ehime: {
    ...args,
    prefCode: 38,
    prefName: '愛媛県',
  },
  kochi: {
    ...args,
    prefCode: 39,
    prefName: '高知県',
  },
  fukuoka: {
    ...args,
    prefCode: 40,
    prefName: '福岡県',
  },
  saga: {
    ...args,
    prefCode: 41,
    prefName: '佐賀県',
  },
  nagasaki: {
    ...args,
    prefCode: 42,
    prefName: '長崎県',
  },
  kumamoto: {
    ...args,
    prefCode: 43,
    prefName: '熊本県',
  },
  oita: {
    ...args,
    prefCode: 44,
    prefName: '大分県',
  },
  miyazaki: {
    ...args,
    prefCode: 45,
    prefName: '宮崎県',
  },
  kagoshima: {
    ...args,
    prefCode: 46,
    prefName: '鹿児島県',
  },
  okinawa: {
    ...args,
    prefCode: 47,
    prefName: '沖縄県',
  },
}
