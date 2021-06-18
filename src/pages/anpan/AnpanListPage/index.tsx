import React from 'react';
import { AnpanListLayout } from '../../../layouts/anpan/AnpanListLayout';
import * as api from '../../../services';
import * as serviceTypes from '../../../services/service-types';

export const AnpanListPage = (): JSX.Element => {
  const [anpans, setAnpans] = React.useState<serviceTypes.AnpanListItem[]>([]);

  React.useEffect(() => {
    (async function () {
      const res = await api.getAnpans();
      setAnpans(res);
    });
  }, []);

  return <AnpanListLayout anpans={anpans}></AnpanListLayout>;
};
