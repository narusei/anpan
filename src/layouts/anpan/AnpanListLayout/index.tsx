import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Grid as MuiGrid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components/macro';
import { format } from 'date-fns';
// import { AnpanListItem } from '../../../services/service-types';
import { AnpanListItem } from '../../../entities/Anpan';
import { WithResponsiveDrawerLayout } from '../../common/WithResponsiveDrawerLayout';

const AnpanListGrid = styled(MuiGrid)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

export type AnpanListLayoutProps = {
  anpans: AnpanListItem[];
};

export const AnpanListLayout = (props: AnpanListLayoutProps): JSX.Element => {
  return (
    <WithResponsiveDrawerLayout bgColor="primary">
      <AnpanListGrid container spacing={1}>
        {props.anpans.map((anpan) => {
          return (
            <Grid item key={anpan.id} xs={12} sm={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {anpan.title}
                    </Typography>
                    {anpan.createdAt && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {format(anpan.createdAt.toDate(), 'yyyy/MM/dd')}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </AnpanListGrid>
    </WithResponsiveDrawerLayout>
  );
};
