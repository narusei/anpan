import React from 'react';
import { useHistory } from 'react-router-dom';
import { AnpanFormLayout } from '../../../layouts/anpan/AnpanFormLayout';
import * as api from '../../../services';
import * as serviceTypes from '../../../services/service-types';
import { CreateAnpan } from '../../../entities/Anpan';
import { createAnpan } from '../../../repositories/anpan';
import { useAuth } from '../../../auth/AuthProvider';
import firebase from 'firebase';

export const AnpanCreatePage = (): JSX.Element => {
  const auth = useAuth();
  const history = useHistory();
  const onCreateAnpan = async (data: CreateAnpan) => {
    if (auth.currentUser) {
      const res = await createAnpan({
        ...data,
        milk: '',
        isPublic: false,
      });
      history.push('/my-list/' + res.id);
    }
  };

  return <AnpanFormLayout></AnpanFormLayout>;
};
