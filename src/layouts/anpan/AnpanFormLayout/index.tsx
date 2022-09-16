import {
  Grid,
  Grid as MuiGrid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  ArrowBackIos as ArrowBackIosIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';
import { AppBar } from '../../../components/common/AppBar';
import { AppBase } from '../../../components/common/AppBase';
import { AppMain } from '../../../components/common/AppMain';
import { Anpan } from '../../../entities/Anpan';
import { Memo } from '../../../entities/Memo';

const AnpanFormGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(8)}px;
  background: ${(props) => props.theme.palette.primary.main};
  min-height: 100%;
`;

export type AnpanFormLayoutProps = {
  pageTitleText: string;
  submitButtonText: string;
  anpan?: Anpan;
  memos?: Memo[];
  handleAnpanFormSubmit: (props: AnpanFormProps) => void;
};

export type AnpanFormProps = {
  title: string;
  problem: string;
  error: string;
  milk: string;
  memos: Memo[];
};

export const AnpanFormLayout = (): JSX.Element => {
  return (
    <AppBase>
      <AppBar
        left={
          <>
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
          </>
        }
        right={
          <>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </>
        }
        bgColor="inherit"
      ></AppBar>

      <AppMain bgColor="primary">
        <AnpanFormGrid>
          <Paper>
            <Grid>
              <Typography variant="h4">新規作成</Typography>
            </Grid>
            <Grid>
              <Typography variant="h6">タイトル</Typography>
            </Grid>
            <Grid>
              <Typography variant="h6">起きた問題</Typography>
            </Grid>
            <Grid>
              <Typography variant="h6">エラー文</Typography>
            </Grid>
          </Paper>
        </AnpanFormGrid>
      </AppMain>
    </AppBase>
  );
};
