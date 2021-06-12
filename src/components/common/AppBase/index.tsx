import React from 'react';
import { CssBaseline, GridDirection } from '@material-ui/core';
import styled from 'styled-components/macro';

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div<Pick<AppBaseProps, 'direction'>>`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
`;

type AppBaseProps = {
  direction?: GridDirection;
};

export const AppBase: React.FC<AppBaseProps> = (props) => {
  return (
    <Root>
      <CssBaseline />
      <AppContent direction={props.direction}>{props.children}</AppContent>
    </Root>
  );
};
