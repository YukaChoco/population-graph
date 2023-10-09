import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '@/components/atom/CheckBox';
import { argTypes, args, customArgs } from './args';
import type CheckBoxProps from '@/types/CheckBoxProps';

const meta = {
  title: 'Component/Atom/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: argTypes,
} satisfies Meta<CheckBoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: args };

export const Selected: Story = { args: customArgs.selected };
