/**
 * For Application Memo Entity Definition
 **/

import { FirestoreTimestamp } from '../infra/firebase';

export type Memo = {
  id: string;
  content: string;
  createdAt?: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
};

export type CreateMemo = Omit<Memo, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateMemo = Omit<Memo, 'createdAt'>;
