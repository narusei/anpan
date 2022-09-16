import * as serviceTypes from './service-types';
import firebase from 'firebase';

export const anpanConverter: firebase.firestore.FirestoreDataConverter<serviceTypes.AnpanDocument> = {
  toFirestore(
    anpan: serviceTypes.AnpanDocument
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
  ): serviceTypes.AnpanDocument {
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

export const memoConverter: firebase.firestore.FirestoreDataConverter<serviceTypes.MemoDocument> = {
  toFirestore(
    memo: serviceTypes.MemoDocument
  ): firebase.firestore.DocumentData {
    return {
      ...memo,
      createdAt: memo.createdAt
        ? memo.createdAt
        : firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): serviceTypes.MemoDocument {
    const data = snapshot.data(options);
    return {
      content: data.content,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createDocument = <T>(document: T) => {
  return {
    ...document,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateDocument = <T>(document: T) => {
  return {
    ...document,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
};
