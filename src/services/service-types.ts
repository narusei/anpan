import firebase from 'firebase';

// Models
export type Anpan = {
  anpanId: string;
  title: string;
  problem: string;
  error: string;
  milk: string;
  isPublic: boolean;
  memos: Memo[];
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export type AnpanListItem = {
  anpanId: string;
  title: string;
  createdAt: firebase.firestore.Timestamp;
};

export type Memo = {
  memoId: string;
  content: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

// Document Models
export type AnpanDocument = {
  title: string;
  problem: string;
  error: string;
  milk: string;
  isPublic: boolean;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export type MemoDocument = {
  content: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};
