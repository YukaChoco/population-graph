import type { Meta, StoryObj } from '@storybook/react';
import PopulationGraph from '@/components/PopulationGraph';
import { argTypes, args, customArgs } from './args';
import type PopulationGraphProps from '@/types/PopulationGraphProps';

const meta = {
  title: 'Component/PopulationGraph',
  component: PopulationGraph,
  argTypes: argTypes,
} satisfies Meta<PopulationGraphProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: args };
export const SomeSelected: Story = { args: customArgs.someSelected };
export const NotSelected: Story = { args: customArgs.notSelected };
export const FewPrefectures: Story = { args: customArgs.fewPrefectures };
export const NoPrefectures: Story = { args: customArgs.noPrefectures };
export const FewLabels: Story = { args: customArgs.fewLabels };
export const NoLabels: Story = { args: customArgs.noLabels };
export const Young: Story = { args: customArgs.young };
export const Middle: Story = { args: customArgs.middle };
export const Older: Story = { args: customArgs.older };
