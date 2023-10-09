import { NOT_SELECTED_PREFECTURES, PREFECTURES, SOME_POPULATION_PREFECTURES, FEW_PREFECTURES } from "../const/prefectures"

export const args = {
  prefectures: PREFECTURES,
  handleChange: () => { },
  setLoading: (_selected: boolean) => { }
}

export const argTypes = {
  prefectures: {
    control: {
      type: 'object',
    },
  },
  handleChange: { table: { disable: true }, },
  setLoading: { table: { disable: true }, },
}

export const customArgs = {
  someSelected: {
    ...args,
    prefectures: SOME_POPULATION_PREFECTURES,
  },
  notSelected: {
    ...args,
    prefectures: NOT_SELECTED_PREFECTURES,
  },
  fewPrefectures: {
    ...args,
    prefectures: FEW_PREFECTURES,
  },
  noPrefectures: {
    ...args,
    prefectures: [],
  },
}
