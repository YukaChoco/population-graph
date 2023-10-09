import type { Meta, StoryObj } from '@storybook/react';
import LoadingModal from '@/components/LoadingModal';
import { argTypes, args } from './args';

const meta = {
  title: 'Component/LoadingModal',
  component: LoadingModal,
  argTypes: argTypes
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: args };
