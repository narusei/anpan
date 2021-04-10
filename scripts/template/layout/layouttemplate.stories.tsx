import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { LAYOUTTEMPLATE } from '.';

export default {
  title: 'page/LAYOUTTEMPLATE',
  component: LAYOUTTEMPLATE,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <LAYOUTTEMPLATE {...args} />;

export const Default = Template.bind({});
Default.args = {};
