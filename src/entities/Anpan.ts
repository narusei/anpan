/**
 * For Application Anpan Entity Definition
 **/

import { FirestoreTimestamp } from '../infra/firebase';

export type Anpan = {
  id: string;
  title: string;
  problem: string;
  error?: string;
  milk?: string;
  isPublic: boolean;
  createdAt?: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
};

export type AnpanListItem = {
  id: string;
  title: string;
  createdAt?: FirestoreTimestamp;
};

export type CreateAnpan = Omit<Anpan, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateAnpan = Omit<Anpan, 'createdAt'>;
