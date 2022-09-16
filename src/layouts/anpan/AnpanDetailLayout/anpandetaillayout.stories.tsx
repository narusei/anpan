import React from 'react';
import firebase from 'firebase';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AnpanDetailLayout, AnpanDetailLayoutProps } from '.';

export default {
  title: 'layout/anpan/AnpanDetailLayout',
  component: AnpanDetailLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AnpanDetailLayoutProps> = (args) => (
  <AnpanDetailLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  anpan: {
    id: '1',
    title:
      'Homebrewでyarnを入れる際にnvmで入れたnodeを使ってdependenciesを解決することができない',
    problem:
      ' --ignore-dependenciesフラグを込みでyarnをインストールした。既にnvmでnodeを入れているのにかかわらず、nodeを入れてくれとのerrorが発生した。',
    error:
      'The linking step did not complete successfully The formula built,but is not symlinked into /usr/local',
    milk: '',
    isPublic: true,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
  },
  memos: [],
};

export const AnyMemo = Template.bind({});
AnyMemo.args = {
  anpan: {
    id: '1',
    title:
      'Homebrewでyarnを入れる際にnvmで入れたnodeを使ってdependenciesを解決することができない',
    problem:
      ' --ignore-dependenciesフラグを込みでyarnをインストールした。既にnvmでnodeを入れているのにかかわらず、nodeを入れてくれとのerrorが発生した。',
    error:
      'The linking step did not complete successfully The formula built,but is not symlinked into /usr/local',
    milk: '',
    isPublic: true,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
  },
  memos: [
    {
      id: '1',
      content: '--ignore-dependenciesフラグを使うのはクレバーではなさそうだ',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
    {
      id: '2',
      content: 'バージョンアップに対応できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
  ],
};

export const Anpan = Template.bind({});
Anpan.args = {
  anpan: {
    id: '1',
    title:
      'Homebrewでyarnを入れる際にnvmで入れたnodeを使ってdependenciesを解決することができない',
    problem:
      ' --ignore-dependenciesフラグを込みでyarnをインストールした。既にnvmでnodeを入れているのにかかわらず、nodeを入れてくれとのerrorが発生した。',
    error:
      'The linking step did not complete successfully The formula built,but is not symlinked into /usr/local',
    milk: 'npmの方にyarnをインストールする方が良い気がしたのでそれで対応',
    isPublic: true,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
  },
  memos: [
    {
      id: '1',
      content: '--ignore-dependenciesフラグを使うのはクレバーではなさそうだ',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
    {
      id: '2',
      content: 'バージョンアップに対応できない',
      createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date('2021/06/11')),
    },
  ],
};
