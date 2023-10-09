import { POPULATION_TYPE } from "@/const"

export const args = {
  populationType: POPULATION_TYPE[0],
  handlePopulationTypeSelecter: (_value: string) => { },
}

export const argTypes = {
  populationType: { control: 'radio', options: POPULATION_TYPE },
  handlePopulationTypeSelecter: { table: { disable: true }, },
}

export const customArgs = {
  young: {
    ...args,
    populationType: POPULATION_TYPE[1],
  },
  middle: {
    ...args,
    populationType: POPULATION_TYPE[2],
  },
  older: {
    ...args,
    populationType: POPULATION_TYPE[3],
  },
}
