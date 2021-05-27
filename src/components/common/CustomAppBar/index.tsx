import React from 'react';
import {
  AppBar,
  Grid,
  Grid as MuiGrid,
  Toolbar,
  PropTypes,
} from '@material-ui/core';
import styled from 'styled-components/macro';

export type CustomAppBarProps = {
  left: JSX.Element;
  right: JSX.Element;
  bgColor?: PropTypes.Color | 'transparent';
};

const LeftGrid = styled(MuiGrid)`
  flex-grow: 1;
`;

export const CustomAppBar: React.FC<CustomAppBarProps> = ({
  left,
  right,
  bgColor,
}) => {
  return (
    <AppBar position="static" color={bgColor}>
      <Toolbar>
        <LeftGrid>{left}</LeftGrid>
        <Grid container justify="flex-end">
          {right}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
