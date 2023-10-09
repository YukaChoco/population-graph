import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '@/components/atom/CheckBox';
import { argTypes, customArgs } from './args';
import type CheckBoxProps from '@/types/CheckBoxProps';

const meta = {
  title: 'Component/Atom/CheckBox/AllPrefectures',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: argTypes,
} satisfies Meta<CheckBoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hokkaido: Story = { args: customArgs.hokkaido };
export const Aomori: Story = { args: customArgs.aomori };
export const Iwate: Story = { args: customArgs.iwate };
export const Miyagi: Story = { args: customArgs.miyagi };
export const Akita: Story = { args: customArgs.akita };
export const Yamagata: Story = { args: customArgs.yamagata };
export const Fukushima: Story = { args: customArgs.fukushima };
export const Ibaraki: Story = { args: customArgs.ibaraki };
export const Tokyo: Story = { args: customArgs.tokyo };
export const Kanagawa: Story = { args: customArgs.kanagawa };
export const Chiba: Story = { args: customArgs.chiba };
export const Saitama: Story = { args: customArgs.saitama };
export const Tochigi: Story = { args: customArgs.tochigi };
export const Gunma: Story = { args: customArgs.gunma };
export const Niigata: Story = { args: customArgs.niigata };
export const Toyama: Story = { args: customArgs.toyama };
export const Ishikawa: Story = { args: customArgs.ishikawa };
export const Fukui: Story = { args: customArgs.fukui };
export const Yamanashi: Story = { args: customArgs.yamanashi };
export const Nagano: Story = { args: customArgs.nagano };
export const Gifu: Story = { args: customArgs.gifu };
export const Shizuoka: Story = { args: customArgs.shizuoka };
export const Aichi: Story = { args: customArgs.aichi };
export const Mie: Story = { args: customArgs.mie };
export const Shiga: Story = { args: customArgs.shiga };
export const Kyoto: Story = { args: customArgs.kyoto };
export const Osaka: Story = { args: customArgs.osaka };
export const Hyogo: Story = { args: customArgs.hyogo };
export const Nara: Story = { args: customArgs.nara };
export const Wakayama: Story = { args: customArgs.wakayama };
export const Tottori: Story = { args: customArgs.tottori };
export const Shimane: Story = { args: customArgs.shimane };
export const Okayama: Story = { args: customArgs.okayama };
export const Hiroshima: Story = { args: customArgs.hiroshima };
export const Yamaguchi: Story = { args: customArgs.yamaguchi };
export const Tokushima: Story = { args: customArgs.tokushima };
export const Kagawa: Story = { args: customArgs.kagawa };
export const Ehime: Story = { args: customArgs.ehime };
export const Kochi: Story = { args: customArgs.kochi };
export const Fukuoka: Story = { args: customArgs.fukuoka };
export const Saga: Story = { args: customArgs.saga };
export const Nagasaki: Story = { args: customArgs.nagasaki };
export const Kumamoto: Story = { args: customArgs.kumamoto };
export const Oita: Story = { args: customArgs.oita };
export const Miyazaki: Story = { args: customArgs.miyazaki };
export const Kagoshima: Story = { args: customArgs.kagoshima };
export const Okinawa: Story = { args: customArgs.okinawa };
