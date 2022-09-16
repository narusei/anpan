/**
 * For Firebase Document Convert to Application Entities
 **/

import firebase from 'firebase';
import { Anpan, AnpanListItem } from '../../entities/Anpan';
import { Memo } from '../../entities/Memo';

export type FirestoreTimestamp = firebase.firestore.Timestamp;

export const buildAnpan = (
  data: firebase.firestore.DocumentData
): Omit<Anpan, 'id'> => {
  const anpan: Omit<Anpan, 'id'> = {
    title: data.title,
    problem: data.problem,
    error: data.error,
    milk: data.milk,
    isPublic: data.isPublic,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };

  return anpan;
};

export const buildAnpanListItem = (
  data: firebase.firestore.DocumentData
): Omit<AnpanListItem, 'id'> => {
  const anpanListItem: Omit<AnpanListItem, 'id'> = {
    title: data.title,
    createdAt: data.createdAt,
  };

  return anpanListItem;
};

export const buildMemo = (
  data: firebase.firestore.DocumentData
): Omit<Memo, 'id'> => {
  const memo: Omit<Memo, 'id'> = {
    content: data.content,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };

  return memo;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createDocument = <T>(document: T) => {
  return {
    ...document,
    createdAt: firebase.firestore.Timestamp.now(),
    updatedAt: firebase.firestore.Timestamp.now(),
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateDocument = <T>(document: T) => {
  return {
    ...document,
    updatedAt: firebase.firestore.Timestamp.now(),
  };
};
