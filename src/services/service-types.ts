// Models
export type Anpan = {
  anpanId: string;
  title: string;
  problem: string;
  error: string;
  milk: string;
  isPublic: boolean;
  memos: Memo[];
  createdAt: string;
  updatedAt: string;
};

export type AnpanListItem = {
  anpanId: string;
  title: string;
  createdAt: string;
};

export type Memo = {
  memoId: string;
  content: string;
};
