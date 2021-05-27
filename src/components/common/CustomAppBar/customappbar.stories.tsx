import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CustomAppBar, CustomAppBarProps } from '.';
import { Button } from '@material-ui/core';

export default {
  title: 'component/common/CustomAppBar',
  component: CustomAppBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CustomAppBarProps> = (args) => <CustomAppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  left: (
    <img
      src="/static/img/anpan-logo.svg"
      alt="Anpan"
      title="Anpan アンパン"
      width="94px"
      height="100%"
    ></img>
  ),
  right: (
    <>
      <Button color="inherit">サインイン</Button>
      <Button color="inherit">サインアップ</Button>
    </>
  ),
};
