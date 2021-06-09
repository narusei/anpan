import * as serviceTypes from './service-types';
import firebase from 'firebase';

export const anpanConverter: firebase.firestore.FirestoreDataConverter<
  Omit<serviceTypes.Anpan, 'anpanId' | 'memos'>
> = {
  toFirestore(
    anpan: Omit<serviceTypes.Anpan, 'anpanId' | 'memos'>
  ): firebase.firestore.DocumentData {
    return {
      ...anpan,
      createdAt: anpan.createdAt
        ? anpan.createdAt
        : firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Omit<serviceTypes.Anpan, 'anpanId' | 'memos'> {
    const data = snapshot.data(options);
    return {
      title: data.title,
      problem: data.ploblem,
      error: data.error,
      milk: data.milk,
      isPublic: data.isPublic,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};

export const memoConverter: firebase.firestore.FirestoreDataConverter<
  Omit<serviceTypes.Memo, 'memoId'>
> = {
  toFirestore(
    memo: Omit<serviceTypes.Memo, 'memoId'>
  ): firebase.firestore.DocumentData {
    return {
      ...memo,
    };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Omit<serviceTypes.Memo, 'memoId'> {
    const data = snapshot.data(options);
    return {
      content: data.content,
    };
  },
};
