import { List as ListIcon } from '@material-ui/icons';
import React from 'react';

type DrawerListItem = {
  key: string;
  route: string;
  title: string;
  icon: JSX.Element;
};

export const DrawerList: DrawerListItem[] = [
  {
    key: 'my-list',
    route: '/my-list',
    title: 'My List',
    icon: <ListIcon />,
  },
];
