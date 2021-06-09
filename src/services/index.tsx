import firebase from 'firebase';
import { useAuth } from '../auth/AuthProvider';
import * as serviceTypes from './service-types';
import * as serviceConverter from './service-converter';

const auth = useAuth();

/**
 * Get Anpan List
 * users/:userId/anpans
 */
export const getAnpans = async (): Promise<serviceTypes.AnpanListItem[]> => {
  const snapshot = await firebase
    .firestore()
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('anpans')
    .withConverter(serviceConverter.anpanConverter)
    .get();

  if (!snapshot.empty) {
    const result = snapshot.docs.map((doc) => {
      return {
        anpanId: doc.id,
        title: doc.data().title,
        createdAt: doc.data().createdAt,
      };
    });
    return result;
  }

  throw new Error('No Result');
};

/**
 * Get Anpan Detail
 * users/:userId/anpans/:anpanId
 */
export const getAnpan = async (
  request: Pick<serviceTypes.Anpan, 'anpanId'>
): Promise<serviceTypes.Anpan> => {
  const anpanSnap = await firebase
    .firestore()
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('anpans')
    .doc(request.anpanId)
    .withConverter(serviceConverter.anpanConverter)
    .get();

  const memosSnap = await firebase
    .firestore()
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('anpans')
    .doc(request.anpanId)
    .collection('memos')
    .withConverter(serviceConverter.memoConverter)
    .get();

  const anpan = anpanSnap.data();
  if (anpanSnap.exists && anpan && !memosSnap.empty) {
    return {
      ...anpan,
      anpanId: anpanSnap.id,
      memos: memosSnap.docs.map((doc) => {
        return {
          memoId: doc.id,
          content: doc.data().content,
        };
      }),
    };
  }

  throw new Error('No Result');
};

/**
 * Create Anpan
 * users/:userId/anpans
 */
export const createAnpan = async (
  request: Omit<serviceTypes.Anpan, 'anpanId' | 'memos'>
): Promise<serviceTypes.Anpan> => {
  const ref = await firebase
    .firestore()
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('anpans')
    .withConverter(serviceConverter.anpanConverter)
    .add({
      ...request,
    });

  const result = await getAnpan({ anpanId: ref.id });
  if (result) {
    return result;
  }

  throw new Error('No Result');
};

/**
 * Update Anpan
 * users/:userId/anpans/:anpanId
 */
export const updateAnpan = async (
  request: Omit<serviceTypes.Anpan, 'memos'>
): Promise<serviceTypes.Anpan> => {
  await firebase
    .firestore()
    .collection('users')
    .doc(auth.currentUser?.uid)
    .collection('anpans')
    .doc(request.anpanId)
    .withConverter(serviceConverter.anpanConverter)
    .update({ ...request });

  const result = await getAnpan({ anpanId: request.anpanId });
  if (result) {
    return result;
  }

  throw new Error('No Result');
};

/**
 * Delete Anpan
 * users/:userId/anpans/:anpanId
 */
export const deleteAnpan = async (
  request: Pick<serviceTypes.Anpan, 'anpanId'>
): Promise<boolean> => {
  try {
    await firebase
      .firestore()
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('anpans')
      .doc(request.anpanId)
      .delete();
    return true;
  } catch (e) {
    throw new Error('Processing Failed');
  }
};

/**
 * Create Memo
 * users/:userId/anpans/:anpanId/memos
 */
export const createMemo = async (
  request: Omit<serviceTypes.Memo, 'memoId'> &
    Pick<serviceTypes.Anpan, 'anpanId'>
): Promise<boolean> => {
  try {
    await firebase
      .firestore()
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('anpans')
      .doc(request.anpanId)
      .collection('memos')
      .withConverter(serviceConverter.memoConverter)
      .add({
        content: request.content,
      });
    return true;
  } catch (e) {
    throw new Error('Processing Failed');
  }
};

/**
 * Update Memo
 * users/:userId/anpans/:anpanId/memos/:memoId
 */
export const updateMemo = async (
  request: serviceTypes.Memo & Pick<serviceTypes.Anpan, 'anpanId'>
): Promise<boolean> => {
  try {
    await firebase
      .firestore()
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('anpans')
      .doc(request.anpanId)
      .collection('memos')
      .doc(request.memoId)
      .withConverter(serviceConverter.memoConverter)
      .update({
        content: request.content,
      });
    return true;
  } catch (e) {
    throw new Error('Processing Failed');
  }
};

/**
 * Delete Memo
 * users/:userId/anpans/:anpanId/memos/:memoId
 */
export const deleteMemo = async (
  request: Pick<serviceTypes.Memo, 'memoId'> &
    Pick<serviceTypes.Anpan, 'anpanId'>
): Promise<boolean> => {
  try {
    await firebase
      .firestore()
      .collection('users')
      .doc(auth.currentUser?.uid)
      .collection('anpans')
      .doc(request.anpanId)
      .collection('memos')
      .doc(request.memoId)
      .delete();
    return true;
  } catch (e) {
    throw new Error('Processing Failed');
  }
};
