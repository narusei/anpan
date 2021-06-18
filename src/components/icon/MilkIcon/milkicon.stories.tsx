import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MilkIcon } from '.';

export default {
  title: 'component/icon/MilkIcon',
  component: MilkIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <MilkIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
