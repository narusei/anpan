import React from 'react';
import { useParams } from 'react-router-dom';
import { AnpanDetailPageParams } from '../../../routes/params-types';
import { AnpanDetailLayout } from '../../../layouts/anpan/AnpanDetailLayout';
import { Anpan } from '../../../entities/Anpan';
import { Memo } from '../../../entities/Memo';
import { getAnpan, getMemoList } from '../../../repositories/anpan';

export const AnpanDetailPage = (): JSX.Element => {
  const { id } = useParams<AnpanDetailPageParams>();
  const [anpan, setAnpan] = React.useState<Anpan>();
  const [memos, setMemos] = React.useState<Memo[]>([]);

  React.useEffect(() => {
    (async function () {
      const anpan = await getAnpan(id);
      setAnpan(anpan);
      const memos = await getMemoList(anpan.id);
      setMemos(memos);
    });
  }, []);
  return <AnpanDetailLayout anpan={anpan} memos={memos}></AnpanDetailLayout>;
};
