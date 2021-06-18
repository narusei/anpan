import React from 'react';
import { Paper as MuiPaper, PropTypes } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import styled from 'styled-components/macro';

type AppMainProps = {
  bgColor?: PropTypes.Color | 'transparent';
  children: React.ReactNode;
};

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)<Pick<AppMainProps, 'bgColor'>>`
  flex: 1;
  background: ${(props) => {
    switch (props.bgColor) {
      case 'default':
        return props.theme.palette.background.default;

      case 'primary':
        return props.theme.palette.primary.main;

      case 'secondary':
        return props.theme.palette.secondary.main;

      default:
        return props.theme.palette.background.default;
    }
  }};
`;

export const AppMain = (props: AppMainProps): JSX.Element => {
  return <MainContent bgColor={props.bgColor}>{props.children}</MainContent>;
};
