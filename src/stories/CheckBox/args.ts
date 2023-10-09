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
}
