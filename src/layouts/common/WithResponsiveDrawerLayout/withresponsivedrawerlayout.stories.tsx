import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { WithResponsiveDrawerLayout, WithResponsiveDrawerLayoutProps } from '.';

export default {
  title: 'layout/common/WithResponsiveDrawerLayout',
  component: WithResponsiveDrawerLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<WithResponsiveDrawerLayoutProps> = (args) => (
  <WithResponsiveDrawerLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {};
