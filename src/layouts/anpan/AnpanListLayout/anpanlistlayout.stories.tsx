import React from 'react';
import firebase from 'firebase';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AnpanListLayout, AnpanListLayoutProps } from '.';

export default {
  title: 'layout/anpan/AnpanListLayout',
  component: AnpanListLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AnpanListLayoutProps> = (args) => (
  <AnpanListLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  anpans: [
    {
      anpanId: '1',
      title: 'homebrewのエラーが解決できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
    {
      anpanId: '2',
      title: 'storybookのエラーが解決できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
    {
      anpanId: '3',
      title: 'reactのエラーが解決できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
    {
      anpanId: '4',
      title: 'vue.jsのエラーが解決できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/12')),
    },
    {
      anpanId: '5',
      title: 'M5Stackのエラーが解決できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/13')),
    },
    {
      anpanId: '6',
      title: 'C++の型定義が理解できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/12')),
    },
  ],
};
