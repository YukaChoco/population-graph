import type { Meta, StoryObj } from '@storybook/react';
import PopulationTypeSelecter from '@/components/PopulationTypeSelecter';
import { argTypes, args, customArgs } from './args';
import type PopulationTypeSelecterProps from '@/types/PopulationTypeSelecterProps';

const meta = {
  title: 'Component/PopulationTypeSelecter',
  component: PopulationTypeSelecter,
  parameters: {
    layout: 'centered',
  },
  argTypes: argTypes,
} satisfies Meta<PopulationTypeSelecterProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: args };
export const Young: Story = { args: customArgs.young };
export const Middle: Story = { args: customArgs.middle };
export const Older: Story = { args: customArgs.older };
