import firebase from 'firebase';
import { useAuth } from '../auth/AuthProvider';
import {
  buildAnpan,
  buildAnpanListItem,
  buildMemo,
  createDocument,
  updateDocument,
} from '../infra/firebase';
import {
  Anpan,
  AnpanListItem,
  CreateAnpan,
  UpdateAnpan,
} from '../entities/Anpan';
import { Memo, CreateMemo, UpdateMemo } from '../entities/Memo';

const auth = useAuth();
const anpanRef = firebase
  .firestore()
  .collection('users')
  .doc(auth.currentUser?.uid)
  .collection('anpan');

export const getAnpan = async (id: string): Promise<Anpan> => {
  const snapshot = await anpanRef.doc(id).get();
  const result = { id: snapshot.id, ...buildAnpan(snapshot.data) };
  return result;
};

export const createAnpan = async (data: CreateAnpan): Promise<Anpan> => {
  const doc: Omit<Anpan, 'id'> = createDocument(data);
  const ref = await anpanRef.add({
    ...doc,
  });
  const result = await getAnpan(ref.id);
  return result;
};

export const updateAnpan = async (data: UpdateAnpan): Promise<Anpan> => {
  const doc: Omit<Anpan, 'id'> = updateDocument(data);
  await anpanRef.doc(data.id).update({
    ...doc,
  });
  const result = await getAnpan(data.id);
  return result;
};

export const deleteAnpan = async (id: string): Promise<boolean> => {
  await anpanRef.doc(id).delete();
  return true;
};

export const getAnpanList = async (): Promise<AnpanListItem[]> => {
  const snapshot = await anpanRef.get();
  const result = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...buildAnpanListItem(doc.data),
    };
  });
  return result;
};

export const getMemo = async (anpanId: string, id: string): Promise<Memo> => {
  const snapshot = await anpanRef.doc(anpanId).collection('memo').doc(id).get();
  const result = { id: snapshot.id, ...buildMemo(snapshot.data) };
  return result;
};

export const createMemo = async (
  anpanId: string,
  data: CreateMemo
): Promise<Memo> => {
  const doc: Omit<Memo, 'id'> = createDocument(data);
  const ref = await anpanRef
    .doc(anpanId)
    .collection('memo')
    .add({
      ...doc,
    });
  const result = await getMemo(anpanId, ref.id);
  return result;
};

export const updateMemo = async (
  anpanId: string,
  data: UpdateMemo
): Promise<Memo> => {
  const doc: Omit<Memo, 'id'> = updateDocument(data);
  await anpanRef
    .doc(anpanId)
    .collection('memo')
    .doc(data.id)
    .update({
      ...doc,
    });
  const result = await getMemo(anpanId, data.id);
  return result;
};

export const deleteMemo = async (
  anpanId: string,
  id: string
): Promise<boolean> => {
  await anpanRef.doc(anpanId).collection('memo').doc(id).delete();
  return true;
};

export const getMemoList = async (anpanId: string): Promise<Memo[]> => {
  const snapshot = await anpanRef.doc(anpanId).collection('memo').get();
  const result = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...buildMemo(doc.data),
    };
  });
  return result;
};
