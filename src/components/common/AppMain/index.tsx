import React from 'react';
import { Paper as MuiPaper } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import styled from 'styled-components/macro';

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};
`;

export const AppMain: React.FC = (props) => {
  return <MainContent>{props.children}</MainContent>;
};
