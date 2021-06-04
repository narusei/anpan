import React from 'react';
import {
  Grid,
  Grid as MuiGrid,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import { ExpandMore as MoreIcon } from '@material-ui/icons';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { AppBar } from '../../components/common/AppBar';
import { AppBase } from '../../components/common/AppBase';
import { AppMain } from '../../components/common/AppMain';
import { SpacingContainer } from '../../components/common/SpacingContainer';

const HeroGrid = styled(MuiGrid)`
  height: calc(100vh - 56px);
`;

const HeroMain = styled(MuiGrid)`
  background-color: ${(props) => props.theme.palette.primary.main};
  height: calc((100vh - 56px) * 0.85);
  padding: ${(props) => props.theme.spacing(8)}px;
`;

const HeroSub = styled(MuiGrid)`
  flex: 1;
`;

const ExplanationGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(6)}px
    ${(props) => props.theme.spacing(20)}px;
`;

export const LandingPage: React.FC = () => {
  return (
    <AppBase>
      <AppBar
        left={
          <img
            src="/static/img/anpan-logo.svg"
            alt="anpan"
            title="anpan アンパン"
            width="94px"
            height="100%"
          ></img>
        }
        right={
          <>
            <Button color="inherit">サインイン</Button>
            <Button color="inherit">サインアップ</Button>
          </>
        }
        bgColor="inherit"
      ></AppBar>

      <AppMain>
        <HeroGrid container direction="column">
          <HeroMain container>
            <SpacingContainer
              container
              justify="center"
              alignItems="center"
              spacing={4}
              flex={true}
            >
              <Grid item>
                <SpacingContainer item container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h4">
                      ”するべからず”から
                      <br />
                      メモしよう
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      Anpanはつまづいたポイントを
                      <br />
                      簡潔にメモするための知見集積サービスです
                    </Typography>
                  </Grid>
                  <SpacingContainer
                    item
                    container
                    direction="column"
                    spacing={1}
                  >
                    <Grid item>
                      <Button variant="contained">今すぐ始める</Button>
                    </Grid>
                    <Grid item>
                      <Link to="/my-list">{'サインインはこちらから'}</Link>
                    </Grid>
                  </SpacingContainer>
                </SpacingContainer>
              </Grid>

              <Grid item>
                <img
                  src="/static/img/notebook.svg"
                  alt="note"
                  title="note"
                  width="400px"
                ></img>
              </Grid>
            </SpacingContainer>
          </HeroMain>
          <HeroSub
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">What is Anpan?</Typography>
            </Grid>
            <Grid item>
              <MoreIcon></MoreIcon>
            </Grid>
          </HeroSub>
        </HeroGrid>

        <Divider></Divider>

        <Grid>
          <ExplanationGrid container>
            <SpacingContainer
              container
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                md={6}
                sm={12}
              >
                <img
                  src="/static/img/add_note.svg"
                  alt="add_note"
                  title="add_note"
                  width="350px"
                ></img>
              </Grid>

              <Grid item md={6} sm={12}>
                <Grid>
                  <Typography variant="h5">
                    生じた症状や結果をメモしましょう
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1">
                    ここで頭を悩ませる必要はありません。とにかく目の前で起こった事象をありのままにメモにとります。
                  </Typography>
                </Grid>
              </Grid>
            </SpacingContainer>
          </ExplanationGrid>
          <ExplanationGrid container>
            <SpacingContainer
              container
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                md={6}
                sm={12}
              >
                <img
                  src="/static/img/content.svg"
                  alt="content"
                  title="content"
                  width="400px"
                ></img>
              </Grid>

              <Grid item md={6} sm={12}>
                <Grid>
                  <Typography variant="h5">
                    気づいたことやヒントになりそうなことを見つけたら書き加えましょう
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1">
                    実際に解決に役立ったかの評価は後回しにしましょう。気になるところや糸口になりそうなことをとりあえずでメモしましょう。
                  </Typography>
                </Grid>
              </Grid>
            </SpacingContainer>
          </ExplanationGrid>
          <ExplanationGrid container>
            <SpacingContainer
              container
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                md={6}
                sm={12}
              >
                <img
                  src="/static/img/answer.svg"
                  alt="answer"
                  title="answer"
                  width="300px"
                ></img>
              </Grid>

              <Grid item md={6} sm={12}>
                <Grid>
                  <Typography variant="h5">
                    最終的にあなたが導き出した答えを書きましょう
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1">
                    あんぱんには牛乳が良く合います。それに倣いAnpanではあなたが最後に導き出す答えのことをMilkと呼称します。これまで書き加えたヒントを引用して最終的な解決策を決定しましょう。
                  </Typography>
                </Grid>
              </Grid>
            </SpacingContainer>
          </ExplanationGrid>
        </Grid>
      </AppMain>
    </AppBase>
  );
};
