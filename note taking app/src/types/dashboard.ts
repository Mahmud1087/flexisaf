import { Id, TableNames } from 'convex/_generated/dataModel';
import { SystemTableNames } from 'convex/server';

export type DashboardTabListType = 'Notes' | 'Archive' | 'Trash' | 'Profile';

export type NotesTabListType =
  | 'Today'
  | 'This Week'
  | 'This Month'
  | 'This Year';

export type CategoryType =
  | 'General'
  | 'All'
  | 'School'
  | 'Work'
  | 'Business'
  | 'Others'
  | null;

export type SingleNoteType = {
  _id: Id<TableNames | SystemTableNames>;
  _creationTime: number;
  userId: Id<'users'>;
  title: string;
  content: string;
  categories: string;
  tags: string;
  bgColor: string;
};

export type NoteListType = SingleNoteType[];
