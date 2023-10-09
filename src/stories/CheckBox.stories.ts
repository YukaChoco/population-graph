import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '../components/atom/CheckBox';
import type CheckBoxProps from '../types/CheckBoxProps';

const meta = {
  title: 'Component/Atom/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
    handleChange: { action: 'clicked', table: { disable: true }, },
    setLoading: { table: { disable: true } },
  },
} satisfies Meta<CheckBoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prefCode: 1,
    prefName: '北海道',
    selected: false,
    handleChange: () => { },
    setLoading: () => { },
  },
};
