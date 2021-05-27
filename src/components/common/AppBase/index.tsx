import React from 'react';
import { Grid as MuiGrid, Grid, PropTypes } from '@material-ui/core';
import styled from 'styled-components/macro';

type AppBaseProps = {
  bgColor?: PropTypes.Color;
};

const BackgroundGrid = styled(MuiGrid)<Pick<AppBaseProps, 'bgColor'>>`
  background-color: ${(props) => {
    switch (props.bgColor) {
      case 'primary':
        return props.theme.palette.primary.main;

      case 'secondary':
        return props.theme.palette.secondary.main;

      default:
        return props.theme.palette.background.default;
    }
  }};
  min-height: calc(100vh - 56px);
  flex-grow: 1;
`;

export const AppBase: React.FC<AppBaseProps> = (props) => {
  return (
    <BackgroundGrid container bgColor={props.bgColor}>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </BackgroundGrid>
  );
};
