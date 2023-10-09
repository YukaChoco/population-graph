import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/Header';

const meta = {
  title: 'Component/Header',
  component: Header
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
