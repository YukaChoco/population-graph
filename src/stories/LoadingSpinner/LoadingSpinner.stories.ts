import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '@/components/atom/LoadingSpinner';

const meta = {
  title: 'Component/Atom/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
