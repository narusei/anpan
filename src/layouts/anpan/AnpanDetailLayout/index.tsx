import {
  Button,
  Grid,
  Grid as MuiGrid,
  IconButton,
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';
import {
  ArrowBackIos as ArrowBackIosIcon,
  AccountCircle as AccountCircleIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@material-ui/icons';
import { MilkIcon } from '../../../components/icon/MilkIcon';
import React from 'react';
import styled from 'styled-components/macro';
import { format } from 'date-fns';
import { Anpan } from '../../../services/service-types';
import { AppBar } from '../../../components/common/AppBar';
import { AppBase } from '../../../components/common/AppBase';
import { AppMain } from '../../../components/common/AppMain';
import { SpacingContainer } from '../../../components/common/SpacingContainer';

export type AnpanDetailLayoutProps = {
  anpan?: Anpan;
};

const AnpanDetailGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(8)}px;
  background: ${(props) => props.theme.palette.primary.main};
  min-height: 100%;
`;

const AnpanDetailContentGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(2)}px
    ${(props) => props.theme.spacing(3)}px;
`;

const MemoGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(1)}px
    ${(props) => props.theme.spacing(3)}px;
`;

export const AnpanDetailLayout = ({
  anpan,
}: AnpanDetailLayoutProps): JSX.Element => {
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

      {anpan && (
        <AppMain>
          <AnpanDetailGrid>
            <Paper>
              <AnpanDetailContentGrid container direction="column" spacing={2}>
                <Grid item>
                  <Grid container justify="flex-end">
                    <IconButton>
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <IconButton>
                      <EditIcon></EditIcon>
                    </IconButton>
                  </Grid>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="h4">{anpan.title}</Typography>
                    </Grid>
                    <Grid item container justify="flex-end">
                      <Typography>
                        {format(anpan.createdAt.toDate(), 'yyyy/MM/dd')}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container spacing={1}>
                  <Grid item>
                    <Typography variant="h6">起きた問題</Typography>
                    <Typography>{anpan.problem}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">エラー文</Typography>
                    <Typography>{anpan.error}</Typography>
                  </Grid>
                </Grid>
              </AnpanDetailContentGrid>
              {anpan.milk && (
                <Grid>
                  <Divider></Divider>
                  <AnpanDetailContentGrid>
                    <Grid item>
                      <Grid>
                        <Typography variant="h6">Milk</Typography>
                      </Grid>
                      <Grid>{anpan.milk}</Grid>
                    </Grid>
                  </AnpanDetailContentGrid>
                </Grid>
              )}
              <AnpanDetailContentGrid>
                <Grid item container justify="flex-end">
                  <Button startIcon={<MilkIcon />}>
                    Anpan is good with Milk
                  </Button>
                </Grid>
              </AnpanDetailContentGrid>

              <Divider></Divider>
              {anpan.memos &&
                anpan.memos.map((memo) => {
                  return (
                    <Grid key={memo.memoId}>
                      <MemoGrid container alignItems="center">
                        <SpacingContainer item flex={true}>
                          {memo.content}
                        </SpacingContainer>
                        <Grid>
                          <IconButton>
                            <DeleteIcon></DeleteIcon>
                          </IconButton>
                          <IconButton>
                            <EditIcon></EditIcon>
                          </IconButton>
                        </Grid>
                      </MemoGrid>
                      <Divider></Divider>
                    </Grid>
                  );
                })}
              <Button fullWidth color="default" startIcon={<AddIcon />}>
                メモを追加
              </Button>
            </Paper>
          </AnpanDetailGrid>
        </AppMain>
      )}
    </AppBase>
  );
};
