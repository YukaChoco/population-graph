import type Prefecture from "./Prefecture";

export default interface GetPopulationWithTypeProps {
  getPopulationWithType: (prefecture: Prefecture, type: string) => number[];
}
