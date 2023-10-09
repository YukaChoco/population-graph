import type { Meta, StoryObj } from '@storybook/react';
import SettingSheet from '@/components/SettingSheet';
import { argTypes, args, customArgs } from './args';
import type SettingSheetProps from '@/types/SettingSheetProps';

const meta = {
  title: 'Component/SettingSheet',
  component: SettingSheet,
  argTypes: argTypes,
} satisfies Meta<SettingSheetProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: args };
export const SomeSelected: Story = { args: customArgs.someSelected };
export const Notselected: Story = { args: customArgs.notSelected };
export const FewPrefectures: Story = { args: customArgs.fewPrefectures };
export const NoPrefectures: Story = { args: customArgs.noPrefectures };
