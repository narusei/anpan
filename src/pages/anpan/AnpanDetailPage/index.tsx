import React from 'react';
import { useParams } from 'react-router-dom';
import { AnpanDetailPageParams } from '../../../routes/params-types';
import { AnpanDetailLayout } from '../../../layouts/anpan/AnpanDetailLayout';
import * as api from '../../../services';
import * as serviceTypes from '../../../services/service-types';

export const AnpanDetailPage = (): JSX.Element => {
  const { id } = useParams<AnpanDetailPageParams>();
  const [anpan, setAnpan] = React.useState<serviceTypes.Anpan>();

  React.useEffect(() => {
    (async function () {
      const res = await api.getAnpan({ anpanId: id });
      setAnpan(res);
    });
  }, []);
  return <AnpanDetailLayout anpan={anpan}></AnpanDetailLayout>;
};
