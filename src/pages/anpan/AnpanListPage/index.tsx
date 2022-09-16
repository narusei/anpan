import React from 'react';
import { AnpanListLayout } from '../../../layouts/anpan/AnpanListLayout';
import { AnpanListItem } from '../../../entities/Anpan';
import { getAnpanList } from '../../../repositories/anpan';

export const AnpanListPage = (): JSX.Element => {
  const [anpans, setAnpans] = React.useState<AnpanListItem[]>([]);

  React.useEffect(() => {
    (async function () {
      const res = await getAnpanList();
      setAnpans(res);
    });
  }, []);

  return <AnpanListLayout anpans={anpans}></AnpanListLayout>;
};
